"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type CarouselItem = {
  image: string;
  title: string;
  desc?: string;
  href?: string;
  fit?: "cover" | "contain";
};

export default function CardCarousel({
  items,
  cta = "Know More",
  fit = "cover",
}: {
  items: CarouselItem[];
  cta?: string;
  fit?: "cover" | "contain";
}) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [arrowTop, setArrowTop] = useState<number | null>(null);

  const scrollByCards = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * dir, behavior: "smooth" });
  }, []);

  // Keep the side arrows vertically centred on the card image.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const media = track.querySelector<HTMLElement>(".card-media");
      if (media) setArrowTop(media.offsetTop + media.offsetHeight / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  const Arrow = ({ dir, side }: { dir: number; side: "left" | "right" }) => (
    <button
      type="button"
      aria-label={dir < 0 ? "Previous" : "Next"}
      onClick={() => scrollByCards(dir)}
      className="absolute z-20 hidden h-12 w-12 place-items-center rounded-full bg-white transition-transform hover:scale-105 md:grid"
      style={{
        top: arrowTop ?? "40%",
        transform: "translateY(-50%)",
        [side]: -4,
        border: "1px solid var(--line)",
        color: "var(--navy)",
        boxShadow: "0 10px 26px -10px rgba(10,42,94,0.45)",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={dir < 0 ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );

  return (
    <div ref={outerRef} className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-1 py-8 [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item) => {
          const itemFit = item.fit ?? fit;
          const inner = (
            <>
              <div
                className="card-media relative aspect-[4/3] overflow-hidden"
                style={itemFit === "contain" ? { background: "var(--sky-2)" } : undefined}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 360px"
                  className={itemFit === "contain" ? "object-contain p-5" : "object-cover"}
                />
                {itemFit === "cover" && (
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,42,94,0.35), rgba(10,42,94,0) 55%)" }}
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{item.title}</h3>
                {item.desc && (
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                )}
                {item.href && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue" style={{ fontFamily: "var(--font-heading)" }}>
                    {cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                )}
              </div>
            </>
          );

          const cardClass =
            "group flex w-[82vw] shrink-0 flex-col overflow-hidden rounded-2xl bg-white transition-shadow sm:w-[340px]";
          const cardStyle = {
            scrollSnapAlign: "start",
            border: "1px solid var(--line)",
            boxShadow: "0 20px 45px -24px rgba(10,42,94,0.32)",
          } as const;

          return item.href ? (
            <Link
              key={item.title}
              href={item.href}
              data-card
              className={`${cardClass} hover:shadow-[0_26px_54px_-24px_rgba(10,42,94,0.42)]`}
              style={cardStyle}
            >
              {inner}
            </Link>
          ) : (
            <div key={item.title} data-card className={cardClass} style={cardStyle}>
              {inner}
            </div>
          );
        })}
      </div>

      <Arrow dir={-1} side="left" />
      <Arrow dir={1} side="right" />
    </div>
  );
}
