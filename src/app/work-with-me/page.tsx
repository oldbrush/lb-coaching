import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Break the cycles keeping you stuck. Transform old patterns into grounded, secure connection through private coaching with Lindsey Bourne — somatic attachment repair, nervous system healing, and subconscious rewiring.",
};

export default function WorkWithMePage() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="bg-cream px-6 py-28 text-center sm:py-36">
        <h1 className="animate-fade-in-up font-serif text-5xl font-light tracking-tight text-charcoal sm:text-6xl">
          Break the cycles keeping you stuck
        </h1>
        <p className="animate-fade-in-up-delay-1 mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-charcoal-light sm:text-xl">
          Transform old patterns into grounded, secure connection in your
          relationships
        </p>
        <div className="animate-fade-in-up-delay-2 mx-auto mt-4 h-px w-16 bg-taupe-light" />
        <a
          href="https://calendly.com/lindseybournecoaching/free-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up-delay-3 mt-10 inline-block rounded-full bg-sage px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-warm-white transition-colors hover:bg-sage-dark"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* ───────────── Who This Is For ───────────── */}
      <section className="bg-warm-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            Who This Is For
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
            This work is designed for people who are ready to stop managing
            symptoms and start transforming the root of what keeps them stuck.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {[
            "You experience dysregulation — anxiety, shutdown, or a constant edge you can\u2019t explain",
            "You\u2019re caught in reactive cycles — overthinking, withdrawal, or people-pleasing",
            "Your nervous system patterns feel resistant to change, no matter what you\u2019ve tried",
            "You notice repeating relationship themes that leave you frustrated or heartbroken",
            "You feel disconnected from your body and from yourself",
            "You crave groundedness over emotional volatility",
            "You carry shame about your relationship struggles despite success in other areas of life",
            "You\u2019re ready to invest in real, lasting transformation",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl bg-cream/60 p-6 shadow-sm"
            >
              <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-sage" />
              <span className="font-sans text-base leading-relaxed text-charcoal-light">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────────── Services ───────────── */}
      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            What&rsquo;s Included
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-3">
          {/* Private Coaching */}
          <div className="rounded-2xl bg-warm-white p-10 shadow-sm">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-sage">
              Core Container
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
              3 or 6 Months of Private Coaching
            </h3>
            <ul className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-charcoal-light">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Weekly 60-minute Zoom sessions
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Inner-child healing, parts work, and attachment repair
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Trauma and nervous system healing
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Somatic and subconscious rewiring
              </li>
            </ul>
          </div>

          {/* Between-Session Support */}
          <div className="rounded-2xl bg-warm-white p-10 shadow-sm">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-sage">
              Ongoing Support
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
              Between-Session Support
            </h3>
            <ul className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-charcoal-light">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Voxer/email access Monday through Friday
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Integration exercises tailored to your process
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Accountability check-ins to sustain momentum
              </li>
            </ul>
          </div>

          {/* Personalized Path */}
          <div className="rounded-2xl bg-warm-white p-10 shadow-sm">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-sage">
              Long-Term Growth
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
              Personalized Path Forward
            </h3>
            <ul className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-charcoal-light">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Custom tools and practices designed for your unique patterns
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                Resources you can return to long after our work together ends
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                A foundation for continued self-led healing and growth
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── What You'll Gain ───────────── */}
      <section className="bg-warm-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            What You&rsquo;ll Gain
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Root Understanding",
              description:
                "Deep clarity on where your patterns originated and why they\u2019ve persisted.",
            },
            {
              title: "Increased Self-Worth",
              description:
                "A felt sense of your own value that no longer depends on external validation.",
            },
            {
              title: "Real-Time Regulation",
              description:
                "The ability to regulate your nervous system in the moment \u2014 not just in hindsight.",
            },
            {
              title: "Stronger Relationships",
              description:
                "Connections built on authentic alignment rather than old protective strategies.",
            },
            {
              title: "Body Safety",
              description:
                "A grounded sense of safety in your own body and present-moment anchoring.",
            },
          ].map((gain) => (
            <div
              key={gain.title}
              className="rounded-xl border border-cream-dark bg-cream/40 p-8 text-center"
            >
              <h3 className="font-serif text-xl font-semibold text-charcoal">
                {gain.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-light">
                {gain.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── Stepping Into ───────────── */}
      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl font-light leading-relaxed text-charcoal sm:text-3xl">
            Step into safety, connection, &amp; healing&mdash;beyond what
            you&rsquo;ve tried before
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-taupe-light" />
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="bg-warm-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light leading-relaxed text-charcoal sm:text-4xl">
            Ready to break free from the patterns holding you back?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
            Book a free consultation to explore whether this work is the right
            fit for you, or enroll now to begin your transformation.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://calendly.com/lindseybournecoaching/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-sage px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-warm-white transition-colors hover:bg-sage-dark"
            >
              Book a Free Consultation
            </a>
            <a
              href="https://calendly.com/lindseybournecoaching/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-sage px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-sage transition-colors hover:bg-sage hover:text-warm-white"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
