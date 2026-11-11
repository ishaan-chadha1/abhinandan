import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { machinery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Infrastructure & Machinery",
  description:
    "A five-acre facility with over 1,20,000 sq. ft. of built-up infrastructure, equipped with modern machinery and integrated production systems for large-scale manufacturing.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure & Machinery"
        title="Advanced Infrastructure & Manufacturing Capabilities"
        intro="A five-acre facility with over 1,20,000 sq. ft. of built-up infrastructure, equipped with modern machinery and integrated production systems."
        image="/images/machinery/circular-lohia-nova-looms.jpg"
      />

      {/* Infrastructure overview */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
              <Image
                src="/images/about/infrastructure-map.jpg"
                alt="Abhinandan Group five-acre manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="The Facility" title="Engineered for Scale" align="left" />
            <p className="lead mt-6">
              Abhinandan Group&rsquo;s manufacturing operations are supported by a
              five-acre facility with over 1,20,000 sq. ft. of built-up infrastructure.
              Equipped with modern machinery, integrated production systems and advanced
              manufacturing technology, our facility is designed to support efficient,
              consistent and large-scale production.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Backed by skilled professionals and a commitment to operational excellence,
              we maintain a strong focus on quality, productivity and timely delivery to
              meet the evolving requirements of our industrial customers.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              {[
                { v: "5 Acres", l: "Facility Area" },
                { v: "1,20,000", l: "Sq. Ft. Built-up" },
                { v: "7,000 MT", l: "Annual Capacity" },
                { v: "300+", l: "Team Members" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-sky-2 p-4" style={{ border: "1px solid var(--line)" }}>
                  <p className="text-2xl text-blue" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>{s.v}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Machinery */}
      <section className="section" style={{ background: "var(--sky-2)" }}>
        <div className="container-x">
          <SectionHeading
            eyebrow="Production Line"
            title="Our Machinery"
            intro="A modern, high-capacity production line built around industry-leading equipment."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machinery.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 90} className="group flex flex-col overflow-hidden rounded-2xl bg-white" style={{ border: "1px solid var(--line)", boxShadow: "0 20px 45px -28px rgba(10,42,94,0.3)" }}>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={m.image} alt={m.name} fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="text-lg text-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                    {m.name}
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {m.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-3 border-t pt-4 text-sm" style={{ borderColor: "var(--line)" }}>
                    <div className="flex-1">
                      <p className="text-xl text-blue" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>{m.machines}</p>
                      <p className="text-xs uppercase tracking-wider text-muted">Machines</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-blue" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>{m.monthly}</p>
                      <p className="text-xs uppercase tracking-wider text-muted">Monthly Output</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
