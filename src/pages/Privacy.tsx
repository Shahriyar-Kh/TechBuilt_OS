import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy | TechBuilt OS" description="How TechBuilt OS collects, uses and protects your personal data." />
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: April 2025" />
      <section className="container py-16 pb-24 max-w-3xl">
        <article className="prose prose-slate max-w-none space-y-6 text-foreground/85 leading-relaxed">
          {[
            { h: "1. Information we collect", p: "We collect personal information you provide when you create an account, enroll in a course, contact us or apply to a specialization. This includes your name, email, payment details and any messages you send us." },
            { h: "2. How we use your information", p: "We use your data to deliver our services, process payments, communicate course updates, provide support, and improve the learning experience. We never sell your personal information." },
            { h: "3. Data security", p: "We use industry-standard encryption and security practices including TLS in transit and AES-256 at rest. Payment data is handled exclusively by PCI-compliant processors." },
            { h: "4. Cookies", p: "We use essential cookies to keep you logged in and analytics cookies to understand site usage. You can opt out of analytics cookies at any time." },
            { h: "5. Your rights", p: "You can request access, correction or deletion of your personal data at any time by emailing privacy@techbuiltos.com. We respond within 30 days." },
            { h: "6. International users", p: "Our services are operated globally. By using TechBuilt OS you consent to processing of your data in the United States and other regions where we operate." },
            { h: "7. Changes to this policy", p: "We may update this policy occasionally. Material changes will be notified via email or in-app notification." },
            { h: "8. Contact", p: "Questions? Email privacy@techbuiltos.com or write to 100 Learners Way, San Francisco, CA." },
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
