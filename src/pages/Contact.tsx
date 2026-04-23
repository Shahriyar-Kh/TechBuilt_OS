import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(120),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! We'll be in touch within 24 hours.");
      navigate("/thank-you");
    }, 700);
  };

  return (
    <>
      <SEO
        title="Contact TechBuilt OS — Talk to Our Team"
        description="Get in touch with TechBuilt OS. Questions about courses, specializations, pricing or careers? Our team responds within an hour."
      />
      <PageHero
        eyebrow="Contact us"
        title={<>Let's <span className="text-gradient">talk</span>.</>}
        description="Have a question? Want advice on which path is right for you? Drop us a line — we typically respond within an hour."
      />

      <section className="container py-16 pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-3xl font-extrabold">Get in touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're a small, friendly team. There's no chatbot maze — a real human will answer within 1 business hour.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@techbuiltos.com" },
                { icon: Phone, label: "Phone", value: "+1 (415) 555-0179" },
                { icon: MapPin, label: "Office", value: "100 Learners Way, San Francisco, CA" },
                { icon: MessageSquare, label: "Live chat", value: "Mon–Fri, 9am–6pm PT" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 p-4 rounded-xl bg-secondary/40">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow shrink-0">
                    <c.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={submit} className="card-premium p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name}>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Jane Doe" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="jane@email.com" />
                </Field>
              </div>
              <Field label="Subject" error={errors.subject}>
                <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="input" placeholder="What can we help with?" />
              </Field>
              <Field label="Message" error={errors.message}>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6} className="input resize-none" placeholder="Tell us a bit more..." />
              </Field>
              <Button type="submit" disabled={loading} className="w-full bg-gradient-primary shadow-glow h-12 text-base">
                {loading ? "Sending..." : <>Send message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`.input{ width:100%; height:2.75rem; border-radius:0.75rem; border:1px solid hsl(var(--border)); background:hsl(var(--background)); padding:0 1rem; font-size:0.875rem; transition: all .2s; } .input:focus{ outline:none; border-color:hsl(var(--ring)); box-shadow:0 0 0 4px hsl(var(--ring)/0.12);} textarea.input{ padding:0.75rem 1rem; height:auto; }`}</style>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold mb-1.5 block">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
