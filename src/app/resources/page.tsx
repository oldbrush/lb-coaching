import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore blog posts, podcast episodes, and insights on attachment, somatic healing, and conscious relationships from Lindsey Bourne Coaching.",
};

const blogPosts = [
  {
    date: "9/2/25",
    title:
      "Why Somatic Wisdom\u2014Not Just Mindset\u2014Frees You From Insecure Attachment",
  },
  {
    date: "8/15/25",
    title: "The Radical Power of Self-Responsibility in Love",
  },
  {
    date: "7/16/25",
    title: "The Shared Wound Beneath the Fight",
  },
  {
    date: "5/5/25",
    title:
      "Why We Fawn: Understanding the Hidden Roots of People-Pleasing",
  },
  {
    date: "4/5/25",
    title: "How to Know If It\u2019s a Trigger\u2026 or a Truth",
  },
  {
    date: "3/5/25",
    title:
      "The Mirror: What Your Partner\u2019s Reactions Are Trying to Show You About Yourself",
  },
  {
    date: "2/5/25",
    title:
      "When Self-Work Becomes Self-Blame: The Shadow Side of Conscious Relationships",
  },
  {
    date: "1/5/25",
    title: "Understanding the Power Struggle Phase in Relationships",
  },
  {
    date: "12/5/24",
    title:
      "Bridging Polyvagal Theory & IFS: A Path to Deeper Embodied Healing",
  },
  {
    date: "11/5/24",
    title:
      "Is Loneliness a Distance from Others\u2014or Ourselves?",
  },
  {
    date: "10/5/24",
    title:
      "Why We Attract the Same Dating Experience Over & Over Again",
  },
  {
    date: "9/5/24",
    title: "Books for Your Journey",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ───────────── Hero / Introduction ───────────── */}
      <section className="bg-cream px-6 py-28 text-center sm:py-36">
        <h1 className="font-serif text-5xl font-light tracking-tight text-charcoal sm:text-6xl">
          Resources
        </h1>
        <div className="mx-auto mt-4 h-px w-16 bg-taupe-light" />

        <p className="mx-auto mt-10 max-w-3xl font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
          This is a space for tracing the deeper layers that come alive in
          connection&mdash;with ourselves and others&mdash;and meeting them with
          awareness, curiosity, and care. Through intimacy with our inner world,
          we learn to soften protective patterns, unwind inherited limiting
          beliefs, and allow new ways of being to take root. For anyone sensing
          that their relational patterns hold keys to their healing.
        </p>
      </section>

      {/* ───────────── Subscribe ───────────── */}
      <section className="bg-warm-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">
            Subscribe
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />

          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-charcoal-light sm:text-lg">
            Sign up with your email address so you never miss a new blog post or
            podcast episode.
          </p>

          <form className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full rounded-sm border border-taupe-light bg-cream/40 px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe transition-colors focus:border-sage focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-charcoal px-8 py-3 font-sans text-sm font-medium uppercase tracking-widest text-warm-white transition-colors hover:bg-charcoal-light"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* ───────────── Blog Posts ───────────── */}
      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl font-light text-charcoal sm:text-4xl">
            Blog
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-taupe-light" />

          <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-sm leading-relaxed text-charcoal-light italic">
            Starting in September 2025, new blog posts will only be published
            via weekly newsletter &amp; Substack
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between rounded-xl bg-warm-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <span className="font-sans text-xs font-medium uppercase tracking-widest text-taupe">
                    {post.date}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-charcoal">
                    {post.title}
                  </h3>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 font-sans text-sm font-medium tracking-wide text-sage transition-colors group-hover:text-sage-dark"
                >
                  Read More
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
