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
      <section className="section" style={{ background: "linear-gradient(180deg, #d4e3f7 0%, #e4eefb 100%)" }}>
        <div className="container-x">
          <div className="mx-auto mb-12 flex max-w-md items-center justify-center gap-4">
            <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--line))" }} />
            <span className="eyebrow whitespace-nowrap" style={{ fontSize: "0.82rem", color: "var(--blue)" }}>
              The Abhinandan Group Advantage
            </span>
            <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--line), transparent)" }} />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
            {highlights.map((h, i) => (
              <Reveal
                key={h.primary}
                delay={i * 80}
                className="group relative flex min-h-[270px] flex-col items-center overflow-hidden rounded-[18px] px-5 pb-8 pt-8 text-center transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "linear-gradient(180deg, #ffffff 0%, #f7f9fd 100%)",
                  border: "1px solid var(--line)",
                  boxShadow: "0 24px 50px -32px rgba(10,42,94,0.55)",
                }}
              >
                {/* Faded industrial image at the bottom — soft-edged, no hard rectangle */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    backgroundImage: `url(${h.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.18,
                    filter: "grayscale(0.25) saturate(0.7)",
                    WebkitMaskImage: "radial-gradient(130% 115% at 50% 100%, #000 32%, transparent 82%)",
                    maskImage: "radial-gradient(130% 115% at 50% 100%, #000 32%, transparent 82%)",
                  }}
                />
                {/* Gold folded corner (top-right) */}
                <span
                  aria-hidden
                  className="absolute right-0 top-0 h-0 w-0"
                  style={{
                    borderTop: "46px solid #d9b265",
                    borderLeft: "46px solid transparent",
                    borderTopRightRadius: "18px",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute right-0 top-0 h-0 w-0"
                  style={{ borderTop: "46px solid rgba(255,255,255,0.25)", borderLeft: "46px solid transparent" }}
                />

                <span
                  className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(150deg, #2a66c4 0%, #0f3f86 55%, #0a2a5e 100%)",
                    boxShadow: "0 14px 28px -12px rgba(10,42,94,0.9), inset 0 1px 0 rgba(255,255,255,0.22)",
                  }}
                >
                  <Icon name={h.icon} size={30} />
                </span>

                <div className="relative z-10 mt-6 flex flex-1 flex-col items-center">
                  <p
                    className="text-[1.45rem] font-extrabold leading-[1.1] text-navy md:text-[1.6rem]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {h.primary}
                  </p>
                  {h.sub && (
                    <p className="mt-1.5 text-[0.9rem] font-medium leading-snug text-muted">
                      {h.sub}
                    </p>
                  )}
                  <span
                    className="mt-4 block h-[3px] w-10 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ background: "linear-gradient(90deg, #c69a4b, #e7c680)" }}
                  />
                </div>
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
      <section className="section" style={{ background: "linear-gradient(180deg, #e4eefb 0%, #cfe0f7 100%)" }}>
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Products"
            title="Engineered for Performance"
          />
          <div className="mt-12">
            <CardCarousel
              items={products.map((p) => ({
                image: p.image,
                title: p.name,
                fit: "contain",
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
      <section className="section" style={{ background: "linear-gradient(180deg, #dbe8fa 0%, #d1e1f7 100%)" }}>
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Clients"
            title="Trusted by Industry Leaders"
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
