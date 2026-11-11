"use client";

import { useState } from "react";
import { contact } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Website enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-blue";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Full name" className={field} style={{ border: "1px solid var(--line)", background: "#fff" }} />
        <input name="email" type="email" required placeholder="Email address" className={field} style={{ border: "1px solid var(--line)", background: "#fff" }} />
      </div>
      <input name="company" placeholder="Company (optional)" className={field} style={{ border: "1px solid var(--line)", background: "#fff" }} />
      <textarea name="message" required rows={5} placeholder="How can we help?" className={field} style={{ border: "1px solid var(--line)", background: "#fff", resize: "vertical" }} />
      <button type="submit" className="btn btn-primary justify-center">
        Send Enquiry
      </button>
      {sent && (
        <p className="text-sm text-muted">
          Opening your email client&hellip; if nothing happens, write to us at{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-blue">{contact.email}</a>.
        </p>
      )}
    </form>
  );
}
