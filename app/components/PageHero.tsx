import Link from "next/link";

export default function PageHero({
  title,
  crumb,
  image = "/images/hero/slide-2.jpg",
}: {
  eyebrow?: string;
  title: string;
  crumb?: string;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(10,42,94,0.86) 0%, rgba(13,53,115,0.9) 100%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(10,42,94,0.5) 0%, rgba(10,42,94,0) 22%, rgba(10,42,94,0) 78%, rgba(10,42,94,0.5) 100%)" }}
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
