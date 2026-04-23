import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const more = [
  { q: "Do specializations include all single courses?", a: "Yes. A specialization bundles all required single courses plus mentorship, projects and career support." },
  { q: "How long do I have access to materials?", a: "Forever. Once enrolled, you keep lifetime access including future updates." },
  { q: "Are there live classes?", a: "Yes. Specialization students get weekly live mentor sessions in addition to the on-demand library." },
  { q: "What's the time commitment per week?", a: "Plan for 8–12 hours per week for specializations. Single courses can be completed at your own pace." },
];

export default function FAQ() {
  const all = [...faqs, ...more];
  return (
    <>
      <SEO
        title="Frequently Asked Questions | TechBuilt OS"
        description="Answers to common questions about TechBuilt OS courses, specializations, pricing, refunds and career support."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: all.map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a }
          }))
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title={<>Got <span className="text-gradient">questions</span>? We've got answers.</>}
        description="Everything you need to know before enrolling. Still curious? Talk to our team."
      />

      <section className="container py-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {all.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="card-premium px-6 border-0">
                  <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild className="bg-gradient-primary shadow-glow">
              <Link to="/contact">Contact our team</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
