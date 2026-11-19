import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Committed to delivering consistent quality, dependable solutions and lasting customer relationships through stringent quality standards and certified processes.",
};

const certificates = [
  { title: "ISO 9001:2015 — Abhinandan Petro Pack", slug: "iso" },
  { title: "ISO 9001:2015 — Abhinandan Plastics", slug: "qms" },
  { title: "BIS Licence", slug: "bis" },
  { title: "Udyam Registration", slug: "udyam" },
  { title: "MSME Certificate", slug: "msme" },
  { title: "Import Export Code (IEC)", slug: "iec" },
];

const commitments = [
  { icon: "shield", title: "Stringent Quality Control", body: "Every production stage is monitored to maintain consistency, precision and reliability across our products." },
  { icon: "cog", title: "Process Excellence", body: "Integrated production systems and modern machinery ensure repeatable, high-standard output at scale." },
  { icon: "spark", title: "Continuous Improvement", body: "We invest in technology and process optimisation to continually raise our manufacturing standards." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero title="Quality" image="/images/machinery/jp-6-colour-flexo-printing.jpg" />

      {/* Commitments */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Built on Consistency and Precision"
            intro="Quality is at the core of everything we manufacture — from raw material selection to final dispatch."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 100}
                className="group relative flex flex-col items-center overflow-hidden rounded-3xl bg-white p-9 text-center transition-all duration-300 hover:-translate-y-2"
                style={{ border: "1px solid var(--line)", boxShadow: "0 20px 44px -30px rgba(10,42,94,0.5)" }}
              >
                <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: "linear-gradient(90deg, var(--blue-bright), var(--navy))" }} />
                <span
                  className="grid h-20 w-20 place-items-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(145deg, var(--blue-bright), var(--navy))", boxShadow: "0 16px 30px -14px rgba(18,78,158,0.8)" }}
                >
                  <Icon name={c.icon as "shield"} size={34} />
                </span>
                <h3 className="mt-6 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section" style={{ background: "var(--sky-2)" }}>
        <div className="container-x">
          <SectionHeading
            eyebrow="Certifications"
            title="Certified for Confidence"
            intro="Our certifications reflect our adherence to internationally recognised quality, safety and environmental standards."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 90}>
                <a
                  href={`/certificates/${c.slug}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1.5"
                  style={{ border: "1px solid var(--line)", boxShadow: "0 18px 40px -30px rgba(10,42,94,0.5)" }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden" style={{ background: "#f3f6fb" }}>
                    <Image
                      src={`/images/certificates/${c.slug}.png`}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t p-5" style={{ borderColor: "var(--line)" }}>
                    <p className="text-sm font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>
                      {c.title}
                    </p>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-blue transition-colors group-hover:bg-sky" style={{ border: "1px solid var(--line)" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Tap any certificate to view the full document.
          </p>
        </div>
      </section>
    </>
  );
}
