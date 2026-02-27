"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const navLinks = [
  { label: "WORK WITH ME", href: "/work-with-me" },
  { label: "ABOUT", href: "/about" },
  { label: "RESOURCES", href: "/resources" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer>
      {/* Newsletter Section */}
      <section className="bg-offwhite px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light tracking-wide text-charcoal sm:text-4xl">
            Newsletter
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-darkgray">
            Join my monthly email community for grounded, heart-forward insights
            and tools to support your relationship journey. Each note includes
            reflections from my work, tools for deeper self-worth and
            self-trust, updates on new offerings, and a behind-the-scenes look
            at what I&rsquo;m exploring in my own life and practice.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray transition-colors focus:border-charcoal focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray transition-colors focus:border-charcoal focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray transition-colors focus:border-charcoal focus:outline-none"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full bg-charcoal px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-darkgray disabled:opacity-60 sm:w-auto sm:self-center"
            >
              {status === "submitting" ? "Signing Up..." : "Sign Up"}
            </button>

            {status === "success" && (
              <p className="mt-2 text-sm text-charcoal">
                Thank you for subscribing!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer Bar */}
      <div className="bg-charcoal px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://www.instagram.com/lindseybournecoaching/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="text-white/60 transition-colors hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <p className="text-xs tracking-wide text-white/40">
            &copy; 2025 Lindsey Bourne Coaching
          </p>
        </div>
      </div>
    </footer>
  );
}
