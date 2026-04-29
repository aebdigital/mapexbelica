"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type GalleryImage = readonly [file: string, width: number, height: number];

type GalleryLightboxProps = {
  images: readonly GalleryImage[];
  imageBase: string;
};

export function GalleryLightbox({ images, imageBase }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const activeImage = activeIndex === null ? null : images[activeIndex];
  const activeSrc = activeImage ? `${imageBase}${activeImage[0]}` : "";
  const activeNumber = activeIndex === null ? 0 : activeIndex + 1;

  const labelledImages = useMemo(
    () =>
      images.map(([file, width, height], index) => ({
        file,
        width,
        height,
        src: `${imageBase}${file}`,
        label: `Realizácia MaPeX Belica ${index + 1}`
      })),
    [imageBase, images]
  );

  const close = () => setActiveIndex(null);

  const showNext = () => {
    setDirection("next");
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  };

  const showPrev = () => {
    setDirection("prev");
    setActiveIndex((current) =>
      current === null ? images.length - 1 : (current - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="gallery-grid">
        {labelledImages.map(({ src, file, width, height, label }, index) => (
          <button
            className="gallery-item"
            key={file}
            type="button"
            data-animate
            aria-label="Otvoriť fotografiu realizácie"
            onClick={() => {
              setDirection("next");
              setActiveIndex(index);
            }}
          >
            <Image
              src={src}
              alt={label}
              width={width}
              height={height}
              sizes="(max-width: 768px) 50vw, 18vw"
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galéria fotografií">
          <button className="lightbox-backdrop" type="button" aria-label="Zavrieť galériu" onClick={close} />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" aria-label="Zavrieť galériu" onClick={close}>
              <X aria-hidden="true" />
            </button>
            <button className="lightbox-nav lightbox-prev" type="button" aria-label="Predchádzajúca fotografia" onClick={showPrev}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <figure className={`lightbox-figure lightbox-slide-${direction}`} key={activeSrc}>
              <Image
                src={activeSrc}
                alt={`Realizácia MaPeX Belica ${activeNumber}`}
                width={activeImage[1]}
                height={activeImage[2]}
                sizes="100vw"
                priority
              />
              <figcaption>
                {activeNumber} / {images.length}
              </figcaption>
            </figure>
            <button className="lightbox-nav lightbox-next" type="button" aria-label="Ďalšia fotografia" onClick={showNext}>
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
