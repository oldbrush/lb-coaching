import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore blog posts, podcast episodes, and insights on attachment, somatic healing, and conscious relationships from Lindsey Bourne Coaching.",
};

const blogPosts = [
  { date: "9/2/25", title: "Why Somatic Wisdom\u2014Not Just Mindset\u2014Frees You From Insecure Attachment" },
  { date: "8/15/25", title: "The Radical Power of Self-Responsibility in Love" },
  { date: "7/16/25", title: "The Shared Wound Beneath the Fight" },
  { date: "5/5/25", title: "Why We Fawn: Understanding the Hidden Roots of People-Pleasing" },
  { date: "4/5/25", title: "How to Know If It\u2019s a Trigger\u2026 or a Truth" },
  { date: "3/5/25", title: "The Mirror: What Your Partner\u2019s Reactions Are Trying to Show You About Yourself" },
  { date: "2/5/25", title: "When Self-Work Becomes Self-Blame: The Shadow Side of Conscious Relationships" },
  { date: "1/5/25", title: "Understanding the Power Struggle Phase in Relationships" },
  { date: "12/5/24", title: "Bridging Polyvagal Theory & IFS: A Path to Deeper Embodied Healing" },
  { date: "11/5/24", title: "Is Loneliness a Distance from Others\u2014or Ourselves?" },
  { date: "10/5/24", title: "Why We Attract the Same Dating Experience Over & Over Again" },
  { date: "9/5/24", title: "Books for Your Journey" },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 pt-32 pb-16 text-center sm:pt-40 sm:pb-20">
        <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Resources
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-darkgray sm:text-lg">
          This is a space for tracing the deeper layers that come alive in
          connection&mdash;with ourselves and others&mdash;and meeting them with
          awareness, curiosity, and care. Through intimacy with our inner world,
          we learn to soften protective patterns, unwind inherited limiting
          beliefs, and allow new ways of being to take root. For anyone sensing
          that their relational patterns hold keys to their healing.
        </p>
      </section>

      {/* Subscribe */}
      <section className="bg-offwhite px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Subscribe
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-darkgray sm:text-lg">
            Sign up with your email address so you never miss a new blog post or
            podcast episode.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-lightgray bg-white px-4 py-3 text-sm text-charcoal placeholder:text-midgray focus:border-charcoal focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-charcoal px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-darkgray"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-charcoal sm:text-3xl">
            Blog
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-midgray italic">
            Starting in September 2025, new blog posts will only be published
            via weekly newsletter &amp; Substack
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between border border-lightgray p-8 transition-colors hover:bg-offwhite"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-widest text-midgray">
                    {post.date}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-charcoal">
                    {post.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium tracking-wide text-charcoal transition-colors group-hover:text-darkgray"
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
