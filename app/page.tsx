import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import SectionHeading from "./components/SectionHeading";
import Reveal from "./components/Reveal";
import Icon from "./components/Icon";
import CardCarousel from "./components/CardCarousel";
import StatBand from "./components/StatBand";
import ClientsStrip from "./components/ClientsStrip";
import InsideVideo from "./components/InsideVideo";
import { highlights, divisions, products, stats } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Highlights — the 5 points */}
      <section className="section" style={{ background: "var(--sky-2)" }}>
        <div className="container-x">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {highlights.map((h, i) => (
              <Reveal
                key={h.title}
                delay={i * 80}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center"
                style={{ border: "1px solid var(--line)" }}
              >
                <span
                  className="grid h-14 w-14 place-items-center rounded-xl text-white"
                  style={{ background: "linear-gradient(145deg, var(--blue-bright), var(--navy))" }}
                >
                  <Icon name={h.icon} size={26} />
                </span>
                <p
                  className="mt-4 text-sm font-semibold leading-snug text-navy"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {h.title}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About (home) */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/home/about-facility.jpg"
                alt="Abhinandan Group manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-4 hidden rounded-2xl px-8 py-6 text-white shadow-xl sm:block"
              style={{ background: "var(--blue)" }}
            >
              <p className="text-4xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>
                1,20,000
              </p>
              <p className="text-xs uppercase tracking-wider text-white/80">
                sq. ft. built-up
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A Legacy of Manufacturing Excellence"
              align="left"
            />
            <p className="lead mt-6">
              Abhinandan Group has built a legacy of over three decades in industrial
              manufacturing, guided by a commitment to quality, integrity and customer
              satisfaction. With a five-acre manufacturing facility comprising 1,20,000
              sq. ft. of built-up infrastructure, the Group combines advanced technology
              with extensive industry expertise.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Today, Abhinandan continues to strengthen its presence across diverse
              sectors, delivering dependable solutions and creating long-term value for
              its customers.
            </p>
            <Link href="/about" className="btn btn-outline mt-8">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Divisions carousel */}
      <section className="section" style={{ background: "var(--sky-2)" }}>
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Divisions"
            title="Diversified Businesses. One Strong Foundation."
            intro="Seven divisions spanning packaging, plastics, aluminium, agri-solutions, outdoor furniture, farming and spirulina."
          />
          <div className="mt-12">
            <CardCarousel
              items={divisions.map((d) => ({
                image: d.image,
                title: d.name,
                desc: d.summary,
                href: `/divisions#${d.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Reason we stand out */}
      <StatBand
        stats={stats}
        eyebrow="The Reason We Stand Out"
        title="Scale, Experience and Trust"
        image="/images/divisions/alvara-spirulina.jpg"
      />

      {/* Products carousel */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Products"
            title="Engineered for Performance"
            intro="A versatile product range built to meet demanding industrial and agricultural requirements."
          />
          <div className="mt-12">
            <CardCarousel
              items={products.map((p) => ({
                image: p.image,
                title: p.name,
                href: "/products",
                fit: p.fill ? "cover" : "contain",
              }))}
            />
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Inside Abhinandan */}
      <section className="section" style={{ background: "var(--sky-2)" }}>
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Inside Abhinandan" title="Where Scale Meets Precision" align="left" />
            <p className="lead mt-6">
              Explore the infrastructure, advanced machinery and manufacturing
              capabilities that drive Abhinandan forward — a closer look at the people,
              processes and technology behind every product we deliver.
            </p>
            <Link href="/infrastructure" className="btn btn-outline mt-8">
              Explore Our Capabilities
            </Link>
          </div>
          <Reveal>
            <InsideVideo />
          </Reveal>
        </div>
      </section>

      {/* Clients */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Clients"
            title="Trusted by Industry Leaders"
            intro="Partnering with leading FMCG, cement and industrial brands across India and beyond."
          />
        </div>
        <div className="mt-12">
          <ClientsStrip />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="container-x relative py-16 text-center md:py-20">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl" style={{ color: "#fff" }}>
              Let&rsquo;s build a dependable partnership.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Reach out to discuss your packaging, aluminium, agri-plastics or
              industrial requirements with our team.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8" style={{ background: "var(--blue-bright)" }}>
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
