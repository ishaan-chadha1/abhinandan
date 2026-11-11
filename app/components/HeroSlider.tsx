"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = heroSlides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(560px, 86vh, 820px)" }}
      aria-roledescription="carousel"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-[1100ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{
              transform: i === index ? "scale(1.06)" : "scale(1)",
              transition: "transform 7s ease-out",
            }}
          />
          {/* Blue brand overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(10,42,94,0.9) 0%, rgba(13,53,115,0.78) 45%, rgba(31,111,224,0.42) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-x">
          <div className="max-w-2xl text-white">
            <p className="eyebrow" style={{ color: "#bcd4ff" }}>
              Abhinandan Group
            </p>
            {heroSlides.map((slide, i) => (
              <div
                key={slide.title}
                className="transition-all duration-700"
                style={{
                  display: i === index ? "block" : "none",
                }}
              >
                <h1 className="mt-4 text-4xl md:text-6xl" style={{ color: "#fff" }}>
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                  {slide.subtitle}
                </p>
              </div>
            ))}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/divisions" className="btn btn-primary">
                Explore Our Divisions
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="group absolute left-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full md:left-6"
        style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.3)" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full md:right-6"
        style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.3)" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === index ? 28 : 8,
              background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

    </section>
  );
}
