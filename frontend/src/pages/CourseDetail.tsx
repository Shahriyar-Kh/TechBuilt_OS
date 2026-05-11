import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courses, faqs } from "@/lib/data";
import {
  Clock, BookOpen, Award, CheckCircle2, ArrowRight,
  ChevronRight, PlayCircle, Users, Briefcase, ChevronDown, Star
} from "lucide-react";

const whoItIsFor = {
  html: ["Complete beginners starting their web journey", "Designers wanting to understand code", "Anyone who needs solid fundamentals"],
  css: ["Developers who know HTML but struggle with design", "Beginners ready for their second step", "Designers learning to implement their own layouts"],
  javascript: ["HTML/CSS developers ready to add interactivity", "Career switchers with some coding basics", "Anyone wanting to understand modern web development"],
  bootstrap: ["Developers who want to build UIs faster", "Beginners ready to ship professional-looking sites", "Students learning rapid prototyping"],
  react: ["JavaScript developers ready for modern frameworks", "Frontend developers wanting to level up", "Anyone targeting React job roles"],
  vue: ["JavaScript developers exploring Vue's ecosystem", "Developers comparing frameworks", "Learners targeting Vue-specific job markets"],
  python: ["Absolute beginners to programming", "Developers adding Python to their stack", "Anyone preparing for backend or data careers"],
  django: ["Python developers ready for web backends", "Engineers wanting to build APIs", "Developers targeting backend or full-stack roles"],
};

