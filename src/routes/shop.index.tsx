import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop Premium Dates — Tamr" },
      { name: "description", content: "Browse our full collection of premium imported dates: Ajwa, Medjool, Sukkari, Mabroom, Safawi, gift boxes and more." },
      { property: "og:title", content: "Shop Premium Dates — Tamr" },
      { property: "og:description", content: "Browse our full collection of premium dates and gift boxes." },
    ],
  }),
  component: ShopPage,
});

const categories = [
  { id: "all", label: "All" },
  { id: "premium", label: "Premium" },
  { id: "classic", label: "Classic" },
  { id: "specialty", label: "Specialty" },
  { id: "gift", label: "Gift Boxes" },
] as const;

const sorts = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
] as const;

function ShopPage() {
  const [cat, setCat] = useState<(typeof categories)[number]["id"]>("all");
  const [sort, setSort] = useState<(typeof sorts)[number]["id"]>("featured");

  const filtered = useMemo(() => {
    let list = cat === "all" ? products : products.filter((p) => p.category === cat);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <header className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">The Shop</div>
        <h1 className="font-display text-5xl sm:text-6xl">A collection, considered.</h1>
        <p className="mt-4 text-muted-foreground">
          Every variety we carry is hand-picked, tasted by our buyers and sourced from trusted growers across the Middle East.
        </p>
      </header>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] border transition-colors ${
                cat === c.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="rounded-full border border-border bg-background px-4 py-1.5 text-xs text-foreground"
        >
          {sorts.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
