import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className="text-3xl md:text-[2.5rem]"
        style={light ? { color: "#fff" } : undefined}
      >
        {title}
      </h2>
      <span
        className={`mt-4 block h-[3px] w-14 rounded-full ${isCenter ? "mx-auto" : ""}`}
        style={{ background: "var(--blue-bright)" }}
      />
      {intro && (
        <p
          className="lead mt-5"
          style={light ? { color: "rgba(255,255,255,0.8)" } : undefined}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
