import Image from "next/image";

// Placeholder for the "Inside Abhinandan" facility video (to be supplied).
// When the video is available, drop it in /public/videos and swap this block
// for a <video> element.
export default function InsideVideo() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      style={{ border: "1px solid var(--line)" }}
    >
      <div className="relative aspect-video">
        <Image
          src="/images/hero/slide-3.jpg"
          alt="Inside the Abhinandan manufacturing facility"
          fill
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,42,94,0.25), rgba(10,42,94,0.72))" }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center text-white">
            <span
              className="mx-auto grid h-20 w-20 place-items-center rounded-full"
              style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/70">
              Facility Film · Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
