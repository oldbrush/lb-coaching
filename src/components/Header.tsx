"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const CONSULTATION_URL =
  "https://calendly.com/lindseybournecoaching/free-consultation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position for background transition
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* ── Site title ── */}
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide text-charcoal transition-colors hover:text-sage-dark md:text-3xl"
        >
          Lindsey Bourne Coaching
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-sage-dark"
                    : "text-charcoal-light hover:text-sage-dark"
                }`}
              >
                {label}
                {isActive && (
                  <span className="mt-0.5 block h-0.5 rounded-full bg-sage" />
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-block rounded-full bg-sage px-5 py-2.5 font-sans text-xs font-semibold tracking-widest text-white uppercase shadow-sm transition-all duration-200 hover:bg-sage-dark hover:shadow-md"
          >
            Free Consultation
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <div className="flex w-6 flex-col items-end gap-[5px]">
            <span
              className={`block h-[2px] rounded-full bg-charcoal transition-all duration-300 ease-in-out ${
                mobileOpen
                  ? "w-6 translate-y-[7px] rotate-45"
                  : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-charcoal transition-all duration-300 ease-in-out ${
                mobileOpen ? "w-0 opacity-0" : "w-4 opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-charcoal transition-all duration-300 ease-in-out ${
                mobileOpen
                  ? "w-6 -translate-y-[7px] -rotate-45"
                  : "w-5"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile menu panel ── */}
      <div
        className={`fixed top-0 right-0 z-40 flex h-full w-4/5 max-w-sm flex-col bg-cream shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center gap-6 px-10">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className={`font-sans text-lg font-medium tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-sage-dark"
                    : "text-charcoal-light hover:text-sage-dark"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <div className="my-4 h-px w-12 bg-taupe-light" />

          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="w-fit rounded-full bg-sage px-6 py-3 font-sans text-xs font-semibold tracking-widest text-white uppercase shadow-sm transition-all duration-200 hover:bg-sage-dark hover:shadow-md"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
