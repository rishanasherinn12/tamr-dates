import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatINR, useCart } from "@/lib/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  return (
    <div className="group flex flex-col">
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden rounded-2xl bg-cream aspect-square"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="pt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link to="/shop/$slug" params={{ slug: product.slug }} className="block">
            <h3 className="font-display text-lg leading-tight truncate">{product.name}</h3>
          </Link>
          <p className="mt-0.5 text-xs text-muted-foreground truncate">
            {product.origin} · {product.weight}
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-base font-medium">{formatINR(product.price)}</div>
        </div>
      </div>
      <button
        onClick={() => add(product)}
        className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-foreground/80 bg-background px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        Add to basket
      </button>
    </div>
  );
}
