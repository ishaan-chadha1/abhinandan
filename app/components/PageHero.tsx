import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image = "/images/hero/slide-2.jpg",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {/* uniform vertical tint so the banner reads evenly across its full width */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(10,42,94,0.86) 0%, rgba(13,53,115,0.9) 100%)" }}
      />
      {/* symmetric edge vignette so both sides frame cleanly (no gaps) */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(10,42,94,0.5) 0%, rgba(10,42,94,0) 22%, rgba(10,42,94,0) 78%, rgba(10,42,94,0.5) 100%)" }}
      />
      <div className="container-x relative py-20 md:py-28">
        <nav className="mb-5 text-sm text-white/60" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">{title}</span>
        </nav>
        {eyebrow && (
          <p className="eyebrow" style={{ color: "#bcd4ff" }}>
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl" style={{ color: "#fff" }}>
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
