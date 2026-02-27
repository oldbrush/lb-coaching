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

    // TODO: Connect to form handling API (e.g. Formspree, custom API route)
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
      <div className="mx-auto max-w-2xl rounded-2xl bg-cream p-12 text-center shadow-sm sm:p-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20">
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
            className="text-sage-dark"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h3 className="mt-6 font-serif text-2xl font-light text-charcoal sm:text-3xl">
          Thank You
        </h3>
        <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-light">
          Your message has been sent. I&rsquo;ll be in touch soon&mdash;I look
          forward to connecting with you.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-block font-sans text-sm font-medium tracking-wide text-sage transition-colors hover:text-sage-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-2xl bg-cream p-8 shadow-sm sm:p-12"
    >
      <div className="flex flex-col gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-light"
          >
            Name <span className="text-blush">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-sm border border-taupe-light bg-warm-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe transition-colors focus:border-sage focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-light"
          >
            Email <span className="text-blush">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-sm border border-taupe-light bg-warm-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe transition-colors focus:border-sage focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-light"
          >
            Message <span className="text-blush">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me a little about what you're looking for..."
            className="mt-2 w-full resize-y rounded-sm border border-taupe-light bg-warm-white px-4 py-3 font-sans text-sm leading-relaxed text-charcoal placeholder:text-taupe transition-colors focus:border-sage focus:outline-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full rounded-sm bg-sage px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-warm-white transition-colors hover:bg-sage-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="mt-4 font-sans text-sm text-blush">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
