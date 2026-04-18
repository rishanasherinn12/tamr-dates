import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Tamr" },
      { name: "description", content: "What our customers across Kerala say about Tamr premium dates." },
      { property: "og:title", content: "Customer Reviews — Tamr" },
      { property: "og:description", content: "Real reviews from families across Kerala enjoying Tamr's premium dates." },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { name: "Rashid K.", city: "Kozhikode", text: "These Ajwa dates remind me of the ones we used to bring back from Madinah. Genuinely premium quality and the freshness is unbeatable.", product: "Ajwa Al Madinah" },
  { name: "Fathima A.", city: "Malappuram", text: "Bought the Ramadan gift box for my in-laws — the packaging itself was a wow moment, and the dates were exquisite.", product: "Ramadan Gift Box" },
  { name: "Anoop M.", city: "Kochi", text: "Fresh, soft, and shipped fast across Kerala. My family's new go-to for dates. The Medjools are huge!", product: "Medjool Jumbo" },
  { name: "Saleena P.", city: "Kannur", text: "I've ordered three times now. Consistent quality and lovely customer service on WhatsApp.", product: "Sukkari Royal" },
  { name: "Naseer V.", city: "Thrissur", text: "The stuffed dates are dangerously good. Disappeared in one evening at our family gathering.", product: "Stuffed Luxe" },
  { name: "Hafsa T.", city: "Palakkad", text: "Genuine Ajwa is hard to find here. So glad to have discovered Tamr — finally a brand I can trust.", product: "Ajwa Al Madinah" },
  { name: "Ibrahim S.", city: "Alappuzha", text: "Ordered for the office Iftar — everyone asked where I got them from. Premium feel from box to bite.", product: "Ramadan Iftar Bundle" },
  { name: "Ayesha K.", city: "Malappuram", text: "Local brand, world-class quality. Proud that this comes from our own town.", product: "Mabroom Special" },
  { name: "Vinod J.", city: "Kollam", text: "Not Muslim, but I love dates with my morning coffee. Tamr's Sukkari is the best I've tasted in India.", product: "Sukkari Royal" },
];

function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <header className="text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Reviews</div>
        <h1 className="font-display text-5xl sm:text-6xl">In their own words.</h1>
        <div className="mt-5 inline-flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">4.9 average · 380+ orders delivered</span>
        </div>
      </header>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6 flex flex-col shadow-soft">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-3 text-sm text-foreground/85 leading-relaxed flex-1">"{r.text}"</p>
            <div className="mt-5 flex items-center justify-between text-xs">
              <div>
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-muted-foreground">{r.city}</div>
              </div>
              <div className="text-muted-foreground italic">{r.product}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
