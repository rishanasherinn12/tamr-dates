import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart, cartTotal, formatINR, buildWhatsAppOrderURL } from "@/lib/cart-store";
import { Link } from "@tanstack/react-router";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove } = useCart();
  const total = cartTotal(items);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-warm transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <div className="font-display text-xl">Your Basket</div>
            <div className="text-xs text-muted-foreground">{items.length} item{items.length !== 1 && "s"}</div>
          </div>
          <button onClick={close} aria-label="Close" className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-secondary">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="font-display text-2xl text-foreground">Your basket is empty</div>
              <p className="mt-2 text-sm text-muted-foreground">Discover our finest selection of premium dates.</p>
              <Link
                to="/shop"
                onClick={close}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground hover:opacity-90"
              >
                Browse the shop
              </Link>
            </div>
          ) : (
            items.map((i) => (
              <div key={i.slug} className="flex gap-3 pb-4 border-b border-border/60 last:border-0">
                <img src={i.image} alt={i.name} className="h-20 w-20 rounded-lg object-cover" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <div className="font-display text-base leading-tight">{i.name}</div>
                  <div className="text-xs text-muted-foreground">{i.weight}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-border">
                      <button onClick={() => setQty(i.slug, i.qty - 1)} className="h-7 w-7 inline-flex items-center justify-center hover:bg-secondary rounded-l-full">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-7 text-center text-sm">{i.qty}</span>
                      <button onClick={() => setQty(i.slug, i.qty + 1)} className="h-7 w-7 inline-flex items-center justify-center hover:bg-secondary rounded-r-full">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="text-sm font-medium">{formatINR(i.price * i.qty)}</div>
                  </div>
                </div>
                <button onClick={() => remove(i.slug)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-border space-y-3 bg-cream/40">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatINR(total)}</span>
            </div>
            <div className="text-xs text-muted-foreground">Shipping calculated at checkout. Free across Kerala over ₹999.</div>
            <a
              href={buildWhatsAppOrderURL(items)}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Checkout via WhatsApp →
            </a>
            <p className="text-[11px] text-center text-muted-foreground">
              We'll confirm your order and share UPI payment details on WhatsApp.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
