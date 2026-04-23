import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { specializations } from "@/lib/data";
import { CheckCircle2, ArrowRight, ChevronRight, Briefcase, BookOpen, Clock, Layers, Users, Award } from "lucide-react";

export default function SpecializationDetail() {
  const { slug } = useParams();
  const spec = specializations.find((s) => s.slug === slug);
  if (!spec) return <Navigate to="/specializations" replace />;

  return (
    <>
      <SEO
        title={`${spec.title} Specialization — Career Track | TechBuilt OS`}
        description={spec.description}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container relative py-14 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/specializations" className="hover:text-primary">Specializations</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{spec.title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-flex px-3 py-1 rounded-full bg-gradient-accent text-accent-foreground font-bold text-xs shadow-accent-glow">SPECIALIZATION</span>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">{spec.title}</h1>
              <p className="text-xl text-muted-foreground">{spec.tagline}</p>
              <p className="text-foreground/85 leading-relaxed">{spec.description}</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary"><Clock className="h-3.5 w-3.5" />{spec.duration}</span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary"><Layers className="h-3.5 w-3.5" />{spec.courses} courses</span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary"><Users className="h-3.5 w-3.5" />Live mentorship</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="bg-gradient-primary shadow-glow">
                  <Link to="/apply">Enroll — {spec.price} <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Talk to advisor</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-premium-lg border border-border/60">
              <img src={spec.image} alt={spec.title} className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: BookOpen, title: "Bundled curriculum", desc: `${spec.courses} expert-led courses, fully integrated` },
            { icon: Award, title: "Certificate", desc: "Verified specialization certificate on completion" },
            { icon: Briefcase, title: "Career support", desc: "Resume reviews, mock interviews, hiring partners" },
          ].map((b) => (
            <Reveal key={b.title}>
              <div className="card-premium p-7">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow mb-4">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold mb-6">Outcomes</h2>
            <ul className="space-y-3">
              {spec.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-medium">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-extrabold mb-6">Curriculum</h2>
            <ol className="space-y-3">
              {spec.curriculum.map((c, i) => (
                <li key={c} className="card-premium p-5 flex items-center gap-4">
                  <span className="h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center font-display font-bold shrink-0">{i + 1}</span>
                  <span className="font-semibold">{c}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="font-display text-3xl font-extrabold mb-6">Career paths</h2>
          <div className="flex flex-wrap gap-3">
            {spec.career.map((c) => (
              <span key={c} className="px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-md">{c}</span>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
