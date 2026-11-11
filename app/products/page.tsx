import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "A versatile range of woven packaging, laminated sacks, shopping bags, aluminium wire rod, geomembranes and woven fabric built for industrial and agricultural use.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Engineered for Performance"
        intro="From woven packaging and laminated sacks to secondary aluminium wire rod and geomembranes — a product range built to meet demanding requirements."
        image="/images/products/bopp-laminated-sacks.jpg"
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 3) * 90}
                className="hover-zoom group overflow-hidden rounded-2xl bg-white"
                style={{ border: "1px solid var(--line)", boxShadow: "0 18px 40px -30px rgba(10,42,94,0.5)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: p.fill ? "var(--navy)" : "var(--sky-2)" }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className={p.fill ? "object-cover" : "object-contain p-6"}
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-6">
                  <h3 className="text-lg text-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                    {p.name}
                  </h3>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-blue" style={{ border: "1px solid var(--line)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-3xl p-10 text-center md:p-14" style={{ background: "var(--sky-2)", border: "1px solid var(--line)" }}>
            <h2 className="text-2xl md:text-3xl">Looking for a custom packaging solution?</h2>
            <p className="lead mx-auto mt-4 max-w-xl">
              Our team can tailor specifications, printing and sizing to your exact
              industrial or agricultural requirements.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
