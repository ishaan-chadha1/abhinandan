"use client";

import { useState } from "react";
import { contact } from "@/lib/site";

const titles = ["Mr", "Ms", "Mrs", "Dr"];
const queryTypes = [
  "General Query",
  "Product Enquiry",
  "Request a Quote",
  "Partnership / Distribution",
  "Careers",
  "Other",
];
const dialCodes = [
  { label: "India +91", code: "+91" },
  { label: "USA +1", code: "+1" },
  { label: "UK +44", code: "+44" },
  { label: "UAE +971", code: "+971" },
  { label: "Other", code: "" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const title = String(d.get("title") || "");
    const name = String(d.get("name") || "");
    const email = String(d.get("email") || "");
    const country = String(d.get("country") || "");
    const company = String(d.get("company") || "");
    const dial = String(d.get("dial") || "");
    const phone = String(d.get("phone") || "");
    const qtype = String(d.get("qtype") || "");
    const subject = String(d.get("subject") || "");
    const details = String(d.get("details") || "");

    const mailSubject = encodeURIComponent(
      subject ? `${qtype}: ${subject}` : `Website enquiry (${qtype})`
    );
    const body = encodeURIComponent(
      `Name: ${title} ${name}\n` +
        `Email: ${email}\n` +
        `Country: ${country}\n` +
        `Company: ${company}\n` +
        `Contact: ${dial} ${phone}\n` +
        `Query type: ${qtype}\n` +
        `Subject: ${subject}\n\n` +
        `${details}`
    );
    window.location.href = `mailto:${contact.email}?subject=${mailSubject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-blue";
  const fieldStyle = { border: "1px solid var(--line)", background: "#fff" } as const;

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Title + Name */}
      <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
        <select name="title" className={field} style={fieldStyle} defaultValue="Mr" aria-label="Title">
          {titles.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <input name="name" required placeholder="Name" className={field} style={fieldStyle} />
      </div>

      {/* Email + Country */}
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="email" type="email" required placeholder="E-mail" className={field} style={fieldStyle} />
        <input name="country" placeholder="Country" defaultValue="India" className={field} style={fieldStyle} />
      </div>

      {/* Company */}
      <input name="company" placeholder="Company Name" className={field} style={fieldStyle} />

      {/* Dial code + Contact number */}
      <div className="grid gap-4 sm:grid-cols-[150px_1fr]">
        <select name="dial" className={field} style={fieldStyle} defaultValue="+91" aria-label="Country code">
          {dialCodes.map((c) => (
            <option key={c.label} value={c.code}>{c.label}</option>
          ))}
        </select>
        <input name="phone" type="tel" placeholder="Contact Number" className={field} style={fieldStyle} />
      </div>

      {/* Query type */}
      <select name="qtype" className={field} style={fieldStyle} defaultValue="General Query" aria-label="Query type">
        {queryTypes.map((q) => (
          <option key={q} value={q}>{q}</option>
        ))}
      </select>

      {/* Subject */}
      <input name="subject" placeholder="Subject" className={field} style={fieldStyle} />

      {/* Details */}
      <textarea
        name="details"
        required
        rows={5}
        placeholder="Details"
        className={field}
        style={{ ...fieldStyle, resize: "vertical" }}
      />

      <button
        type="submit"
        className="w-full justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-colors"
        style={{ background: "var(--navy)", fontFamily: "var(--font-heading)", letterSpacing: "0.02em" }}
      >
        Submit Query
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
