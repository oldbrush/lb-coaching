import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lindsey Bourne Coaching. Reach out to learn more about somatic attachment coaching, subconscious rewiring, and nervous system healing.",
};

export default function ContactPage() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="bg-cream px-6 py-28 text-center sm:py-36">
        <h1 className="font-serif text-5xl font-light tracking-tight text-charcoal sm:text-6xl">
          Contact Me
        </h1>
        <div className="mx-auto mt-4 h-px w-16 bg-taupe-light" />
      </section>

      {/* ───────────── Introduction Text ───────────── */}
      <section className="bg-warm-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl space-y-6 text-center font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
          <p>
            If you&rsquo;ve found your way here, chances are something in your
            life or relationships isn&rsquo;t feeling quite right, and
            you&rsquo;re looking for support that gets to the heart of it and
            that actually creates real, embodied change.
          </p>
          <p>
            I work with people who are ready to understand what&rsquo;s really
            driving their patterns in love, and create more safety, clarity, and
            choice in the process.
          </p>
          <p>
            If you have questions or just want to chat about what you&rsquo;re
            looking for, reach out using the form below, and I&rsquo;ll be in
            touch soon. I look forward to connecting with you!
          </p>
        </div>
      </section>

      {/* ───────────── Contact Form ───────────── */}
      <section className="bg-warm-white px-6 pb-24 sm:pb-32">
        <ContactForm />
      </section>
    </>
  );
}
