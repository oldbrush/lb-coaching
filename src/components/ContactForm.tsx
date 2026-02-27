"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl border border-lightgray p-12 text-center sm:p-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-offwhite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-charcoal"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h3 className="mt-6 text-2xl font-bold text-charcoal">
          Thank You
        </h3>
        <p className="mt-4 text-base leading-relaxed text-darkgray">
          Your message has been sent. I&rsquo;ll be in touch soon&mdash;I look
          forward to connecting with you.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-block text-sm font-medium tracking-wide text-charcoal underline transition-colors hover:text-darkgray"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl border border-lightgray p-8 sm:p-12"
    >
      <div className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold uppercase tracking-widest text-midgray"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray transition-colors focus:border-charcoal focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold uppercase tracking-widest text-midgray"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray transition-colors focus:border-charcoal focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold uppercase tracking-widest text-midgray"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me a little about what you're looking for..."
            className="mt-2 w-full resize-y border border-lightgray bg-white px-4 py-3 text-sm leading-relaxed text-charcoal placeholder:text-midgray transition-colors focus:border-charcoal focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full bg-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-darkgray disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
