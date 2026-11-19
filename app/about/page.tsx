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
      <PageHero title="About Us" image="/images/home/about-facility.jpg" />

      {/* Intro */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 flex justify-center lg:order-1">
            <Image
              src="/images/brand/logo-orig.jpg"
              alt="Abhinandan Group logo"
              width={731}
              height={760}
              className="h-auto w-44 md:w-56"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Who We Are" title="A Legacy of Manufacturing Excellence" align="left" />
            <p className="lead mt-6">
              Abhinandan Group is a diversified Indian business enterprise with a strong
              foundation in industrial manufacturing. Built on decades of experience, the
              Group has established its presence through a commitment to quality,
              operational efficiency and enduring customer relationships.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Under the leadership of Mr. Kamal Sipani, Mr. Yeshwant Bothra and Mr.
              Abhishek Sipani, the Group has steadily expanded its capabilities beyond
              industrial packaging into plastics, secondary aluminium, agricultural
              solutions, outdoor furniture, farming and spirulina cultivation.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              With advanced manufacturing infrastructure, industry expertise and an
              evolving business portfolio, Abhinandan Group continues to strengthen its
              operations, explore new opportunities and deliver value to customers and
              partners across industries.
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
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl" style={{ color: "#fff" }}>
              Empowering Growth for the Future
            </h2>
            <span className="mx-auto mt-5 block h-[3px] w-16 rounded-full" style={{ background: "var(--blue-bright)" }} />
            <p className="mt-5 text-lg font-semibold" style={{ color: "#bcd4ff", fontFamily: "var(--font-heading)" }}>
              Strengthening Our Foundation. Expanding Our Horizons.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              At Abhinandan Group, growth is built on the continuous advancement of our
              capabilities, infrastructure and expertise. Through strategic investments,
              modern manufacturing technologies and expansion into diverse sectors, we
              remain focused on adapting to evolving industry requirements.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              Our approach combines the strength of established operations with the
              ambition to explore emerging opportunities, enabling us to build resilient
              businesses and create sustainable, long-term value.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <span
                  className="grid h-16 w-16 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(145deg, var(--blue-bright), #4f8ef7)", boxShadow: "0 14px 26px -12px rgba(0,0,0,0.55)" }}
                >
                  <Icon name={p.icon} size={30} />
                </span>
                <h3 className="mt-5 text-lg" style={{ color: "#fff" }}>
                  {p.title}
                </h3>
                {p.body && (
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{p.body}</p>
                )}
                <span className="mt-4 block h-1 w-8 rounded-full transition-all duration-300 group-hover:w-16" style={{ background: "var(--blue-bright)" }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <OurJourney />

      {/* Management */}
      <section id="management" className="section scroll-mt-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl md:text-6xl">Our Management</h2>
            <span className="mx-auto mt-5 block h-[3px] w-16 rounded-full" style={{ background: "var(--blue-bright)" }} />
            <p className="mt-4 text-base font-medium text-muted md:text-lg" style={{ fontFamily: "var(--font-heading)" }}>
              Guided by Visionary Leadership
            </p>
          </Reveal>
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
      <section id="philosophy" className="section scroll-mt-24" style={{ background: "linear-gradient(165deg, var(--sky) 0%, #dceafb 55%, #cfe0f7 100%)" }}>
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
              <h2 className="mt-3 text-3xl md:text-4xl" style={{ color: "#fff" }}>Building Value Beyond Business</h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                At Abhinandan Group, our vision extends beyond manufacturing and
                commercial growth. We recognise the importance of our people, partnerships
                and the communities connected to our businesses.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed">
                As we expand into new industries, we remain focused on responsible
                operations, continuous improvement and creating opportunities that
                contribute to lasting progress.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
