import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Truck, Award, Heart } from "lucide-react";
import heroImg from "@/assets/hero-dates.jpg";
import offersImg from "@/assets/offers-banner.jpg";
import { featured } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamr — Experience the Taste of Premium Dates" },
      {
        name: "description",
        content:
          "Hand-picked Ajwa, Medjool and Sukkari dates from the world's finest groves, delivered fresh across Kerala.",
      },
      { property: "og:title", content: "Tamr — Premium Dates" },
      {
        property: "og:description",
        content: "Hand-picked Ajwa, Medjool and Sukkari dates, delivered fresh across Kerala.",
      },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Leaf, title: "100% Natural", body: "No additives, no preservatives. Just dates as nature intended." },
  { icon: Award, title: "Imported Premium", body: "Sourced from Madinah, Jordan and Al Qassim — the finest groves." },
  { icon: Truck, title: "Fresh Stock", body: "Small batches, never warehoused. Shipped within 48 hours." },
  { icon: Heart, title: "Loved Across Kerala", body: "Trusted by families, gifters and Gulf-return connoisseurs." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium dates in a ceramic bowl" className="h-full w-full object-cover" width={1600} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-40 lg:pb-48">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full bg-background/80 backdrop-blur px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-foreground border border-border">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
              Malappuram · Kerala
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Experience the taste of <em className="text-accent not-italic">premium dates</em>.
            </h1>
            <p className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
              From the sacred groves of Madinah to the Jordan Valley — Tamr brings home the world's most prized dates,
              hand-picked and freshly delivered across Kerala.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:opacity-90 shadow-warm transition"
              >
                Shop the collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-foreground/30 px-7 py-3.5 text-sm text-foreground hover:bg-foreground hover:text-background transition"
              >
                Our story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="border-y border-border bg-cream/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <div className="h-10 w-10 shrink-0 rounded-full bg-background border border-border inline-flex items-center justify-center">
                <b.icon className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="text-sm font-medium">{b.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{b.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">The Collection</div>
            <h2 className="font-display text-4xl sm:text-5xl">Our most-loved dates</h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm text-foreground hover:text-accent">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Festival banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <Link
          to="/offers"
          className="relative block overflow-hidden rounded-3xl group"
        >
          <img
            src={offersImg}
            alt="Ramadan and Eid gift collection"
            loading="lazy"
            width={1600}
            height={900}
            className="h-[420px] sm:h-[480px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 sm:px-14 max-w-xl text-background">
              <div className="text-[11px] uppercase tracking-[0.25em] text-background/80">Festival Edition</div>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
                Ramadan & Eid <em className="text-accent not-italic">Gift Boxes</em>
              </h3>
              <p className="mt-4 text-background/85 text-sm sm:text-base max-w-md">
                Beautifully packaged assortments of our finest dates — ready to gift to family, friends and clients.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm">
                Explore offers <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Testimonials preview */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Reviews</div>
            <h2 className="font-display text-4xl sm:text-5xl">Loved by Kerala</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { q: "These Ajwa dates remind me of the ones we used to bring back from Madinah. Genuinely premium quality.", a: "Rashid K., Kozhikode" },
              { q: "Bought the Ramadan gift box for my in-laws — the packaging itself was a wow moment.", a: "Fathima A., Malappuram" },
              { q: "Fresh, soft, and shipped fast across Kerala. My family's new go-to for dates.", a: "Anoop M., Kochi" },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl bg-background p-6 border border-border shadow-soft">
                <div className="text-accent text-2xl leading-none">“</div>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{t.q}</p>
                <div className="mt-4 text-xs text-muted-foreground">— {t.a}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-1 text-sm text-foreground hover:text-accent">
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
