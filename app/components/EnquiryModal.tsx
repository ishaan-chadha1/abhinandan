"use client";

import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export const ENQUIRY_EVENT = "open-enquiry";

/** Call from anywhere in a client component to open the enquiry popup. */
export function openEnquiry() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(ENQUIRY_EVENT));
  }
}

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(ENQUIRY_EVENT, onOpen);
    return () => window.removeEventListener(ENQUIRY_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 md:items-center md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Inquiry form"
    >
      {/* Backdrop */}
      <button
        aria-label="Close inquiry form"
        onClick={() => setOpen(false)}
        className="absolute inset-0 cursor-default"
        style={{ background: "rgba(8,24,52,0.55)", backdropFilter: "blur(3px)" }}
      />

      {/* Dialog */}
      <div
        className="relative my-auto w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl md:p-8"
        style={{ border: "1px solid var(--line)", animation: "enquiry-pop 0.22s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-sky"
          style={{ color: "var(--navy)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <h2 className="text-2xl">Inquiry Form</h2>
        <p className="mt-2 text-sm text-muted">Fill in the form and we&rsquo;ll get back to you shortly.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>

      <style>{`
        @keyframes enquiry-pop {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
