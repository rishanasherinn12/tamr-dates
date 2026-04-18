import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { WHATSAPP_NUMBER } from "@/lib/cart-store";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tamr | Malappuram, Kerala" },
      { name: "description", content: "Get in touch with Tamr. Visit us in Malappuram, call, email or message us on WhatsApp." },
      { property: "og:title", content: "Contact Tamr" },
      { property: "og:description", content: "Visit our store in Malappuram, or reach us by phone, email or WhatsApp." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  message: z.string().trim().min(5, "Tell us a bit more").max(800),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setError(null);
    const text = `Hi Tamr! ${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.phone})`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <header className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Get in touch</div>
        <h1 className="font-display text-5xl sm:text-6xl">We'd love to hear from you.</h1>
        <p className="mt-4 text-muted-foreground">
          Questions about our dates, bulk orders, gift boxes for events — drop us a message and we'll get back within hours.
        </p>
      </header>

      <div className="mt-14 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {[
            { Icon: MapPin, title: "Visit us", body: "Down Hill, Malappuram\nKerala 676519" },
            { Icon: Phone, title: "Call", body: "+91 98765 43210", href: "tel:+919876543210" },
            { Icon: Mail, title: "Email", body: "hello@tamr.in", href: "mailto:hello@tamr.in" },
            { Icon: MessageCircle, title: "WhatsApp", body: "Chat with us — usually replies within an hour", href: `https://wa.me/${WHATSAPP_NUMBER}` },
          ].map(({ Icon, title, body, href }) => (
            <div key={title} className="rounded-2xl border border-border bg-cream/40 p-5 flex gap-4">
              <div className="h-10 w-10 shrink-0 rounded-full bg-background border border-border inline-flex items-center justify-center">
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="text-sm font-medium">{title}</div>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-0.5 block text-sm text-muted-foreground hover:text-accent whitespace-pre-line">
                    {body}
                  </a>
                ) : (
                  <div className="mt-0.5 text-sm text-muted-foreground whitespace-pre-line">{body}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={80}
              className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
              className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="+91 ..."
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={800}
              rows={5}
              className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="How can we help?"
            />
          </div>
          {error && <div className="text-sm text-destructive">{error}</div>}
          {sent && <div className="text-sm text-sage">Opening WhatsApp — finish sending your message there.</div>}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
          <p className="text-[11px] text-center text-muted-foreground">
            We use WhatsApp to keep things quick. No data is stored on our website.
          </p>
        </form>
      </div>
    </div>
  );
}
