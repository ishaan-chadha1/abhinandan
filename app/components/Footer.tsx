import Link from "next/link";
import Logo from "./Logo";
import { nav, contact, site } from "@/lib/site";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.72)" }}>
      <div className="container-x grid gap-10 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/60 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/60">
            <p>{contact.address}</p>
            {contact.people.map((p) => (
              <p key={p.phoneHref}>
                <span className="text-white/80">{p.name}</span>
                <br />
                <a href={`tel:${p.phoneHref}`} className="hover:text-white">
                  {p.phone}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; <CopyrightYear /> {site.name}. All rights reserved.
          </p>
          <p>Diversified manufacturing since 1995.</p>
        </div>
      </div>
    </footer>
  );
}
