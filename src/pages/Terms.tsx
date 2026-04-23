import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions | TechBuilt OS" description="Terms of service governing the use of TechBuilt OS courses and platform." />
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated: April 2025" />
      <section className="container py-16 pb-24 max-w-3xl">
        <article className="space-y-6 text-foreground/85 leading-relaxed">
          {[
            { h: "1. Acceptance of terms", p: "By accessing or using TechBuilt OS, you agree to be bound by these Terms. If you don't agree, please don't use the service." },
            { h: "2. Account & enrollment", p: "You must provide accurate information and keep your account credentials secure. Course access is non-transferable." },
            { h: "3. Payments & refunds", p: "All purchases are billed in USD. We offer a 14-day money-back guarantee on all courses and specializations from the date of purchase, no questions asked." },
            { h: "4. Intellectual property", p: "All course content, videos, code samples and materials are the property of TechBuilt OS. You may use them for personal learning only — redistribution or resale is prohibited." },
            { h: "5. Acceptable use", p: "You agree not to share your account, scrape course content, or use the platform for any illegal or harmful purpose. Violations may result in termination without refund." },
            { h: "6. Service availability", p: "We aim for 99.9% uptime but do not guarantee uninterrupted access. Scheduled maintenance will be announced in advance." },
            { h: "7. Limitation of liability", p: "TechBuilt OS provides educational content. We do not guarantee specific career outcomes, employment or income. Our liability is limited to the amount you paid in the last 12 months." },
            { h: "8. Termination", p: "Either party may terminate this agreement at any time. Refunds outside the 14-day window are at our discretion." },
            { h: "9. Governing law", p: "These Terms are governed by the laws of the State of California, USA." },
            { h: "10. Contact", p: "Questions? Email legal@techbuiltos.com." },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="font-display font-bold text-xl mb-2">{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
