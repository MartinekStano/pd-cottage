"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { easeOut, prefersReducedMotion } from "@/lib/motion";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  group?: string;
  floor?: string | null;
  width: number;
  height: number;
};

type DragState = { pointer: number; downX: number; downY: number; originX: number; originY: number; axis: "x" | "y" | null; samples: { x: number; y: number; t: number }[] };

const slideGap = 24;

// Critically damped spring (Apple-style "response" in seconds), seeded with the release velocity in px/s so drag and animation have no seam.
function spring(from: number, to: number, velocity: number, onUpdate: (value: number) => void, onDone: () => void, response = 0.3) {
  const stiffness = (2 * Math.PI / response) ** 2;
  const damping = 4 * Math.PI / response;
  let value = from;
  let speed = velocity;
  let last = performance.now();
  let frame = requestAnimationFrame(function step(now) {
    for (let elapsed = Math.min(now - last, 64); elapsed > 0; elapsed -= 4) {
      const dt = Math.min(elapsed, 4) / 1000;
      speed += (-stiffness * (value - to) - damping * speed) * dt;
      value += speed * dt;
    }
    last = now;
    if (Math.abs(value - to) < 0.5 && Math.abs(speed) < 20) { onUpdate(to); onDone(); return; }
    onUpdate(value);
    frame = requestAnimationFrame(step);
  });
  return () => cancelAnimationFrame(frame);
}

// Where a flick would come to rest (Apple's deceleration projection), so a quick short swipe still turns the page.
const project = (velocity: number) => velocity / 1000 * 0.998 / (1 - 0.998);

// Past an edge the photo follows less and less instead of stopping dead.
const rubberband = (overshoot: number, dimension: number) => overshoot * dimension * 0.55 / (dimension + 0.55 * Math.abs(overshoot));

function releaseVelocity(samples: DragState["samples"], now: number) {
  const recent = samples.filter((sample) => now - sample.t <= 100);
  const first = recent[0];
  const last = recent[recent.length - 1];
  const elapsed = first && last ? last.t - first.t : 0;
  return elapsed > 0 ? { x: (last.x - first.x) / elapsed * 1000, y: (last.y - first.y) / elapsed * 1000 } : { x: 0, y: 0 };
}

