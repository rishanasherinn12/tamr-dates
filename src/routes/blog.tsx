import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Tamr" },
      { name: "description", content: "Stories, recipes and nutrition notes from the world of premium dates." },
      { property: "og:title", content: "Journal — Tamr" },
      { property: "og:description", content: "Stories, recipes and nutrition notes from the world of premium dates." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "ajwa-vs-medjool",
    category: "Guide",
    title: "Ajwa vs Medjool: which date is right for you?",
    excerpt: "Two of the world's most prized dates — but they couldn't be more different. A short guide to choosing your favourite.",
    read: "4 min read",
  },
  {
    slug: "7-health-benefits",
    category: "Nutrition",
    title: "7 reasons dates belong in your daily diet",
    excerpt: "From iron and potassium to slow-release energy, dates are quietly one of the most nourishing snacks on earth.",
    read: "5 min read",
  },
  {
    slug: "iftar-recipes",
    category: "Recipes",
    title: "Three simple Iftar recipes starring dates",
    excerpt: "Date and tahini smoothie, stuffed Medjools and a one-pan date chicken — all under 20 minutes.",
    read: "6 min read",
  },
  {
    slug: "storing-dates",
    category: "How-to",
    title: "How to store your dates so they stay perfect",
    excerpt: "A few small habits that keep premium dates soft, glossy and full of flavour for months.",
    read: "3 min read",
  },
  {
    slug: "gulf-tradition",
    category: "Culture",
    title: "Why dates are at the heart of Gulf hospitality",
    excerpt: "From Bedouin tents to modern majlis — a short history of the most generous fruit on the table.",
    read: "5 min read",
  },
  {
    slug: "kids-natural-sweet",
    category: "Family",
    title: "Dates as a natural sweetener for kids",
    excerpt: "Smarter than refined sugar — how to introduce dates to children's lunchboxes and after-school snacks.",
    read: "4 min read",
  },
];

function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <header className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">The Journal</div>
        <h1 className="font-display text-5xl sm:text-6xl">Stories, recipes & nutrition notes.</h1>
        <p className="mt-4 text-muted-foreground">
          A small collection of writing from our buyers, our kitchen and our community.
        </p>
      </header>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {posts.map((p) => (
          <article key={p.slug} className="group">
            <Link to="/blog" className="block">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-warm grain overflow-hidden">
                <div className="h-full w-full flex items-end p-6">
                  <span className="font-display text-3xl text-foreground/30 group-hover:text-foreground/50 transition-colors">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.category} · {p.read}</div>
                <h2 className="mt-2 font-display text-2xl leading-snug group-hover:text-accent transition-colors">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
