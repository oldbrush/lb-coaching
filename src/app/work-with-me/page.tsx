import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Break the cycles keeping you stuck. Transform old patterns into grounded, secure connection through private coaching with Lindsey Bourne — somatic attachment repair, nervous system healing, and subconscious rewiring.",
};

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="animate-fade-in-up text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              Break the cycles keeping you stuck
            </h1>
            <p className="animate-fade-in-up-delay-1 mt-4 text-lg leading-relaxed text-darkgray sm:text-xl">
              Transform old patterns into grounded, secure connection in your
              relationships
            </p>
            <a
              href="https://calendly.com/lindseybournecoaching/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up-delay-2 mt-8 inline-block bg-charcoal px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-darkgray"
            >
              Book a Free Consultation
            </a>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/work-hero.jpg"
              alt="Coaching session"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-offwhite px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Who This Is For
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-darkgray sm:text-lg">
            This work is designed for people who are ready to stop managing
            symptoms and start transforming the root of what keeps them stuck.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "You experience dysregulation \u2014 anxiety, shutdown, or a constant edge you can\u2019t explain",
            "You\u2019re caught in reactive cycles \u2014 overthinking, withdrawal, or people-pleasing",
            "Your nervous system patterns feel resistant to change, no matter what you\u2019ve tried",
            "You notice repeating relationship themes that leave you frustrated or heartbroken",
            "You feel disconnected from your body and from yourself",
            "You crave groundedness over emotional volatility",
            "You carry shame about your relationship struggles despite success in other areas of life",
            "You\u2019re ready to invest in real, lasting transformation",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 bg-white p-6"
            >
              <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-charcoal" />
              <span className="text-base leading-relaxed text-darkgray">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            What&rsquo;s Included
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
          <div className="border border-lightgray p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-midgray">
              Core Container
            </span>
            <h3 className="mt-3 text-lg font-bold text-charcoal">
              3 or 6 Months of Private Coaching
            </h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-darkgray">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Weekly 60-minute Zoom sessions
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Inner-child healing, parts work, and attachment repair
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Trauma and nervous system healing
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Somatic and subconscious rewiring
              </li>
            </ul>
          </div>

          <div className="border border-lightgray p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-midgray">
              Ongoing Support
            </span>
            <h3 className="mt-3 text-lg font-bold text-charcoal">
              Between-Session Support
            </h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-darkgray">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Voxer/email access Monday through Friday
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Integration exercises tailored to your process
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Accountability check-ins to sustain momentum
              </li>
            </ul>
          </div>

          <div className="border border-lightgray p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-midgray">
              Long-Term Growth
            </span>
            <h3 className="mt-3 text-lg font-bold text-charcoal">
              Personalized Path Forward
            </h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-darkgray">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Custom tools and practices designed for your unique patterns
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                Resources you can return to long after our work together ends
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal" />
                A foundation for continued self-led healing and growth
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="bg-white px-6 py-8">
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/work-photo-2.jpg"
              alt="Coaching environment"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/work-photo-3.jpg"
              alt="Healing space"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="bg-offwhite px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            What You&rsquo;ll Gain
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Root Understanding", description: "Deep clarity on where your patterns originated and why they\u2019ve persisted." },
            { title: "Increased Self-Worth", description: "A felt sense of your own value that no longer depends on external validation." },
            { title: "Real-Time Regulation", description: "The ability to regulate your nervous system in the moment \u2014 not just in hindsight." },
            { title: "Stronger Relationships", description: "Connections built on authentic alignment rather than old protective strategies." },
            { title: "Body Safety", description: "A grounded sense of safety in your own body and present-moment anchoring." },
          ].map((gain) => (
            <div
              key={gain.title}
              className="border border-lightgray bg-white p-8 text-center"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
                {gain.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-darkgray">
                {gain.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stepping Into */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-light leading-relaxed text-charcoal sm:text-2xl">
            Step into safety, connection, &amp; healing&mdash;beyond what
            you&rsquo;ve tried before
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-relaxed text-charcoal sm:text-3xl">
            Ready to break free from the patterns holding you back?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-darkgray sm:text-lg">
            Book a free consultation to explore whether this work is the right
            fit for you, or enroll now to begin your transformation.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://calendly.com/lindseybournecoaching/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-charcoal px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-darkgray"
            >
              Book a Free Consultation
            </a>
            <a
              href="https://calendly.com/lindseybournecoaching/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-charcoal px-10 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