export function PhotoGallery({ images, filterBy = "group", label = "Fotogaléria" }: { images: GalleryImage[]; filterBy?: "group" | "floor" | false; label?: string }) {
  const [group, setGroup] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const drag = useRef<DragState | null>(null);
  const stopSpring = useRef(() => {});
  const sliding = useRef(0);
  const groups = filterBy ? Array.from(new Set(images.map((image) => image[filterBy]).filter((name): name is string => Boolean(name)))) : [];
  const visibleImages = group === null || !filterBy ? images : images.filter((image) => image[filterBy] === group);
  const count = visibleImages.length;
  const activeImage = activeIndex === null ? undefined : visibleImages[activeIndex];
  const slides = activeIndex === null || !activeImage ? [] : (count > 1 ? [-1, 0, 1] : [0]).map((position) => {
    const image = visibleImages[(activeIndex + position + count) % count];
    return { image, position, key: count === 2 && position === 1 ? `${image.src}#next` : image.src };
  });

  const move = (direction: number) => setActiveIndex((index) => index === null ? null : (index + direction + count) % count);
  const pageWidth = () => (track.current?.offsetWidth ?? window.innerWidth) + slideGap;

  // The track is moved imperatively so a drag never re-renders React; swiping down also fades the dark background.
  const setOffset = (x: number, y: number) => {
    offset.current = { x, y };
    const scale = y > 0 ? 1 - Math.min(y / window.innerHeight, 1) * 0.15 : 1;
    if (track.current) track.current.style.transform = x || y ? `translate3d(${x}px, ${y}px, 0) scale(${scale})` : "";
    if (dialog.current) dialog.current.style.backgroundColor = y > 0 ? `rgb(21 23 19 / ${1 - Math.min(y / (window.innerHeight * 0.6), 1) * 0.7})` : "";
  };

  const stop = () => {
    stopSpring.current();
    sliding.current = 0;
  };

  const settle = (axis: "x" | "y", to: number, velocity: number, onDone = () => {}) => {
    stop();
    stopSpring.current = spring(offset.current[axis], to, velocity, (value) => setOffset(axis === "x" ? value : offset.current.x, axis === "y" ? value : offset.current.y), onDone);
  };

  // Swap to the neighbouring photo without a visual jump: it is already on screen, only its slot changes.
  const commit = (direction: number) => {
    flushSync(() => move(direction));
    setOffset(offset.current.x + direction * pageWidth(), offset.current.y);
  };

  // Slide to the previous (-1) or next (1) photo, or back to the current one (0).
  const slide = (direction: number, velocity: number) => {
    settle("x", -direction * pageWidth(), velocity, () => {
      sliding.current = 0;
      if (direction) commit(direction);
    });
    sliding.current = direction;
  };

  // Instant change for keyboard, thumbnails and reduced motion.
  const jump = (next: (index: number) => number) => {
    stop();
    flushSync(() => setActiveIndex((index) => index === null ? null : next(index)));
    setOffset(0, 0);
  };

  // A tap during a slide first lands the photo that is arriving, so every tap advances by one.
  const go = (direction: number) => {
    if (count < 2) return;
    if (prefersReducedMotion()) return jump((index) => (index + direction + count) % count);
    const arriving = sliding.current;
    stop();
    if (arriving) commit(arriving);
    slide(direction, 0);
  };

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) {
      // Keep the photo rendered while the dialog fades out.
      const timer = setTimeout(() => setActiveIndex(null), 250);
      return () => clearTimeout(timer);
    }
    const element = dialog.current;
    const overflow = document.body.style.overflow;
    stopSpring.current();
    sliding.current = 0;
    offset.current = { x: 0, y: 0 };
    if (track.current) track.current.style.transform = "";
    if (element) element.style.backgroundColor = "";
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" || drag.current || (event.target as Element).closest("button")) return;
    stop();
    drag.current = { pointer: event.pointerId, downX: event.clientX, downY: event.clientY, originX: offset.current.x, originY: offset.current.y, axis: null, samples: [] };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || event.pointerId !== state.pointer) return;
    const dx = event.clientX - state.downX;
    const dy = event.clientY - state.downY;
    if (!state.axis) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 10) return;
      state.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    state.samples.push({ x: event.clientX, y: event.clientY, t: event.timeStamp });
    if (state.axis === "x") {
      const x = state.originX + dx;
      setOffset(count > 1 ? x : rubberband(x, pageWidth()), state.originY);
    } else {
      const y = state.originY + dy;
      setOffset(state.originX, y < 0 ? rubberband(y, window.innerHeight) : y);
    }
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state || event.pointerId !== state.pointer) return;
    drag.current = null;
    if (!state.axis) return;
    const velocity = event.type === "pointercancel" ? { x: 0, y: 0 } : releaseVelocity(state.samples, event.timeStamp);
    const reduce = prefersReducedMotion();
    if (state.axis === "x") {
      const page = pageWidth();
      const projected = offset.current.x + project(velocity.x);
      const direction = count < 2 ? 0 : projected < -page * 0.35 ? 1 : projected > page * 0.35 ? -1 : 0;
      if (reduce) return direction ? jump((index) => (index + direction + count) % count) : setOffset(0, 0);
      slide(direction, velocity.x);
      return;
    }
    // Dismiss on a flick (0.11 px/ms) or a long pull, and leave the way the finger was going.
    if (offset.current.y > 120 || (offset.current.y > 30 && velocity.y > 110)) {
      if (!reduce) settle("y", window.innerHeight, velocity.y);
      close();
      return;
    }
    if (reduce) setOffset(0, 0);
    else settle("y", 0, velocity.y);
  };

  const selectGroup = (name: string | null) => {
    if (name === group) return;
    setGroup(name);
    grid.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, easing: easeOut });
  };

  return (
    <>
      {groups.length > 1 ? (
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={`${label} – vybrať ${filterBy === "floor" ? "podlažie" : "priestor"}`}>
          {[null, ...groups].map((name) => (
            <button
              type="button" key={name ?? "all"} aria-pressed={name === group}
              onClick={() => selectGroup(name)}
              className={`pressable min-h-11 rounded-full border px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${name === group ? "border-[var(--pine)] bg-[var(--pine)] text-white" : "border-[var(--border-strong)] bg-transparent text-[var(--text)] hover:border-[var(--accent)]"}`}
            >
              {name ?? (filterBy === "floor" ? "Obe podlažia" : "Všetky priestory")} <span className="ml-1 opacity-65">{name === null ? images.length : images.filter((image) => filterBy && image[filterBy] === name).length}</span>
            </button>
          ))}
        </div>
      ) : null}
      <p className="mt-5 text-sm text-[var(--muted)]" aria-live="polite">{count} {count === 1 ? "fotografia" : count < 5 ? "fotografie" : "fotografií"} · Kliknutím zväčšíte záber.</p>
      <div className="mt-6 grid grid-cols-2 items-start gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4" ref={grid}>
        {visibleImages.map((image, index) => (
          <figure className="min-w-0" key={image.src}>
            <button
              type="button"
              aria-label={`Otvoriť fotografiu ${index + 1}: ${image.title}, ${image.group}${image.floor ? `, ${image.floor}` : ""}`}
              className="group block w-full overflow-hidden rounded-lg bg-[var(--bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              onClick={() => { setActiveIndex(index); setOpen(true); }}
            >
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw" className="h-auto w-full transition duration-500 motion-safe:group-hover:scale-[1.025]" />
            </button>
            <figcaption className="mt-3 px-0.5">
              <p className="text-xs leading-5 text-[var(--muted)]">{image.group}{image.floor ? ` · ${image.floor}` : ""}</p>
              <p className="mt-0.5 text-sm font-semibold leading-6 text-[var(--text)]">{image.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-label={`${label} – zväčšená fotografia`}
        className="lightbox fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none border-0 bg-[#151713] p-0 text-white backdrop:bg-black/80"
        onCancel={close} onClose={close}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); jump((index) => (index - 1 + count) % count); }
          if (event.key === "ArrowRight") { event.preventDefault(); jump((index) => (index + 1) % count); }
        }}
      >
        {activeImage ? (
          <div className="mx-auto flex h-full max-w-[1600px] flex-col p-4 sm:p-6">
            <div className="flex shrink-0 items-center justify-between gap-4">
              <div className="min-w-0" aria-live="polite">
                <p className="text-xs text-white/60">{activeImage.group}{activeImage.floor ? ` · ${activeImage.floor}` : ""} · {(activeIndex ?? 0) + 1} / {count}</p>
                <p className="mt-1 truncate font-serif text-xl sm:text-2xl">{activeImage.title}</p>
              </div>
              <button type="button" aria-label="Zavrieť galériu" onClick={close} className="pressable flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-3xl transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">×</button>
            </div>
            <div className="relative my-4 min-h-0 flex-1 touch-pinch-zoom overflow-x-clip" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
              <div className="absolute inset-0" ref={track}>
                {slides.map(({ image, position, key }) => (
                  <div className="absolute inset-0" key={key} style={{ transform: `translateX(calc(${position * 100}% + ${position * slideGap}px))` }} aria-hidden={position !== 0 || undefined}>
                    <Image src={image.src} alt={position === 0 ? image.alt : ""} fill sizes="100vw" loading="eager" fetchPriority={position === 0 ? "high" : "auto"} draggable={false} className="select-none object-contain" />
                  </div>
                ))}
              </div>
              {[-1, 1].map((direction) => (
                <button type="button" key={direction} aria-label={direction < 0 ? "Predchádzajúca fotografia" : "Nasledujúca fotografia"} onClick={() => go(direction)} className={`pressable absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-3xl transition hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-white ${direction < 0 ? "left-0 sm:left-3" : "right-0 sm:right-3"}`}>{direction < 0 ? "‹" : "›"}</button>
              ))}
            </div>
            <div className="flex shrink-0 gap-2 overflow-x-auto pb-1" aria-label="Náhľady fotografií">
              {visibleImages.map((image, index) => (
                <button type="button" key={image.src} aria-label={`Zobraziť fotografiu ${index + 1}: ${image.title}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => jump(() => index)} className={`pressable relative h-14 w-16 shrink-0 overflow-hidden rounded border-2 transition focus-visible:outline-2 focus-visible:outline-white ${index === activeIndex ? "border-white" : "border-transparent opacity-50 hover:opacity-100"}`}>
                  <Image src={image.src} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