const careerOutcomes = {
  html: ["Frontend Developer", "Web Designer", "Content Developer"],
  css: ["UI Developer", "Frontend Engineer", "Web Designer"],
  javascript: ["JavaScript Developer", "Frontend Engineer", "Full Stack Developer"],
  bootstrap: ["Frontend Developer", "Rapid Prototyper", "Web Developer"],
  react: ["React Developer", "Frontend Engineer", "UI Engineer"],
  vue: ["Vue Developer", "Frontend Developer", "JavaScript Engineer"],
  python: ["Python Developer", "Backend Engineer", "Data Analyst"],
  django: ["Backend Developer", "Django Engineer", "API Developer"],
};

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  if (!course) return <Navigate to="/courses" replace />;

  const related = courses.filter((c) => c.slug !== slug).slice(0, 4);
  const targets = whoItIsFor[slug as keyof typeof whoItIsFor] || [];
  const careers = careerOutcomes[slug as keyof typeof careerOutcomes] || [];
  const courseFaqs = faqs.slice(0, 4);

  return (
    <>
      <SEO
        title={`${course.title} Course — Learn ${course.title} Online | TechBuilt OS`}
        description={`${course.description} ${course.lessons} lessons, ${course.duration}. Beginner-friendly. Includes certificate. Start today for ${course.price}.`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: { "@type": "Organization", name: "TechBuilt OS" },
          offers: {
            "@type": "Offer",
            price: course.price.replace("$", ""),
            priceCurrency: "USD",
          },
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b border-border" aria-label="Course overview">
        <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

        <div className="container relative py-12 md:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">{course.title}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Main content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-primary">{course.level}</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                  <Clock className="h-3 w-3" aria-hidden="true" /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                  <BookOpen className="h-3 w-3" aria-hidden="true" /> {course.lessons} lessons
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                  <Star className="h-3 w-3 fill-highlight text-highlight" aria-hidden="true" /> 4.9 rating
                </span>
              </div>

              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground font-medium">{course.tagline}</p>
              <p className="text-[15px] text-foreground/80 leading-relaxed max-w-2xl">{course.description}</p>

              {/* Social proof */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-highlight text-highlight" aria-hidden="true" />)}
                  <span className="ml-1 font-semibold">4.9</span>
                  <span className="text-muted-foreground">(284 ratings)</span>
                </div>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" aria-hidden="true" /> 1,200+ enrolled
                </span>
              </div>
            </div>

            {/* Sidebar / purchase card */}
            <aside className="lg:col-span-5" aria-label="Course enrollment">
              <div className="card-premium p-7 sticky top-28">
                {/* Preview thumbnail */}
                <div
                  className={`aspect-video rounded-xl bg-gradient-to-br ${course.color} grid place-items-center text-7xl mb-5 relative overflow-hidden`}
                  aria-label={`${course.title} course preview`}
                >
                  <span aria-hidden="true">{course.icon}</span>
                  <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-extrabold text-4xl tracking-tight" style={{ letterSpacing: '-0.04em' }}>
                    {course.price}
                  </span>
                  <span className="text-muted-foreground text-sm">one-time</span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">Lifetime access · Free updates</p>

                <div className="space-y-2.5 mb-5">
                  <Button asChild className="w-full btn-primary-glow h-12 text-base rounded-xl font-semibold">
                    <Link to={`/apply?type=course&slug=${course.slug}`}>
                      Enroll now <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-11 rounded-xl border-2">
                    <Link to="/contact">Ask a question</Link>
                  </Button>
                </div>

                <ul className="space-y-2.5 text-sm border-t border-border pt-5">
                  {[
                    { icon: BookOpen, text: `${course.lessons} on-demand lessons` },
                    { icon: Clock, text: `${course.duration} self-paced` },
                    { icon: Award, text: "Verified certificate included" },
                    { icon: Users, text: "Community access" },
                    { icon: CheckCircle2, text: "14-day money-back guarantee" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 text-foreground/80">
                      <Icon className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="container py-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8 space-y-14">

            {/* What you'll learn */}
            <Reveal>
              <h2 className="font-display font-bold text-3xl mb-6 tracking-tight">What you'll learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/60 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium leading-snug">{o}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Curriculum */}
            <Reveal>
              <h2 className="font-display font-bold text-3xl mb-6 tracking-tight">Course curriculum</h2>
              <p className="text-muted-foreground text-sm mb-5">
                {course.modules.length} modules · {course.lessons} lessons · {course.duration} self-paced
              </p>
              <div className="space-y-3">
                {course.modules.map((m, i) => (
                  <article key={m.title} className="card-premium overflow-hidden">
                    <div className="p-5 border-b border-border/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="step-number text-sm">{i + 1}</span>
                        <h3 className="font-display font-bold text-[15px] tracking-tight">{m.title}</h3>
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full font-medium">
                        {m.lessons.length} lessons
                      </span>
                    </div>
                    <ul className="divide-y divide-border/50">
                      {m.lessons.map((l) => (
                        <li key={l} className="flex items-center gap-3 px-5 py-3 text-sm text-foreground/80 hover:bg-secondary/40 transition-colors">
                          <PlayCircle className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>

            {/* Who this is for */}
            {targets.length > 0 && (
              <Reveal>
                <h2 className="font-display font-bold text-3xl mb-6 tracking-tight">Who this course is for</h2>
                <ul className="space-y-3">
                  {targets.map((t) => (
                    <li key={t} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-[15px]">{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* Career outcomes */}
            {careers.length > 0 && (
              <Reveal>
                <h2 className="font-display font-bold text-3xl mb-6 tracking-tight">Career paths this unlocks</h2>
                <div className="flex flex-wrap gap-3">
                  {careers.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                      style={{ background: 'var(--gradient-primary)', color: 'hsl(var(--primary-foreground))' }}
                    >
                      <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  This course is part of our <Link to="/specializations" className="text-primary hover:underline">specialization tracks</Link> which include career support, mentorship, and hiring partner access.
                </p>
              </Reveal>
            )}

            {/* FAQ */}
            <Reveal>
              <h2 className="font-display font-bold text-3xl mb-6 tracking-tight">Frequently asked questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {courseFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="card-premium px-6 border-0">
                    <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5 text-[15px] tracking-tight">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </main>

          {/* Right sidebar — related */}
          <aside className="lg:col-span-4 space-y-6" aria-label="Related courses">
            <Reveal>
              <div className="card-premium p-6 sticky top-28">
                <h3 className="font-display font-bold text-lg mb-5 tracking-tight">Related courses</h3>
                <ul className="space-y-3">
                  {related.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/courses/${c.slug}`}
                        className="flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-secondary transition-colors group"
                        aria-label={`${c.title} — ${c.level} — ${c.price}`}
                      >
                        <div
                          className={`h-10 w-10 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center text-lg shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}
                          aria-hidden="true"
                        >
                          {c.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate group-hover:text-primary transition-colors">{c.title}</p>
                          <p className="text-xs text-muted-foreground">{c.level} · {c.price}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Save more with a specialization</p>
                  <Button asChild variant="outline" className="w-full border-2 rounded-xl font-semibold">
                    <Link to="/specializations">View tracks <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title={`Ready to master ${course.title}?`}
        description={`Join 1,200+ students already enrolled. Start today for just ${course.price} — lifetime access included.`}
        primaryCta={{ label: `Enroll for ${course.price}`, to: `/apply?type=course&slug=${course.slug}` }}
        secondaryCta={{ label: "Browse all courses", to: "/courses" }}
        variant="dark"
      />
    </>
  );
}