import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Compass, Sparkles, Award, Users, ArrowRight } from "lucide-react";

const values = [
  { icon: Users, title: "Student-first always", desc: "Every decision starts with: 'does this make our students more successful?'" },
  { icon: Compass, title: "Real-world relevance", desc: "We teach what actually ships — not what looks good on a syllabus." },
  { icon: Sparkles, title: "Craft & quality", desc: "Premium production, beautifully designed lessons, no filler content." },
  { icon: Award, title: "Outcomes over hype", desc: "We measure success by careers transformed, not just enrollments." },
];

const team = [
  { name: "Alex Rivera", role: "Founder & Head of Curriculum", initials: "AR" },
  { name: "Maya Chen", role: "Lead Frontend Mentor", initials: "MC" },
  { name: "Daniel Okafor", role: "Lead Backend Mentor", initials: "DO" },
  { name: "Priya Shah", role: "Career Success Lead", initials: "PS" },
];

export default function About() {
  return (
    <>
      <SEO
        title="About TechBuilt OS — TechBuilt Open School for Job-Ready Tech Skills"
        description="TechBuilt OS stands for TechBuilt Open School — an open school providing job-ready tech skills through low-cost single courses and industry-level specializations."
      />
      <PageHero
        eyebrow="About us"
        title={<>An <span className="text-gradient">open school</span> for job-ready tech skills.</>}
        description="TechBuilt OS — short for TechBuilt Open School — was founded by senior engineers and educators to make industry-level tech training affordable, structured, and outcomes-driven for everyone."
      />

      <section className="section container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our mission</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Make industry-level tech skills <span className="text-gradient-accent">accessible to anyone</span>.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>TechBuilt OS — <strong className="text-foreground">TechBuilt Open School</strong> — was started in 2021 to close a real gap: massive online courses lacked structure and mentorship, while bootcamps were unaffordable for most learners.</p>
              <p>So we built an open school. Low-cost single courses for one skill at a time, and full specializations that prepare you for real industry jobs and opportunities — with live mentors, real projects, and career support all the way to your first offer.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12,400+", label: "Students" },
                { value: "78%", label: "Hired in 6 mo" },
                { value: "4.9★", label: "Avg rating" },
                { value: "94%", label: "Completion" },
              ].map((s) => (
                <div key={s.label} className="card-premium p-7 text-center">
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-secondary/40 border-y border-border">
        <div className="container">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our values</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">What we stand for.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card-premium p-7 h-full">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow mb-5">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">The team</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">Built by engineers and educators.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="card-premium p-7 text-center">
                <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold text-2xl grid place-items-center shadow-glow mb-4">
                  {m.initials}
                </div>
                <h3 className="font-display font-bold">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-14 text-center text-primary-foreground relative overflow-hidden shadow-premium-lg">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold">Ready to start your journey?</h2>
            <p className="mt-4 text-primary-foreground/80">Browse our specializations or talk to our team — we'll help you find the perfect path.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent-glow">
                <Link to="/specializations">View specializations <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
