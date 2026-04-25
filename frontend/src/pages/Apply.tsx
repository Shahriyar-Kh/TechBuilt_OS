import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { courses, specializations } from "@/lib/data";
import { ArrowRight, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  selectionType: z.enum(["course", "specialization"]),
  selection: z.string().min(1),
  experience: z.string().min(1),
  goal: z.string().trim().min(10).max(500),
});

export default function Apply() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    selectionType: (params.get("type") as "course" | "specialization") || "specialization",
    selection: params.get("slug") || "",
    experience: "",
    goal: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const options = form.selectionType === "course" ? courses : specializations;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      toast.error("Please complete the required fields.");
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => navigate("/thank-you"), 700);
  };

  return (
    <>
      <SEO
        title="Apply Now — Start Your Tech Career | TechBuilt OS"
        description="Apply to a TechBuilt OS course or specialization. Quick application, fast response. Limited seats per cohort."
      />
      <PageHero
        eyebrow="Apply now"
        title={<>Start your <span className="text-gradient">tech career</span>.</>}
        description="One short application. We'll get back to you within 24 hours with next steps and payment options."
      />

      <section className="container py-16 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-4 space-y-5">
            <Reveal>
              <h3 className="font-display font-bold text-xl mb-3">Why apply?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  { icon: Sparkles, text: "Personal advisor matches you to the right path" },
                  { icon: GraduationCap, text: "Flexible payment options including installments" },
                  { icon: Briefcase, text: "Career support included with specializations" },
                ].map((b, i) => (
                  <li key={i} className="flex gap-3 p-3 rounded-xl bg-secondary/50">
                    <b.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{b.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-8">
            <form onSubmit={submit} className="card-premium p-8 space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3">I'm applying for</p>
                <div className="grid grid-cols-2 gap-3">
                  {(["course", "specialization"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, selectionType: type, selection: "" })}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        form.selectionType === type
                          ? "border-primary bg-primary/5 shadow-glow"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <p className="font-display font-bold capitalize">{type}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {type === "course" ? "Single skill, focused" : "Career-ready full track"}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <Field label={`Choose a ${form.selectionType}`} error={errors.selection}>
                <select value={form.selection} onChange={(e) => setForm({ ...form, selection: e.target.value })} className="input">
                  <option value="">Select…</option>
                  {options.map((o) => (
                    <option key={o.slug} value={o.slug}>{o.title}</option>
                  ))}
                </select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" error={errors.name}>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Jane Doe" />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" placeholder="jane@email.com" />
                </Field>
              </div>

              <Field label="Phone (optional)">
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" placeholder="+1 (555) 555-0123" />
              </Field>

              <Field label="Your experience level" error={errors.experience}>
                <select value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="input">
                  <option value="">Select…</option>
                  <option>Complete beginner</option>
                  <option>Some basics</option>
                  <option>Intermediate</option>
                  <option>Career switcher</option>
                </select>
              </Field>

              <Field label="What's your goal?" error={errors.goal}>
                <textarea
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  rows={4}
                  className="input resize-none"
                  placeholder="e.g. Land my first frontend role within 6 months..."
                />
              </Field>

              <Button type="submit" disabled={loading} className="w-full bg-gradient-primary shadow-glow h-12 text-base">
                {loading ? "Submitting..." : <>Submit application <ArrowRight className="ml-2 h-4 w-4" /></>}
              </Button>
              <p className="text-xs text-muted-foreground text-center">By applying you agree to our Terms and Privacy Policy.</p>
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`.input{ width:100%; height:2.75rem; border-radius:0.75rem; border:1px solid hsl(var(--border)); background:hsl(var(--background)); padding:0 1rem; font-size:0.875rem; transition: all .2s; } .input:focus{ outline:none; border-color:hsl(var(--ring)); box-shadow:0 0 0 4px hsl(var(--ring)/0.12);} textarea.input{ padding:0.75rem 1rem; height:auto; } select.input{ appearance:none; background-image: linear-gradient(45deg, transparent 50%, hsl(var(--muted-foreground)) 50%), linear-gradient(135deg, hsl(var(--muted-foreground)) 50%, transparent 50%); background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%; background-size:5px 5px; background-repeat:no-repeat;}`}</style>
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
