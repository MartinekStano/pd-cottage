"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  group?: string;
};

type PhotoGalleryProps = {
  images: GalleryImage[];
};

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + images.length) % images.length,
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
      if (event.key === "ArrowLeft") {
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  return (
    <>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            aria-label={`Otvoriť fotografiu: ${image.title}`}
            className={`group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] text-left shadow-sm transition hover:border-[var(--accent)] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
            key={`${image.src}-${image.title}`}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span
              className={`relative block ${
                index === 0 ? "aspect-[4/3] sm:h-full" : "aspect-[4/3]"
              }`}
            >
              <Image
                alt={image.alt}
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                fill
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
                src={image.src}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 via-black/28 to-transparent p-4 text-white">
                {image.group ? (
                  <span className="mb-1 block text-xs font-semibold uppercase text-white/72">
                    {image.group}
                  </span>
                ) : null}
                <span className="block font-serif text-xl leading-tight">
                  {image.title}
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          aria-label="Fotogaléria"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/92 px-4 py-5 text-white sm:px-6"
          role="dialog"
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <div className="flex min-h-12 items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate font-serif text-xl sm:text-2xl">
                  {activeImage.title}
                </p>
                <p className="mt-1 text-sm text-white/64">
                  {(activeIndex ?? 0) + 1} / {images.length}
                </p>
              </div>
              <button
                aria-label="Zavrieť galériu"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/10 text-2xl leading-none transition hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={close}
                type="button"
              >
                ×
              </button>
            </div>

            <div className="relative mt-4 min-h-0 flex-1">
              <Image
                alt={activeImage.alt}
                className="object-contain"
                fill
                priority
                sizes="100vw"
                src={activeImage.src}
              />
              <button
                aria-label="Predchádzajúca fotografia"
                className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/24 bg-black/36 text-3xl leading-none transition hover:bg-black/56 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4"
                onClick={showPrevious}
                type="button"
              >
                ‹
              </button>
              <button
                aria-label="Nasledujúca fotografia"
                className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/24 bg-black/36 text-3xl leading-none transition hover:bg-black/56 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4"
                onClick={showNext}
                type="button"
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  aria-label={`Zobraziť fotografiu: ${image.title}`}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition ${
                    index === activeIndex
                      ? "border-white"
                      : "border-white/20 opacity-58 hover:opacity-100"
                  }`}
                  key={`thumb-${image.src}`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    sizes="6rem"
                    src={image.src}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
