import Link from "next/link";
import Image from "next/image";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const word = variant === "light" ? "#ffffff" : "var(--navy)";
  const sub = variant === "light" ? "rgba(255,255,255,0.75)" : "var(--muted)";
  return (
    <Link
      href="/"
      aria-label="Abhinandan Group — home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/images/brand/logo-mark.png"
        alt="Abhinandan"
        width={48}
        height={46}
        priority
        className="h-11 w-auto shrink-0"
      />
      <span className="leading-none">
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            letterSpacing: "0.12em",
            fontSize: "1.18rem",
            color: word,
            display: "block",
          }}
        >
          ABHINANDAN
        </span>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            letterSpacing: "0.42em",
            fontSize: "0.62rem",
            color: sub,
            display: "block",
            marginTop: 2,
          }}
        >
          GROUP
        </span>
      </span>
    </Link>
  );
}
