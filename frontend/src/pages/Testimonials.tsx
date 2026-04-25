import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

const extra = [
  { name: "Marcus Lee", role: "Junior Dev @ Notion", text: "I tried 3 other bootcamps before. None compared to the quality and structure here.", rating: 5 },
  { name: "Elena Rossi", role: "Frontend @ Linear", text: "The mentor sessions were game-changing. Real engineers giving real feedback.", rating: 5 },
  { name: "Kenji Tanaka", role: "Full Stack @ Vercel", text: "From zero to my first dev job in 7 months. Worth every dollar.", rating: 5 },
];

export default function Testimonials() {
  const all = [...testimonials.map(t => ({...t, image: t.image})), ...extra.map(t => ({...t, image: undefined as any}))];
  return (
    <>
      <SEO
        title="Student Testimonials — Real Career Outcomes | TechBuilt OS"
        description="Read real stories from TechBuilt OS graduates now working at Stripe, Shopify, Atlassian, Notion and more."
      />
      <PageHero
        eyebrow="Testimonials"
        title={<>What our <span className="text-gradient">students</span> say.</>}
        description="Real students. Real careers. Real outcomes."
      />

      <section className="container py-16 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {all.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="card-premium p-7 h-full flex flex-col">
                <div className="flex items-center gap-1 text-accent mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <Quote className="h-7 w-7 text-primary/20 mb-3" />
                <p className="text-foreground/85 leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                  ) : (
                    <div className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-bold">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
