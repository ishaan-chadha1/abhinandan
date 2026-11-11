import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Abhinandan Group — Jigani Hobli, Anekal Taluk, Bengaluru. Phone, email and location details.",
};

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.address
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let&rsquo;s Start a Conversation"
        intro="Reach out to discuss your packaging, aluminium, agri-plastics or industrial requirements — our team is here to help."
        image="/images/home/about-facility.jpg"
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-3 text-3xl">We&rsquo;d love to hear from you</h2>
            <span className="mt-4 block h-[3px] w-14 rounded-full" style={{ background: "var(--blue-bright)" }} />

            <div className="mt-8 space-y-6">
              <Reveal className="flex gap-4 rounded-2xl bg-white p-5" style={{ border: "1px solid var(--line)" }}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--blue)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base">Visit Us</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{contact.address}</p>
                  <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-blue">
                    View on Google Maps &rarr;
                  </a>
                </div>
              </Reveal>

              <Reveal delay={90} className="flex gap-4 rounded-2xl bg-white p-5" style={{ border: "1px solid var(--line)" }}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--blue)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5c0 8.8 6.2 15 15 15a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-.8-1l-3.6-.7a1 1 0 0 0-1 .4l-.9 1.2a12 12 0 0 1-5-5l1.2-.9a1 1 0 0 0 .4-1L10.5 4.8a1 1 0 0 0-1-.8H7a2 2 0 0 0-2 2Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base">Call Us</h3>
                  {contact.people.map((p) => (
                    <p key={p.phoneHref} className="mt-1 text-sm text-muted">
                      <span className="font-medium text-navy">{p.name}</span> —{" "}
                      <a href={`tel:${p.phoneHref}`} className="text-blue">{p.phone}</a>
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={180} className="flex gap-4 rounded-2xl bg-white p-5" style={{ border: "1px solid var(--line)" }}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--blue)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base">Email Us</h3>
                  <a href={`mailto:${contact.email}`} className="mt-1 inline-block text-sm text-blue">{contact.email}</a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <Reveal className="rounded-3xl bg-white p-7 md:p-9" style={{ border: "1px solid var(--line)", boxShadow: "0 30px 60px -40px rgba(10,42,94,0.5)" }}>
            <h2 className="text-2xl">Send us an enquiry</h2>
            <p className="mt-2 text-sm text-muted">Fill in the form and we&rsquo;ll get back to you shortly.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl" style={{ border: "1px solid var(--line)" }}>
            <iframe
              title="Abhinandan Group location"
              src={mapEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
