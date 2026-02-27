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
  {
    name: "Anna R.",
    quote:
      "Lindsey helped me see the patterns I couldn't see on my own. For the first time, I feel like I have a choice in how I show up in my relationships.",
  },
  {
    name: "Beth V.",
    quote:
      "This work gave me the tools to stop abandoning myself in love. I finally understand what secure connection actually feels like.",
  },
  {
    name: "Fallon M.",
    quote:
      "Working with Lindsey was the most transformative experience of my life. I went from constant anxiety to genuine peace in my relationships.",
  },
  {
    name: "Jessica W.",
    quote:
      "I never understood why I kept choosing the same type of partner. Now I do, and I've completely changed the way I approach love and intimacy.",
  },
  {
    name: "Elizabeth R.",
    quote:
      "Lindsey creates such a safe space. I was able to access parts of myself I'd been protecting for decades and finally begin to heal them.",
  },
  {
    name: "Hannah G.",
    quote:
      "The somatic work was a game-changer. My body was holding so much that talk therapy alone couldn't reach. I feel freer than I have in years.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-white px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          {/* Image first on desktop (left side) */}
          <div className="relative aspect-[4/5] w-full overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/hero.jpg"
              alt="Lindsey Bourne"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Text on right, centered */}
          <div className="text-center order-1 lg:order-2">
            <h1 className="animate-fade-in-up text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Relation<span className="uppercase">ship</span>{" "}
              Coac<span className="lowercase">hin</span>
              <span className="uppercase">g</span>
            </h1>
            <p className="animate-fade-in-up-delay-1 mt-5 text-sm font-medium uppercase tracking-[0.25em] text-midgray">
              Understand &nbsp;&rarr;&nbsp; Uncover &nbsp;&rarr;&nbsp; Rewire
            </p>
            <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-md text-base leading-relaxed text-darkgray">
              If you find yourself caught in repetitive relationship patterns,
              anxious&ndash;avoidant cycles, or nervous system dysregulation,
              you&rsquo;re not broken &mdash; you&rsquo;re wired for protection.
              Through{" "}
              <strong className="font-semibold text-charcoal">
                somatic attachment coaching
              </strong>
              ,{" "}
              <strong className="font-semibold text-charcoal">
                subconscious rewiring
              </strong>
              , and{" "}
              <strong className="font-semibold text-charcoal">
                nervous system healing
              </strong>
              , we go beneath the surface to create lasting change.
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
        </div>
      </section>

      {/* ─── Breaking the Cycle (Free Resource) ─── */}
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
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
              Breaking the <span className="uppercase">Cycle</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-darkgray">
              A free downloadable workbook designed to help you uncover the
              hidden dynamics driving your relationship patterns &mdash; so you
              can begin to understand, interrupt, and ultimately transform them.
            </p>
            <form className="mx-auto mt-8 max-w-sm space-y-3 lg:mx-0" action="#">
              <input
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray focus:border-charcoal focus:outline-none"
              />
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

      {/* ─── Testimonials ─── */}
      <section className="overflow-hidden bg-white py-20 md:py-28">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-scroll-left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="mx-3 w-72 shrink-0 border border-lightgray px-6 py-8 md:w-80"
              >
                <p className="text-sm leading-relaxed text-darkgray italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Three Pillars (Understand / Uncover / Rewire) ─── */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-3 md:gap-10">
            {/* Understand */}
            <div className="text-center">
              <div className="relative mx-auto mb-5 h-12 w-12">
                <Image
                  src="/images/star-main.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-charcoal">
                Understand
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-darkgray">
                Through somatic attunement, we learn to track your nervous system
                cues and protective parts &mdash; the tension, the shutdown, the
                hypervigilance. This is where awareness begins: in the body, not
                the mind.
              </p>
            </div>

            {/* Uncover */}
            <div className="text-center">
              <div className="relative mx-auto mb-5 h-12 w-12">
                <Image
                  src="/images/subtract.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-charcoal">
                Uncover
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-darkgray">
                We explore where your relational patterns began &mdash; early
                attachment dynamics, family systems, cultural messaging &mdash;
                to reveal the core beliefs silently shaping your choices,
                boundaries, and sense of self.
              </p>
            </div>

            {/* Rewire */}
            <div className="text-center">
              <div className="relative mx-auto mb-5 h-12 w-12">
                <Image
                  src="/images/star-2.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-charcoal">
                Rewire
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-darkgray">
                With deep understanding comes the capacity for real change. We
                integrate new relational patterns through secure actions, clear
                boundaries, and aligned relationships that reflect who you truly
                are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ready to make some change? ─── */}
      <section className="bg-offwhite px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-charcoal md:text-3xl">
            Ready to make some change?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-darkgray md:text-lg">
            Real, embodied change happens in relationship &mdash; with
            yourself, your history, and a guide who can hold the space. I offer
            limited 1:1 coaching spots for those ready to do the deep work.
            This is not self-improvement &mdash; this is transformation. If
            something here resonates, I&rsquo;d love to hear from you.
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

      {/* ─── Instagram Feed ─── */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <a
            href="https://www.instagram.com/lindseybournecoaching/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-charcoal transition-colors hover:text-darkgray"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
            @lindseybournecoaching
          </a>
          <p className="mt-3 text-sm text-midgray">
            Follow along for relationship insights, nervous system wisdom, and behind-the-scenes of the work.
          </p>
          {/* Instagram embed placeholder grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <a
                key={i}
                href="https://www.instagram.com/lindseybournecoaching/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square w-full bg-offwhite transition-opacity hover:opacity-80"
                aria-label={`Instagram post ${i}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
