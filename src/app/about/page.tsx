import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Lindsey Bourne — a trauma-informed relationship coach with a Master's in Integral Counseling Psychology. Specializing in somatic attachment coaching, subconscious rewiring, and nervous system healing in the Bay Area and virtually.",
};

export default function AboutPage() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="bg-cream px-6 py-28 text-center sm:py-36">
        <h1 className="font-serif text-5xl font-light tracking-tight text-charcoal sm:text-6xl">
          About Me
        </h1>
        <div className="mx-auto mt-4 h-px w-16 bg-taupe-light" />
      </section>

      {/* ───────────── Introduction + Photo ───────────── */}
      <section className="bg-warm-white px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-taupe-light/50 to-cream-dark text-lg font-medium tracking-wide text-charcoal-light">
            Photo
          </div>

          <div className="max-w-prose">
            <h2 className="font-serif text-3xl font-light leading-snug text-charcoal sm:text-4xl">
              Hi, I&rsquo;m Lindsey Bourne &amp; I&rsquo;m so glad you found
              me!
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
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

      {/* ───────────── What She Helps With ───────────── */}
      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            What I Help With
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {[
            "Bringing awareness to relational patterns and the trauma that drives them",
            "Disrupting old narratives and limiting self-beliefs that keep you playing small",
            "Increasing self-worth so you can experience true emotional sovereignty",
            "Recognizing stuck points and building the courage to confront your deepest fears",
            "Achieving emotional liberation and cultivating unshakable self-trust",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl bg-warm-white p-6 shadow-sm"
            >
              <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-sage" />
              <span className="font-sans text-base leading-relaxed text-charcoal-light">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────────── Qualifications ───────────── */}
      <section className="bg-warm-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            Qualifications &amp; Training
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Master\u2019s Degree",
              detail: "Integral Counseling Psychology",
            },
            {
              label: "Clinical Training",
              detail: "Marriage and Family Therapy (MFT)",
            },
            {
              label: "Institution",
              detail: "California Institute of Integral Studies",
            },
            {
              label: "Couples Training",
              detail:
                "Intimacy From the Inside Out (IFS Institute)",
            },
            {
              label: "Energy Healing",
              detail: "Reiki Level 1 Certification",
            },
            {
              label: "Justice Work",
              detail:
                "10 years in social and racial justice nonprofit work",
            },
          ].map((q) => (
            <div
              key={q.label}
              className="rounded-xl border border-cream-dark bg-cream/40 p-6 text-center"
            >
              <p className="font-serif text-lg font-semibold text-charcoal">
                {q.label}
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-light">
                {q.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── Location & Personal ───────────── */}
      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-light text-charcoal sm:text-4xl">
            A Little More About Me
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />

          <div className="mt-14 space-y-6 font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
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
        </div>
      </section>

      {/* ───────────── Coaching Genius Areas ───────────── */}
      <section className="bg-warm-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            My Coaching Genius
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
            These are the areas where my training, intuition, and lived
            experience converge to create the deepest transformation.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Body Wisdom",
              description:
                "Tuning into somatic intelligence to understand how your body experiences love and safety.",
            },
            {
              title: "Compassionate Parts Work",
              description:
                "Developing compassion toward the protective emotional parts that have kept you guarded.",
            },
            {
              title: "Deep Wound Identification",
              description:
                "Uncovering the core relational wounds and patterns that shape your intimate connections.",
            },
            {
              title: "Relationships as Portals",
              description:
                "Using your relationships as sacred mirrors and healing portals for profound growth.",
            },
            {
              title: "Self-Worth & Attraction",
              description:
                "Connecting the relationship between self-worth, energetic magnetism, and who you attract.",
            },
          ].map((area) => (
            <div key={area.title} className="group rounded-xl bg-cream/60 p-8">
              <h3 className="font-serif text-xl font-semibold text-charcoal">
                {area.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-light">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── Three Phases ───────────── */}
      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            The Three Phases of Transformation
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
            Every coaching engagement moves through three intentional phases
            designed to create lasting change from the inside out.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-3">
          {/* Phase 1 */}
          <div className="rounded-2xl bg-warm-white p-10 shadow-sm">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-sage">
              Phase 1
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
              Understand
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-light">
              We begin by mapping your attachment style, relational history, and
              the unconscious patterns that have been running the show. Through
              somatic awareness and deep inquiry, you&rsquo;ll gain clarity on
              <em> why</em> you repeat certain dynamics&mdash;and what your
              nervous system has been trying to protect you from all along.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="rounded-2xl bg-warm-white p-10 shadow-sm">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-sage">
              Phase 2
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
              Uncover
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-light">
              Next, we gently peel back the layers to reveal the core wounds,
              limiting beliefs, and protective parts that have kept you stuck.
              This is where the deep, compassionate work happens&mdash;meeting
              every part of yourself with curiosity instead of judgment so
              real healing can begin.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="rounded-2xl bg-warm-white p-10 shadow-sm">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-sage">
              Phase 3
            </span>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
              Rewire
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-light">
              Finally, we actively rewire the subconscious patterns and nervous
              system responses that have been keeping you in survival mode. You
              will build new neural pathways, develop secure attachment
              behaviors, and step into relationships from a place of wholeness,
              self-trust, and aligned attraction.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="bg-warm-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-2xl font-light leading-relaxed text-charcoal sm:text-3xl">
            I&rsquo;d love to support you in breaking free from your past &amp;
            creating something more aligned and expansive&mdash;starting from
            within.
          </p>

          <a
            href="https://calendly.com/lindseybournecoaching/free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-sage px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-warm-white transition-colors hover:bg-sage-dark"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
