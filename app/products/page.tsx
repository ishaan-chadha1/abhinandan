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
      <PageHero title="Products" image="/images/products/bopp-laminated-sacks.jpg" />

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
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "var(--sky-2)" }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className={p.fill ? "object-cover" : "object-contain p-7"}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg text-navy" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                    {p.name}
                  </h3>
                  <span
                    className="mx-auto mt-2.5 block h-[3px] w-12 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ background: "linear-gradient(90deg, var(--blue), var(--blue-bright))" }}
                  />
                  {p.desc && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-3xl p-10 text-center md:p-14" style={{ background: "var(--sky-2)", border: "1px solid var(--line)" }}>
            <h2 className="text-2xl md:text-3xl">Looking for a Customised Solution?</h2>
            <p className="lead mx-auto mt-4 max-w-xl">
              With extensive manufacturing expertise and flexible production capabilities,
              we work closely with businesses to deliver products tailored to their
              specific requirements.
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
