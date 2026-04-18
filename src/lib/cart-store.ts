import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/data/products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  add: (product: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      add: (product, qty = 1) =>
        set((s) => {
          const existing = s.items.find((i) => i.slug === product.slug);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.slug === product.slug ? { ...i, qty: i.qty + qty } : i,
              ),
              isOpen: true,
            };
          }
          return {
            items: [
              ...s.items,
              {
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                weight: product.weight,
                qty,
              },
            ],
            isOpen: true,
          };
        }),
      remove: (slug) => set((s) => ({ items: s.items.filter((i) => i.slug !== slug) })),
      setQty: (slug, qty) =>
        set((s) => ({
          items: s.items
            .map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i))
            .filter((i) => i.qty > 0),
        })),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
    }),
    { name: "tamr-cart", partialize: (s) => ({ items: s.items }) },
  ),
);

export const cartTotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.price * i.qty, 0);

export const cartCount = (items: CartItem[]) => items.reduce((s, i) => s + i.qty, 0);

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

// WhatsApp checkout
export const WHATSAPP_NUMBER = "919876543210"; // placeholder, user should change

export const buildWhatsAppOrderURL = (items: CartItem[]) => {
  const lines = items.map(
    (i) => `• ${i.name} (${i.weight}) × ${i.qty} — ${formatINR(i.price * i.qty)}`,
  );
  const total = cartTotal(items);
  const msg = [
    "Hello Tamr! I'd like to place an order:",
    "",
    ...lines,
    "",
    `Total: ${formatINR(total)}`,
    "",
    "My delivery details:",
    "Name: ",
    "Address: ",
    "Pincode: ",
    "Phone: ",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
