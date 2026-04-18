import { createFileRoute, Link } from "@tanstack/react-router";
import grove from "@/assets/about-grove.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tamr — Premium Dates from Malappuram" },
      { name: "description", content: "The story behind Tamr — a Malappuram-based premium dates brand committed to authenticity, quality and freshness." },
      { property: "og:title", content: "About Tamr" },
      { property: "og:description", content: "Premium dates, sourced with care from Madinah, Jordan and beyond." },
      { property: "og:image", content: grove },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={grove} alt="Date palm grove at golden hour" className="h-full w-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12 text-background">
            <div className="text-[11px] uppercase tracking-[0.25em] text-background/80">Our story</div>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl max-w-3xl leading-[1.05]">
              From sacred groves to your table.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 prose prose-stone">
        <p className="font-display text-2xl text-foreground leading-snug">
          Tamr was born from a simple obsession: the idea that the dates we share at Iftar, on festivals and at celebrations
          should be nothing short of extraordinary.
        </p>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Founded in Malappuram by a family with deep roots in the Gulf, Tamr brings home the dates we grew up loving —
          the soft, dark Ajwa from Madinah; the regal Medjool from the Jordan Valley; the melt-in-your-mouth Sukkari from
          Al Qassim. Each variety is sourced directly from trusted growers, tasted before it's stocked, and shipped in
          small batches so it arrives as fresh as the day it left the orchard.
        </p>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          We believe premium doesn't have to mean complicated. Our packaging is clean, our prices are fair, and our promise
          is simple — every date you open from a Tamr box should taste exactly the way it was meant to.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 not-prose">
          {[
            { t: "Sourced direct", b: "From Madinah, Jordan and Al Qassim — no middlemen, no compromise." },
            { t: "Tasted, then stocked", b: "Every batch is sampled by our buyers before it makes the shelf." },
            { t: "Small-batch fresh", b: "Never warehoused for long. Shipped within 48 hours of order." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border p-6 bg-cream/40">
              <div className="font-display text-xl">{f.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 not-prose">
          <Link to="/shop" className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:opacity-90 shadow-warm">
            Explore the collection
          </Link>
        </div>
      </section>
    </>
  );
}
