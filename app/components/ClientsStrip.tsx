import Image from "next/image";
import { clients } from "@/lib/content";

function Tile({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-8 flex h-24 w-44 shrink-0 items-center justify-center">
      <Image
        src={logo}
        alt={name}
        width={200}
        height={96}
        className="max-h-14 w-auto object-contain"
      />
    </div>
  );
}

export default function ClientsStrip() {
  const row = [...clients, ...clients];
  return (
    <div className="marquee relative overflow-hidden">
      <div className="marquee-track py-6">
        {row.map((c, i) => (
          <Tile key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24" style={{ background: "linear-gradient(to right, #fff, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24" style={{ background: "linear-gradient(to left, #fff, transparent)" }} />
    </div>
  );
}
