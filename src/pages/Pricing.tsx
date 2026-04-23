import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Single Course",
    price: "$49",
    suffix: "+",
    desc: "Pick a single skill and master it.",
    features: ["Lifetime access to one course", "On-demand video lessons", "Verified certificate", "Community access", "14-day money back"],
    excluded: ["1:1 mentorship", "Career support"],
    cta: "Browse courses", to: "/courses", featured: false,
  },
  {
    name: "Specialization",
    price: "$329",
    suffix: "+",
    desc: "Career-ready bundled tracks.",
    features: ["Bundle of 3–7 courses", "Lifetime access", "1:1 mentor sessions", "Capstone project review", "Career & resume support", "Hiring partner network", "Certificate of specialization", "Installments available"],
    excluded: [],
    cta: "View specializations", to: "/specializations", featured: true,
  },
  {
    name: "Teams",
    price: "Custom",
    suffix: "",
    desc: "Train your engineering team.",
    features: ["Bulk licensing", "Custom curriculum", "Team dashboard", "Dedicated success manager", "Onboarding & SSO"],
    excluded: [],
    cta: "Contact sales", to: "/contact", featured: false,
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — Affordable Premium Tech Education | TechBuilt OS"
        description="Simple, transparent pricing. Single courses from $49, specializations from $329. Teams pricing available. 14-day refund guaranteed."
      />
      <PageHero
        eyebrow="Pricing"
        title={<>Simple. Transparent. <span className="text-gradient">Worth every cent</span>.</>}
        description="Pay once, learn forever. No subscriptions, no surprises. 14-day money-back guarantee on everything."
      />

      <section className="container py-12 pb-24">
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className={`relative card-premium p-8 h-full flex flex-col ${t.featured ? "border-primary/40 shadow-glow ring-1 ring-primary/20" : ""}`}>
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold shadow-accent-glow flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> MOST POPULAR
                  </div>
                )}
                <p className="font-display font-bold text-lg">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                <div className="my-6 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-5xl">{t.price}</span>
                  <span className="text-muted-foreground font-semibold">{t.suffix}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                  {t.excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground/60 line-through">
                      <X className="h-4 w-4 mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${t.featured ? "bg-gradient-primary shadow-glow" : ""}`} variant={t.featured ? "default" : "outline"}>
                  <Link to={t.to}>{t.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-3">Need a different plan?</h3>
          <p className="text-muted-foreground mb-5">We offer scholarships and regional pricing — reach out and we'll work something out.</p>
          <Button asChild variant="outline">
            <Link to="/contact">Contact us</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
