import Link from "next/link";

export default function PageHero({
  title,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  crumb?: string;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Shared textured banner background */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url(/images/hero/banner-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(10,42,94,0.55) 0%, rgba(10,36,80,0.62) 100%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(10,42,94,0.45) 0%, rgba(10,42,94,0) 30%, rgba(10,42,94,0) 70%, rgba(10,42,94,0.45) 100%)" }}
      />
      <div className="container-x relative flex flex-col items-center justify-center py-24 text-center md:py-32">
        <h1 className="text-5xl md:text-7xl" style={{ color: "#fff" }}>
          {title}
        </h1>
        <nav className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: "var(--font-heading)" }} aria-label="Breadcrumb">
          <Link href="/" className="text-white/70 transition-colors hover:text-white">
            Home
          </Link>
          <span className="text-white/40">›</span>
          <span style={{ color: "var(--blue-bright)" }}>{crumb ?? title}</span>
        </nav>
      </div>
    </section>
  );
}
