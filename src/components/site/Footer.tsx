import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl text-primary">Tamr</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            A Malappuram-based purveyor of premium imported dates. Sourced with care, delivered fresh across Kerala.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-accent">All Dates</Link></li>
            <li><Link to="/offers" className="hover:text-accent">Offers</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Gift Boxes</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Brand</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About Tamr</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Journal</Link></li>
            <li><Link to="/testimonials" className="hover:text-accent">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Visit</div>
          <p className="text-sm text-muted-foreground">
            Down Hill, Malappuram<br />
            Kerala, India 676519<br />
            <a href="tel:+919876543210" className="hover:text-accent">+91 98765 43210</a><br />
            <a href="mailto:hello@tamr.in" className="hover:text-accent">hello@tamr.in</a>
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Tamr Premium Dates. All rights reserved.</div>
          <div>Crafted in Malappuram, Kerala.</div>
        </div>
      </div>
    </footer>
  );
}
