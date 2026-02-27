const testimonials = [
  {
    name: "Katie M.",
    quote:
      "The inner child work we did together completely shifted how I understand my nervous system. I finally feel safe in my own body and in my relationships.",
  },
  {
    name: "Jane S.",
    quote:
      "Being able to recognise my patterns — and actually trace them back to where they started — was transformative. I stopped blaming myself and started understanding myself.",
  },
  {
    name: "Alex P.",
    quote:
      "My anxiety in relationships has reduced dramatically. I no longer spiral when someone pulls away. I feel grounded in a way I never thought was possible.",
  },
  {
    name: "Sarah P.",
    quote:
      "The emotional integration work changed everything for me. I went from intellectualising my feelings to actually feeling them — and that made all the difference.",
  },
  {
    name: "Georgia C.",
    quote:
      "I've done talk therapy for years, but nothing has come close to the somatic approach Lindsey uses. My body finally started to release what my mind couldn't.",
  },
  {
    name: "Alex R.",
    quote:
      "I experienced the most profound shifts in my self-worth through this work. I stopped tolerating less than I deserve and started showing up for myself fully.",
  },
];

const pillars = [
  {
    number: "01",
    title: "UNDERSTAND",
    subtitle: "Slow down, listen in",
    description:
      "Through somatic attunement, we learn to track your nervous system cues and protective parts — the tension, the shutdown, the hypervigilance. This is where awareness begins: in the body, not the mind.",
  },
  {
    number: "02",
    title: "UNCOVER",
    subtitle: "Trace the pattern to its origin",
    description:
      "We explore where your relational patterns began — early attachment dynamics, family systems, cultural messaging — to reveal the core beliefs silently shaping your choices, boundaries, and sense of self.",
  },
  {
    number: "03",
    title: "REWIRE",
    subtitle: "Integrate new patterns",
    description:
      "With deep understanding comes the capacity for real change. We integrate new relational patterns through secure actions, clear boundaries, and aligned relationships that reflect who you truly are.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-cream px-6 py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in-up font-serif text-5xl font-light leading-tight md:text-7xl text-charcoal">
            Relationship Coaching
          </h1>

          <p className="animate-fade-in-up-delay-1 mt-6 font-sans text-sm uppercase tracking-[0.2em] text-charcoal-light">
            Understand &rarr; Uncover &rarr; Rewire
          </p>

          <p className="animate-fade-in-up-delay-2 mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed text-charcoal-light md:text-lg">
            If you find yourself caught in repetitive relationship patterns,
            anxious&ndash;avoidant cycles, or nervous system dysregulation,
            you&rsquo;re not broken &mdash; you&rsquo;re wired for protection.
            Through somatic attachment coaching, subconscious rewiring, and
            nervous system healing, we go beneath the surface to create
            lasting change.
          </p>

          <div className="animate-fade-in-up-delay-3 mt-10">
            <a
              href="https://calendly.com/lindseybournecoaching/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-sage-dark"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ─── About the Approach ─── */}
      <section className="bg-warm-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate-fade-in-up font-serif text-3xl font-light md:text-4xl text-charcoal">
            A Different Kind of Coaching
          </h2>

          <p className="animate-fade-in-up-delay-1 mt-8 font-sans text-base leading-relaxed text-charcoal-light md:text-lg">
            This isn&rsquo;t surface-level advice or quick-fix strategies.
            This is deep, embodied pattern work &mdash; exploring what lives
            beneath your behaviours, your triggers, and your relationship
            cycles. Together, we create the conditions for your nervous system
            to soften, your awareness to expand, and your relational world to
            shift from the inside out.
          </p>
        </div>
      </section>

      {/* ─── Free Resource Section ─── */}
      <section className="bg-cream-dark px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate-fade-in-up font-serif text-3xl font-light md:text-4xl text-charcoal">
            Breaking the Cycle
          </h2>

          <p className="animate-fade-in-up-delay-1 mt-6 font-sans text-base leading-relaxed text-charcoal-light md:text-lg">
            A free downloadable workbook designed to help you uncover the
            hidden dynamics driving your relationship patterns &mdash; so you
            can begin to understand, interrupt, and ultimately transform them.
          </p>

          <form
            className="animate-fade-in-up-delay-2 mx-auto mt-10 max-w-md space-y-4"
            action="#"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                className="w-full border border-taupe-light bg-warm-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe focus:border-sage focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                className="w-full border border-taupe-light bg-warm-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe focus:border-sage focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="w-full border border-taupe-light bg-warm-white px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe focus:border-sage focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-charcoal px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-charcoal-light"
            >
              Send Me the Workbook
            </button>
          </form>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="bg-warm-white py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="animate-fade-in-up font-serif text-3xl font-light md:text-4xl text-charcoal">
            Kind Words
          </h2>
        </div>

        <div className="mt-14 relative">
          {/* Gradient masks for scroll edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-warm-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-warm-white to-transparent" />

          {/* Scrolling track — duplicated for seamless loop */}
          <div className="flex animate-scroll-left w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="mx-3 w-80 shrink-0 border border-cream-dark bg-cream px-8 py-10 md:w-96"
              >
                <p className="font-sans text-sm leading-relaxed text-charcoal-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Three Pillars Section ─── */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="animate-fade-in-up text-center font-serif text-3xl font-light md:text-4xl text-charcoal">
            The Framework
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {pillars.map((p) => (
              <div key={p.number} className="text-center md:text-left">
                <p className="font-sans text-xs font-semibold tracking-[0.2em] text-taupe">
                  {p.number}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-light tracking-[0.05em] text-charcoal md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-1 font-sans text-sm italic text-sage-dark">
                  {p.subtitle}
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services CTA Section ─── */}
      <section className="bg-warm-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate-fade-in-up font-serif text-3xl font-light md:text-4xl text-charcoal">
            Ready to make some change?
          </h2>

          <p className="animate-fade-in-up-delay-1 mt-8 font-sans text-base leading-relaxed text-charcoal-light md:text-lg">
            Real, embodied change happens in relationship &mdash; with
            yourself, your history, and a guide who can hold the space.
            I offer limited 1:1 coaching spots for those ready to do the
            deep work. If something here resonates, I&rsquo;d love to
            hear from you.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-10">
            <a
              href="/work-with-me"
              className="inline-block bg-charcoal px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-charcoal-light"
            >
              Work With Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
