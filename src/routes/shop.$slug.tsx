import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus, Truck, ShieldCheck, MessageCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { getProduct, products } from "@/data/products";
import { formatINR, useCart, WHATSAPP_NUMBER } from "@/lib/cart-store";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Tamr` },
          { name: "description", content: loaderData.product.shortDesc },
          { property: "og:title", content: `${loaderData.product.name} — Tamr` },
          { property: "og:description", content: loaderData.product.shortDesc },
          { property: "og:image", content: loaderData.product.image },
          { name: "twitter:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Product not found</h1>
      <Link to="/shop" className="mt-6 inline-flex text-sm text-accent">Back to shop</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  const upiHref = `upi://pay?pa=tamr@upi&pn=Tamr&am=${product.price * qty}&cu=INR&tn=${encodeURIComponent(product.name)}`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Tamr, I'd like to order ${qty} × ${product.name} (${product.weight}) — ${formatINR(product.price * qty)}.`,
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <Link to="/shop" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> Back to shop
      </Link>

      <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="rounded-3xl overflow-hidden bg-cream aspect-square">
          <img src={product.image} alt={product.name} width={1024} height={1024} className="h-full w-full object-cover" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{product.origin}</div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl leading-tight">{product.name}</h1>
          <div className="mt-3 flex items-baseline gap-3">
            <div className="text-2xl font-medium">{formatINR(product.price)}</div>
            <div className="text-sm text-muted-foreground">/ {product.weight}</div>
          </div>

          <p className="mt-6 text-foreground/80 leading-relaxed">{product.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-border p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Taste</div>
              <div className="mt-1">{product.taste}</div>
            </div>
            <div className="rounded-xl border border-border p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Benefits</div>
              <ul className="mt-1 space-y-0.5">
                {product.benefits.slice(0, 3).map((b) => (
                  <li key={b}>· {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-11 w-11 inline-flex items-center justify-center hover:bg-secondary rounded-l-full">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="h-11 w-11 inline-flex items-center justify-center hover:bg-secondary rounded-r-full">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => add(product, qty)}
              className="flex-1 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90"
            >
              Add to basket — {formatINR(product.price * qty)}
            </button>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <a href={upiHref} className="flex-1 text-center rounded-full bg-gradient-gold text-gold-foreground px-6 py-3 text-sm font-medium hover:opacity-90 shadow-gold">
              Pay via UPI (GPay / PhonePe)
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-accent" /> Kerala-wide shipping
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> Freshness guaranteed
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl mb-8">You may also love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
