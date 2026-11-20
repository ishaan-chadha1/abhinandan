import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { divisions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Seven divisions spanning industrial packaging, plastics, secondary aluminium, agri-plastics, outdoor furniture, protected farming and spirulina cultivation.",
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero title="Divisions" image="/images/divisions/aluminium.jpg" />

      {divisions.map((d, i) => {
        const blue = i % 2 === 1;
        const flip = i % 2 === 1;
        return (
          <section
            key={d.slug}
            id={d.slug}
            className="scroll-mt-24 py-16 md:py-24"
            style={blue ? { background: "linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%)" } : { background: "#ffffff" }}
          >
            <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl" style={{ boxShadow: "0 30px 60px -30px rgba(10,42,94,0.45)" }}>
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
                <p className="eyebrow" style={blue ? { color: "#bcd4ff" } : undefined}>
                  Division {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl" style={blue ? { color: "#fff" } : undefined}>
                  {d.name}
                </h2>
                <span className="mt-4 block h-[3px] w-14 rounded-full" style={{ background: "var(--blue-bright)" }} />
                <div className="mt-6 space-y-4">
                  {d.body.map((para, j) => (
                    <p
                      key={j}
                      className={j === 0 ? "text-lg leading-relaxed" : "leading-relaxed"}
                      style={{ color: blue ? "rgba(255,255,255,0.85)" : "var(--muted)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                {d.links && d.links.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {d.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${blue ? "btn-ghost" : "btn-outline"}`}
                      >
                        {l.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M8 7h9v9" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
