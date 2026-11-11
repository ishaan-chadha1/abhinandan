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
      <PageHero
        eyebrow="Our Divisions"
        title="Diversified Businesses. One Strong Foundation."
        intro="Expanding beyond packaging into multiple industries, driven by innovation, strategic growth and a shared commitment to excellence."
        image="/images/divisions/aluminium.jpg"
      />

      <div className="section">
        <div className="container-x flex flex-col gap-20 md:gap-28">
          {divisions.map((d, i) => {
            const flip = i % 2 === 1;
            return (
              <section
                key={d.slug}
                id={d.slug}
                className="grid items-center gap-10 scroll-mt-28 lg:grid-cols-2 lg:gap-16"
              >
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
                  <p className="eyebrow">Division {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 text-3xl md:text-4xl">{d.name}</h2>
                  <span className="mt-4 block h-[3px] w-14 rounded-full" style={{ background: "var(--blue-bright)" }} />
                  <div className="mt-6 space-y-4 text-muted leading-relaxed">
                    {d.body.map((para, j) => (
                      <p key={j} className={j === 0 ? "lead" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>
                  {d.link && (
                    <a
                      href={d.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline mt-7"
                    >
                      {d.link.label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </a>
                  )}
                </Reveal>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
