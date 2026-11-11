"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/lib/content";

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const value = useCountUp(stat.value, run);
  return (
    <div className="text-center">
      <div
        className="text-5xl md:text-6xl"
        style={{ fontFamily: "var(--font-heading)", fontWeight: 800, color: "#fff" }}
      >
        {value.toLocaleString("en-IN")}
        <span style={{ color: "#bcd4ff" }}>{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatBand({
  stats,
  eyebrow,
  title,
  image,
}: {
  stats: Stat[];
  eyebrow?: string;
  title?: string;
  image?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {image && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(120deg, rgba(10,42,94,0.92), rgba(18,78,158,0.8))" }}
      />
      <div className="container-x relative section">
        {(eyebrow || title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="eyebrow" style={{ color: "#bcd4ff" }}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl md:text-[2.4rem]" style={{ color: "#fff" }}>
                {title}
              </h2>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
