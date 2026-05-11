import { Link } from "react-router-dom";
import { Sparkles, Mail, MapPin, Phone, Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

const links = {
  learn: [
    { label: "All Courses", to: "/courses" },
    { label: "Specializations", to: "/specializations" },
    { label: "Roadmaps", to: "/roadmaps" },
    { label: "Pricing", to: "/pricing" },
    { label: "Apply Now", to: "/apply" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Contact", to: "/contact" },
    { label: "FAQ", to: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ],
};

const socials = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="container relative py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="h-10 w-10 rounded-xl grid place-items-center shadow-glow overflow-hidden relative"
                style={{ background: 'var(--gradient-primary)' }}>
                <Sparkles className="h-5 w-5 text-white relative z-10" />
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl tracking-tight">TechBuilt OS</span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">TechBuilt Open School</span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Job-ready tech skills through low-cost single courses and industry-level specializations — with mentors, real projects, and a hiring-focused community.
            </p>

            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-xl border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="space-y-2.5 text-sm">
              <a href="mailto:hello@techbuiltos.com" className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors group">
                <div className="h-7 w-7 rounded-lg bg-primary/8 grid place-items-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </div>
                hello@techbuiltos.com
              </a>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <div className="h-7 w-7 rounded-lg bg-primary/8 grid place-items-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                +1 (415) 555-0179
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <div className="h-7 w-7 rounded-lg bg-primary/8 grid place-items-center shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                100 Learners Way, San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm mb-4 tracking-tight">Learn</h4>
            <ul className="space-y-2.5">
              {links.learn.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm mb-4 tracking-tight">Company</h4>
            <ul className="space-y-2.5">
              {links.company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-sm mb-2 tracking-tight">Stay in the loop</h4>
            <p className="text-sm text-muted-foreground mb-4">Weekly resources, roadmaps, and career tips for aspiring developers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-11 rounded-xl border border-border bg-white/60 backdrop-blur px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'var(--gradient-primary)', color: 'hsl(var(--primary-foreground))' }}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-2">No spam. Unsubscribe anytime.</p>

            <div className="mt-6 p-4 rounded-xl bg-secondary/60 border border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Response time</p>
              <p className="text-sm font-semibold">We reply within 1 business hour</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Team available Mon–Fri, 9am–6pm PT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechBuilt OS — TechBuilt Open School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {links.legal.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}