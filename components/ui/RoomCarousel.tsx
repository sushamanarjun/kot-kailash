"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface RoomCarouselProps {
  images: { src: string; alt: string }[];
  priority?: boolean;
  objectFit?: "cover" | "contain";
}

export default function RoomCarousel({ images, priority = false, objectFit = "contain" }: RoomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      className="room-carousel-container"
    >
      <style>{`
        .rc-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(26,22,18,0.5);
          backdrop-filter: blur(4px);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease, background 0.3s ease;
          z-index: 2;
          border-radius: 50%;
        }
        .room-carousel-container:hover .rc-btn {
          opacity: 1;
        }
        .rc-btn:hover {
          background: rgba(197,153,90,0.8);
        }
        .rc-btn.prev {
          left: 20px;
        }
        .rc-btn.next {
          right: 20px;
        }
        .rc-dots {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
        }
        .rc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .rc-dot.active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>

      {images.map((img, i) => (
        <div
          key={i}
          className="st-img-inner"
          style={{
            position: "absolute",
            inset: 0,
            opacity: currentIndex === i ? 1 : 0,
            transition: "opacity 0.6s ease",
            zIndex: currentIndex === i ? 1 : 0,
            pointerEvents: currentIndex === i ? "auto" : "none",
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width:1000px) 100vw, 58vw"
            loading={priority && i === 0 ? "eager" : "lazy"}
            style={{ objectFit }}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button className="rc-btn prev" onClick={prevSlide} aria-label="Previous image">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="rc-btn next" onClick={nextSlide} aria-label="Next image">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div className="rc-dots">
            {images.map((_, i) => (
              <div
                key={i}
                className={"rc-dot" + (currentIndex === i ? " active" : "")}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
