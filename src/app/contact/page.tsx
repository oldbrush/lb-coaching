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
      {/* Hero */}
      <section className="bg-white px-6 pt-32 pb-16 text-center sm:pt-40 sm:pb-20">
        <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Contact Me
        </h1>
      </section>

      {/* Introduction Text */}
      <section className="bg-white px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl space-y-6 text-center text-base leading-relaxed text-darkgray sm:text-lg">
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

      {/* Contact Form */}
      <section className="bg-white px-6 pb-24 sm:pb-32">
        <ContactForm />
      </section>
    </>
  );
}
