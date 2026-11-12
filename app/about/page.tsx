import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import OurJourney from "../components/OurJourney";
import { leaders, pillars, principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A diversified, manufacturing-led business group with a legacy spanning over three decades — built on quality, integrity, innovation and customer trust.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on Trust. Driven by Innovation."
        intro="A diversified, manufacturing-led business group with a legacy spanning over three decades."
        image="/images/home/about-facility.jpg"
      />

      {/* Intro */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl" style={{ border: "6px solid #fff", boxShadow: "0 30px 60px -30px rgba(10,42,94,0.5)" }}>
              <Image
                src="/images/divisions/petro-pack.jpg"
                alt="Abhinandan Group operations"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Image
              src="/images/brand/logo-full.png"
              alt="Abhinandan Group logo"
              width={110}
              height={120}
              className="mb-6 h-20 w-auto"
            />
            <SectionHeading eyebrow="Who We Are" title="Three Decades of Diversified Manufacturing" align="left" />
            <p className="lead mt-6">
              Abhinandan Group is a diversified, manufacturing-led business group with a
              legacy spanning over three decades. Built on the principles of quality,
              integrity, innovation and customer trust, these values continue to shape
              our operations and long-term partnerships.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Under the leadership of Mr. Kamal Sipani, Mr. Yeshwant Bothra and Mr.
              Abhishek Sipani, the Group has steadily expanded its manufacturing
              capabilities, diversified its portfolio and strengthened its presence
              across industries. Today, Abhinandan operates across industrial packaging,
              plastics, secondary aluminium wire rods, agricultural solutions, outdoor
              furniture, farming and spirulina cultivation. Combining extensive
              manufacturing expertise with a forward-looking approach, the Group remains
              committed to operational excellence, responsible growth and exploring new
              opportunities in domestic and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Growth — bleed background + 4 pillars */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "url(/images/machinery/circular-lohia-nova-looms.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(10,42,94,0.95), rgba(18,78,158,0.82))" }} />
        <div className="container-x relative section">
          <SectionHeading eyebrow="Empowering Growth for the Future" title="Built on Trust. Driven by Innovation." light />
          <Reveal className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-white/80 leading-relaxed">
              At Abhinandan Group, growth is driven by a strong commitment to quality,
              innovation and operational excellence. Backed by advanced manufacturing
              infrastructure, modern technology and expertise across diverse industries,
              we continuously strengthen our capabilities to meet evolving market demands.
              Our focus extends beyond manufacturing to building lasting relationships,
              embracing new opportunities and delivering consistent value to our
              customers. Through efficient operations, strategic investments and a
              forward-thinking approach, we remain committed to responsible growth and
              long-term success.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}
              >
                <span className="grid h-13 w-13 place-items-center rounded-xl text-white" style={{ background: "var(--blue-bright)", width: 52, height: 52 }}>
                  <Icon name={p.icon} size={26} />
                </span>
                <h3 className="mt-5 text-lg" style={{ color: "#fff" }}>
                  {p.title}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <OurJourney />

      {/* Management */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Management"
            title="Guided by Visionary Leadership"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 110} className="group">
                <div
                  className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-3xl"
                  style={{ background: "linear-gradient(160deg, var(--navy) 10%, var(--blue) 100%)" }}
                >
                  <Image
                    src={l.image}
                    alt={l.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-5"
                    style={{ background: "linear-gradient(to top, rgba(10,42,94,0.92), transparent)" }}
                  >
                    <h3 className="text-xl" style={{ color: "#fff" }}>{l.name}</h3>
                    <p className="text-sm font-medium" style={{ color: "#bcd4ff" }}>{l.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-muted leading-relaxed">
              The growth and success of Abhinandan Group are guided by the vision and
              leadership of Mr. Kamal Sipani, Chairman, Mr. Yeshwant Bothra, Managing
              Director, and Mr. Abhishek Sipani, Director. Together with an experienced
              team of professionals, the leadership fosters a culture of integrity,
              accountability and continuous improvement. Their strategic direction and
              commitment to operational excellence continue to strengthen the
              Group&rsquo;s capabilities, build lasting partnerships and drive sustainable,
              long-term growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Infrastructure teaser */}
      <section className="section" style={{ background: "var(--sky-2)" }}>
        <div className="container-x">
          <Reveal
            className="grid items-center gap-0 overflow-hidden rounded-3xl bg-white lg:grid-cols-2"
            style={{ border: "1px solid var(--line)", boxShadow: "0 30px 60px -40px rgba(10,42,94,0.4)" }}
          >
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[340px]">
              <Image
                src="/images/about/infrastructure-map.jpg"
                alt="Abhinandan Group five-acre manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="eyebrow">Infrastructure &amp; Machinery</p>
              <h2 className="mt-3 text-2xl md:text-[2rem]">A Five-Acre Facility Built for Scale</h2>
              <p className="lead mt-4">
                Over 1,20,000 sq. ft. of built-up infrastructure, modern machinery and
                integrated production systems. Explore our full production line and
                manufacturing capabilities.
              </p>
              <Link href="/infrastructure" className="btn btn-primary mt-7">
                Explore Infrastructure &amp; Machinery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy + What Defines Us */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Principles That Endure. Progress That Inspires."
            intro="At Abhinandan Group, we believe that the true strength of a business lies not only in what it produces, but in the values that guide every decision. For over three decades, integrity, responsibility and a commitment to excellence have shaped our approach to business. As we continue to evolve across industries, these principles remain constant — encouraging us to think ahead, strengthen our capabilities and create meaningful value for our customers, employees, partners and communities."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={(i % 2) * 100} className="flex gap-5 rounded-2xl bg-white p-7" style={{ border: "1px solid var(--line)" }}>
                <span className="text-4xl leading-none text-sky" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--blue-bright)", opacity: 0.4 }}>
                  {p.no}
                </span>
                <div>
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Business */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="container-x relative py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow" style={{ color: "#bcd4ff" }}>Beyond Business</p>
              <h2 className="mt-3 text-3xl md:text-4xl" style={{ color: "#fff" }}>Creating Value That Lasts</h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                Our commitment extends beyond manufacturing and commercial success. We
                believe in empowering our people, strengthening industry partnerships,
                contributing to the communities around us and building businesses that
                create lasting value. As Abhinandan Group enters new sectors, our
                philosophy remains unchanged: to grow with purpose, operate with
                integrity and build for the future.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
