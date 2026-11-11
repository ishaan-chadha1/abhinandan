"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, contact } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block" style={{ background: "var(--navy)" }}>
        <div className="container-x flex h-10 items-center justify-between text-[0.8rem] text-white/80">
          <div className="flex items-center gap-6">
            <a href={`tel:${contact.people[0].phoneHref}`} className="hover:text-white">
              {contact.people[0].phone}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-white">
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white/60">Jigani, Bengaluru</span>
            <Link href="/contact" className="font-medium text-white hover:text-sky">
              Enquire&nbsp;&rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className="border-b transition-shadow"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          borderColor: "var(--line)",
          boxShadow: scrolled ? "0 8px 30px -18px rgba(10,42,94,0.45)" : "none",
        }}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-3.5 py-2 text-[0.93rem] font-medium transition-colors"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: isActive(item.href) ? "var(--blue)" : "var(--ink)",
                    }}
                  >
                    {item.label}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <span
                      className="absolute inset-x-3.5 -bottom-[1px] h-[2px] rounded-full transition-transform"
                      style={{
                        background: "var(--blue-bright)",
                        transform: isActive(item.href) ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                      }}
                    />
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div
                      className="min-w-60 overflow-hidden rounded-xl bg-white py-2"
                      style={{ border: "1px solid var(--line)", boxShadow: "0 20px 40px -16px rgba(10,42,94,0.3)" }}
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-sky"
                          style={{
                            fontFamily: "var(--font-heading)",
                            color: pathname === c.href ? "var(--blue)" : "var(--ink)",
                          }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3.5 py-2 text-[0.93rem] font-medium transition-colors"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: isActive(item.href) ? "var(--blue)" : "var(--ink)",
                  }}
                >
                  {item.label}
                  <span
                    className="absolute inset-x-3.5 -bottom-[1px] h-[2px] rounded-full transition-transform"
                    style={{
                      background: "var(--blue-bright)",
                      transform: isActive(item.href) ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                    }}
                  />
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
              Get in Touch
            </Link>
            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-lg lg:hidden"
              style={{ border: "1px solid var(--line)", color: "var(--navy)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden" style={{ borderTop: "1px solid var(--line)" }}>
            <nav className="container-x flex flex-col py-3">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-medium"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: isActive(item.href) ? "var(--blue)" : "var(--ink)",
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 flex flex-col border-l pl-4" style={{ borderColor: "var(--line)" }}>
                      {item.children
                        .filter((c) => c.href !== item.href)
                        .map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="py-2 text-sm font-medium"
                            style={{
                              fontFamily: "var(--font-heading)",
                              color: pathname === c.href ? "var(--blue)" : "var(--muted)",
                            }}
                          >
                            {c.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="btn btn-primary mt-3 w-full justify-center">
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
