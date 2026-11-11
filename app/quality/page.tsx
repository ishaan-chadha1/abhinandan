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

// Placeholder certificates until the official certificate files are supplied.
const certificates = [
  "ISO 9001:2015 — Quality Management",
  "ISO 14001 — Environmental Management",
  "BRCGS Packaging Materials",
  "FSSAI Compliance",
  "REACH / RoHS Compliance",
  "Product Test Certificate",
];

const commitments = [
  { icon: "shield", title: "Stringent Quality Control", body: "Every production stage is monitored to maintain consistency, precision and reliability across our products." },
  { icon: "cog", title: "Process Excellence", body: "Integrated production systems and modern machinery ensure repeatable, high-standard output at scale." },
  { icon: "spark", title: "Continuous Improvement", body: "We invest in technology and process optimisation to continually raise our manufacturing standards." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Quality That Builds Trust"
        intro="Committed to delivering consistent quality, dependable solutions and lasting customer relationships across industries."
        image="/images/machinery/jp-6-colour-flexo-printing.jpg"
      />

      {/* Commitments */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Built on Consistency and Precision"
            intro="Quality is at the core of everything we manufacture — from raw material selection to final dispatch."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 100} className="rounded-2xl bg-white p-8" style={{ border: "1px solid var(--line)" }}>
                <span className="grid h-14 w-14 place-items-center rounded-xl text-white" style={{ background: "linear-gradient(145deg, var(--blue-bright), var(--navy))" }}>
                  <Icon name={c.icon as "shield"} size={26} />
                </span>
                <h3 className="mt-5 text-xl">{c.title}</h3>
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
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((name, i) => (
              <Reveal
                key={name}
                delay={(i % 3) * 90}
                className="flex items-center gap-5 rounded-2xl bg-white p-6"
                style={{ border: "1px solid var(--line)" }}
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl" style={{ background: "var(--sky)", color: "var(--blue)" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                    <path d="M14 3v5h5M9 13l2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-navy" style={{ fontFamily: "var(--font-heading)" }}>{name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">Certificate to be added</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Official certificate documents will be displayed here once provided.
          </p>
        </div>
      </section>
    </>
  );
}
