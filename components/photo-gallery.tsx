"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  group?: string;
  floor?: string | null;
  width: number;
  height: number;
};

export function PhotoGallery({ images, filterBy = "group", label = "Fotogaléria" }: { images: GalleryImage[]; filterBy?: "group" | "floor" | false; label?: string }) {
  const [group, setGroup] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const groups = filterBy ? Array.from(new Set(images.map((image) => image[filterBy]).filter((name): name is string => Boolean(name)))) : [];
  const visibleImages = group === null || !filterBy ? images : images.filter((image) => image[filterBy] === group);
  const activeImage = activeIndex === null ? null : visibleImages[activeIndex];
  const isOpen = activeIndex !== null;

  const move = (direction: number) => setActiveIndex((index) => index === null ? null : (index + direction + visibleImages.length) % visibleImages.length);

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <>
      {groups.length > 1 ? (
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={`${label} – vybrať ${filterBy === "floor" ? "podlažie" : "priestor"}`}>
          {[null, ...groups].map((name) => (
            <button
              type="button" key={name ?? "all"} aria-pressed={name === group}
              onClick={() => setGroup(name)}
              className={`min-h-11 rounded-full border px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${name === group ? "border-[var(--pine)] bg-[var(--pine)] text-white" : "border-[var(--border-strong)] bg-transparent text-[var(--text)] hover:border-[var(--accent)]"}`}
            >
              {name ?? (filterBy === "floor" ? "Obe podlažia" : "Všetky priestory")} <span className="ml-1 opacity-65">{name === null ? images.length : images.filter((image) => filterBy && image[filterBy] === name).length}</span>
            </button>
          ))}
        </div>
      ) : null}
      <p className="mt-5 text-sm text-[var(--muted)]" aria-live="polite">{visibleImages.length} {visibleImages.length === 1 ? "fotografia" : visibleImages.length < 5 ? "fotografie" : "fotografií"} · Kliknutím zväčšíte záber.</p>
      <div className="mt-6 columns-2 gap-4 md:columns-3 lg:columns-4">
        {visibleImages.map((image, index) => (
          <figure className="mb-6 break-inside-avoid" key={image.src}>
            <button
              type="button"
              aria-label={`Otvoriť fotografiu ${index + 1}: ${image.title}, ${image.group}${image.floor ? `, ${image.floor}` : ""}`}
              className="group block w-full overflow-hidden rounded-lg bg-[var(--bg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              onClick={() => setActiveIndex(index)}
            >
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw" className="h-auto w-full transition duration-500 group-hover:scale-[1.025]" />
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
        className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none border-0 bg-[#151713] p-0 text-white backdrop:bg-black/80"
        onCancel={() => setActiveIndex(null)} onClose={() => setActiveIndex(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        }}
      >
        {activeImage ? (
          <div className="mx-auto flex h-full max-w-[1600px] flex-col p-4 sm:p-6">
            <div className="flex shrink-0 items-center justify-between gap-4">
              <div className="min-w-0" aria-live="polite">
                <p className="text-xs text-white/60">{activeImage.group}{activeImage.floor ? ` · ${activeImage.floor}` : ""} · {(activeIndex ?? 0) + 1} / {visibleImages.length}</p>
                <p className="mt-1 truncate font-serif text-xl sm:text-2xl">{activeImage.title}</p>
              </div>
              <button type="button" aria-label="Zavrieť galériu" onClick={() => setActiveIndex(null)} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-3xl hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">×</button>
            </div>
            <div className="relative my-4 min-h-0 flex-1"
              onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }}
              onTouchEnd={(event) => {
                if (touchStart.current === null) return;
                const distance = event.changedTouches[0].clientX - touchStart.current;
                if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
                touchStart.current = null;
              }}
            >
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" loading="eager" fetchPriority="high" className="object-contain" />
              {[-1, 1].map((direction) => (
                <button type="button" key={direction} aria-label={direction < 0 ? "Predchádzajúca fotografia" : "Nasledujúca fotografia"} onClick={() => move(direction)} className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-3xl hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-white ${direction < 0 ? "left-0 sm:left-3" : "right-0 sm:right-3"}`}>{direction < 0 ? "‹" : "›"}</button>
              ))}
            </div>
            <div className="flex shrink-0 gap-2 overflow-x-auto pb-1" aria-label="Náhľady fotografií">
              {visibleImages.map((image, index) => (
                <button type="button" key={image.src} aria-label={`Zobraziť fotografiu ${index + 1}: ${image.title}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => setActiveIndex(index)} className={`relative h-14 w-16 shrink-0 overflow-hidden rounded border-2 focus-visible:outline-2 focus-visible:outline-white ${index === activeIndex ? "border-white" : "border-transparent opacity-50 hover:opacity-100"}`}>
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
