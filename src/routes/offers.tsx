import { createFileRoute, Link } from "@tanstack/react-router";
import banner from "@/assets/offers-banner.jpg";
import { products } from "@/data/products";
import { formatINR } from "@/lib/cart-store";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers — Ramadan & Eid Specials | Tamr" },
      { name: "description", content: "Festival-ready gift packs and seasonal offers on premium dates. Ramadan and Eid specials from Tamr." },
      { property: "og:title", content: "Ramadan & Eid Offers — Tamr" },
      { property: "og:description", content: "Festival-ready gift packs and seasonal offers on premium dates." },
      { property: "og:image", content: banner },
    ],
  }),
  component: OffersPage,
});

const offers = [
  { title: "Ramadan Iftar Bundle", desc: "Ajwa 500g + Sukkari 500g + Medjool 500g.", original: 3347, deal: 2799, tag: "Save ₹548" },
  { title: "Eid Family Gift Pack", desc: "Signature Ramadan box + Stuffed Luxe dates.", original: 3798, deal: 3199, tag: "Save ₹599" },
  { title: "Connoisseur's Trio", desc: "Ajwa, Mabroom and Safawi — for those who know.", original: 2847, deal: 2399, tag: "Save ₹448" },
];

function OffersPage() {
  const giftBoxes = products.filter((p) => p.category === "gift" || p.category === "specialty");

  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={banner} alt="Ramadan gift collection" className="h-full w-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-background">
            <div className="text-[11px] uppercase tracking-[0.25em] text-background/80">Festival Edition</div>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl max-w-2xl leading-[1.05]">
              Gifts for the season.
            </h1>
            <p className="mt-4 max-w-lg text-background/85">
              Hand-curated bundles for Ramadan, Eid and every meaningful gathering in between.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Festival Bundles</div>
        <h2 className="font-display text-4xl sm:text-5xl">This season's specials</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div key={o.title} className="rounded-2xl border border-border bg-cream/40 p-6 flex flex-col">
              <span className="self-start inline-flex items-center rounded-full bg-accent/20 text-accent-foreground px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                {o.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{o.desc}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-2xl">{formatINR(o.deal)}</span>
                <span className="text-sm text-muted-foreground line-through">{formatINR(o.original)}</span>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90"
              >
                Order this bundle
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Gift-ready</div>
        <h2 className="font-display text-4xl sm:text-5xl">Ready to gift</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {giftBoxes.map((g) => (
            <Link key={g.slug} to="/shop/$slug" params={{ slug: g.slug }} className="group block">
              <div className="overflow-hidden rounded-2xl bg-cream aspect-[4/3]">
                <img src={g.image} alt={g.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl">{g.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{g.shortDesc}</p>
                </div>
                <div className="text-lg font-medium shrink-0">{formatINR(g.price)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
