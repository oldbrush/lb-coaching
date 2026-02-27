import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Lindsey Bourne — a trauma-informed relationship coach with a Master's in Integral Counseling Psychology. Specializing in somatic attachment coaching, subconscious rewiring, and nervous system healing in the Bay Area and virtually.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 pt-32 pb-16 text-center sm:pt-40 sm:pb-20">
        <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          About Me
        </h1>
      </section>

      {/* Introduction + Photo */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/about-portrait.jpg"
              alt="Lindsey Bourne"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold leading-snug text-charcoal sm:text-3xl">
              Hi, I&rsquo;m Lindsey Bourne &amp; I&rsquo;m so glad you found me!
            </h2>
            <p className="mt-6 text-base leading-relaxed text-darkgray sm:text-lg">
              I&rsquo;m a trauma-informed coach focused on helping people
              navigate the complexities of relationships and intimacy. My work
              lives at the intersection of somatic awareness, attachment science,
              and subconscious rewiring&mdash;so you can finally break free from
              the patterns that have kept you stuck and step into the secure,
              aligned connection you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* What She Helps With */}
      <section className="bg-offwhite px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            What I Help With
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "Bringing awareness to relational patterns and the trauma that drives them",
            "Disrupting old narratives and limiting self-beliefs that keep you playing small",
            "Increasing self-worth so you can experience true emotional sovereignty",
            "Recognizing stuck points and building the courage to confront your deepest fears",
            "Achieving emotional liberation and cultivating unshakable self-trust",
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

      {/* Qualifications */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Qualifications &amp; Training
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Master\u2019s Degree", detail: "Integral Counseling Psychology" },
            { label: "Clinical Training", detail: "Marriage and Family Therapy (MFT)" },
            { label: "Institution", detail: "California Institute of Integral Studies" },
            { label: "Couples Training", detail: "Intimacy From the Inside Out (IFS Institute)" },
            { label: "Energy Healing", detail: "Reiki Level 1 Certification" },
            { label: "Justice Work", detail: "10 years in social and racial justice nonprofit work" },
          ].map((q) => (
            <div
              key={q.label}
              className="border border-lightgray p-6 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-charcoal">
                {q.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-darkgray">
                {q.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Personal */}
      <section className="bg-offwhite px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-darkgray sm:text-lg">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
              A Little More About Me
            </h2>
            <p>
              I live and work in the{" "}
              <span className="font-medium text-charcoal">Bay Area</span> and
              offer virtual services so we can connect no matter where you are.
            </p>
            <p>
              Outside of coaching, I facilitate{" "}
              <span className="font-medium text-charcoal">
                narrative therapy groups at San Quentin
              </span>{" "}
              for incarcerated veterans living with PTSD&mdash;work that
              continually deepens my understanding of healing, resilience, and
              the power of story.
            </p>
            <p>
              When I&rsquo;m not working, you can find me playing{" "}
              <span className="font-medium text-charcoal">
                clawhammer banjo
              </span>{" "}
              or wandering through Oakland&rsquo;s trees and hills.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/about-photo-2.jpg"
              alt="Lindsey in nature"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Coaching Genius Areas */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            My Coaching Genius
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-darkgray sm:text-lg">
            These are the areas where my training, intuition, and lived
            experience converge to create the deepest transformation.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Body Wisdom", description: "Tuning into somatic intelligence to understand how your body experiences love and safety." },
            { title: "Compassionate Parts Work", description: "Developing compassion toward the protective emotional parts that have kept you guarded." },
            { title: "Deep Wound Identification", description: "Uncovering the core relational wounds and patterns that shape your intimate connections." },
            { title: "Relationships as Portals", description: "Using your relationships as sacred mirrors and healing portals for profound growth." },
            { title: "Self-Worth & Attraction", description: "Connecting the relationship between self-worth, energetic magnetism, and who you attract." },
          ].map((area) => (
            <div key={area.title} className="bg-offwhite p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-darkgray">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Three Phases */}
      <section className="bg-offwhite px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            The Three Phases of Transformation
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
          {[
            {
              phase: "Phase 1",
              title: "Understand",
              text: "We begin by mapping your attachment style, relational history, and the unconscious patterns that have been running the show. Through somatic awareness and deep inquiry, you\u2019ll gain clarity on why you repeat certain dynamics\u2014and what your nervous system has been trying to protect you from all along.",
            },
            {
              phase: "Phase 2",
              title: "Uncover",
              text: "Next, we gently peel back the layers to reveal the core wounds, limiting beliefs, and protective parts that have kept you stuck. This is where the deep, compassionate work happens\u2014meeting every part of yourself with curiosity instead of judgment so real healing can begin.",
            },
            {
              phase: "Phase 3",
              title: "Rewire",
              text: "Finally, we actively rewire the subconscious patterns and nervous system responses that have been keeping you in survival mode. You will build new neural pathways, develop secure attachment behaviors, and step into relationships from a place of wholeness, self-trust, and aligned attraction.",
            },
          ].map((p) => (
            <div key={p.phase} className="bg-white p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-midgray">
                {p.phase}
              </span>
              <h3 className="mt-3 text-xl font-bold text-charcoal">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-darkgray">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xl font-light leading-relaxed text-charcoal sm:text-2xl">
            I&rsquo;d love to support you in breaking free from your past &amp;
            creating something more aligned and expansive&mdash;starting from
            within.
          </p>
          <a
            href="https://calendly.com/lindseybournecoaching/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-charcoal px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-darkgray"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
