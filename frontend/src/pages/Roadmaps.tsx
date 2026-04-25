import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { roadmaps } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function Roadmaps() {
  return (
    <>
      <SEO
        title="Learning Roadmaps — Step-by-Step Paths for Web Developers | TechBuilt OS"
        description="Clear, week-by-week roadmaps to become a frontend, backend or full-stack developer. Built by senior engineers."
      />
      <PageHero
        eyebrow="Roadmaps"
        title={<>Your <span className="text-gradient">step-by-step path</span> from beginner to hired.</>}
        description="No more guessing what to learn next. Our roadmaps lay out exactly what to study, in what order, and for how long."
      />

      <section className="container py-16 space-y-20 pb-24">
        {roadmaps.map((r, idx) => (
          <Reveal key={r.title}>
            <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Roadmap {idx + 1}</p>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold">{r.title}</h2>
              </div>
              <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${r.color} text-white font-semibold text-sm shadow-md`}>
                {r.steps.length} stages · ~{r.steps.reduce((a) => a + 6, 0)} weeks
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent md:-translate-x-px" />
              <div className="space-y-8">
                {r.steps.map((s, i) => (
                  <div key={s.title} className={`relative grid md:grid-cols-2 gap-6 items-start ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`md:${i % 2 === 1 ? "text-left pl-12" : "text-right pr-12"} pl-16 md:pl-0`}>
                      <div className="card-premium p-6 inline-block text-left max-w-md">
                        <p className="text-xs font-semibold text-primary mb-2">{s.weeks}</p>
                        <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10">
                      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${r.color} text-white grid place-items-center font-display font-bold shadow-lg ring-4 ring-background`}>
                        {i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
