import Image from "next/image";

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
    image: "/images/group-25.jpg",
  },
  {
    number: "02",
    title: "UNCOVER",
    subtitle: "Trace the pattern to its origin",
    description:
      "We explore where your relational patterns began — early attachment dynamics, family systems, cultural messaging — to reveal the core beliefs silently shaping your choices, boundaries, and sense of self.",
    image: "/images/group-26.jpg",
  },
  {
    number: "03",
    title: "REWIRE",
    subtitle: "Integrate new patterns",
    description:
      "With deep understanding comes the capacity for real change. We integrate new relational patterns through secure actions, clear boundaries, and aligned relationships that reflect who you truly are.",
    image: "/images/group-27.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Relationship<br />Coaching
            </h1>
            <p className="animate-fade-in-up-delay-1 mt-4 text-sm font-medium uppercase tracking-[0.2em] text-midgray">
              Understand &rarr; Uncover &rarr; Rewire
            </p>
            <p className="animate-fade-in-up-delay-2 mt-6 max-w-lg text-base leading-relaxed text-darkgray">
              If you find yourself caught in repetitive relationship patterns,
              anxious&ndash;avoidant cycles, or nervous system dysregulation,
              you&rsquo;re not broken &mdash; you&rsquo;re wired for protection.
              Through somatic attachment coaching, subconscious rewiring, and
              nervous system healing, we go beneath the surface to create
              lasting change.
            </p>
            <div className="animate-fade-in-up-delay-3 mt-8">
              <a
                href="https://calendly.com/lindseybournecoaching/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-darkgray"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Lindsey Bourne"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* About the Approach */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
            A Different Kind of Coaching
          </h2>
          <p className="mt-6 text-base leading-relaxed text-darkgray md:text-lg">
            This isn&rsquo;t surface-level advice or quick-fix strategies.
            This is deep, embodied pattern work &mdash; exploring what lives
            beneath your behaviours, your triggers, and your relationship
            cycles. Together, we create the conditions for your nervous system
            to soften, your awareness to expand, and your relational world to
            shift from the inside out.
          </p>
        </div>
      </section>

      {/* Free Resource Section */}
      <section className="bg-offwhite px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/course.jpg"
              alt="Breaking the Cycle workbook"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
              Breaking the Cycle
            </h2>
            <p className="mt-4 text-base leading-relaxed text-darkgray">
              A free downloadable workbook designed to help you uncover the
              hidden dynamics driving your relationship patterns &mdash; so you
              can begin to understand, interrupt, and ultimately transform them.
            </p>
            <form className="mt-8 max-w-sm space-y-3" action="#">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray focus:border-charcoal focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray focus:border-charcoal focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray focus:border-charcoal focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-charcoal px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-darkgray"
              >
                Send Me the Workbook
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
            Kind Words
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-scroll-left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="mx-3 w-80 shrink-0 border border-lightgray bg-offwhite px-8 py-10 md:w-96"
              >
                <p className="text-sm leading-relaxed text-darkgray italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-offwhite px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
            The Framework
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {pillars.map((p) => (
              <div key={p.number} className="text-center">
                <div className="relative mx-auto mb-6 h-16 w-16">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] text-midgray">
                  {p.number}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-wide text-charcoal">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm italic text-midgray">
                  {p.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-darkgray">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
            Ready to make some change?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-darkgray md:text-lg">
            Real, embodied change happens in relationship &mdash; with
            yourself, your history, and a guide who can hold the space.
            I offer limited 1:1 coaching spots for those ready to do the
            deep work. If something here resonates, I&rsquo;d love to
            hear from you.
          </p>
          <div className="mt-8">
            <a
              href="/work-with-me"
              className="inline-block bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-darkgray"
            >
              Work With Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
