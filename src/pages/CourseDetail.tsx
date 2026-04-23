import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/data";
import { Clock, BookOpen, Award, CheckCircle2, ArrowRight, ChevronRight, PlayCircle } from "lucide-react";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  if (!course) return <Navigate to="/courses" replace />;

  return (
    <>
      <SEO
        title={`${course.title} Course — Learn ${course.title} | TechBuilt OS`}
        description={course.description}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: { "@type": "Organization", name: "TechBuilt OS" },
        }}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container relative py-14 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/courses" className="hover:text-primary">Courses</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{course.title}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">{course.level}</span>
                <span className="px-3 py-1 rounded-full bg-secondary font-medium">{course.duration}</span>
                <span className="px-3 py-1 rounded-full bg-secondary font-medium">{course.lessons} lessons</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">{course.title}</h1>
              <p className="text-xl text-muted-foreground">{course.tagline}</p>
              <p className="text-foreground/85 leading-relaxed max-w-2xl">{course.description}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="card-premium p-7 sticky top-28">
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${course.color} grid place-items-center text-6xl mb-5`}>
                  {course.icon}
                </div>
                <div className="font-display text-4xl font-extrabold mb-1">{course.price}</div>
                <p className="text-sm text-muted-foreground mb-5">One-time payment. Lifetime access.</p>
                <Button asChild className="w-full bg-gradient-primary shadow-glow h-12 text-base">
                  <Link to="/apply">Enroll now <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="w-full mt-2 h-12">
                  <Link to="/contact">Ask a question</Link>
                </Button>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex gap-2"><BookOpen className="h-4 w-4 text-primary mt-0.5" /> {course.lessons} on-demand lessons</li>
                  <li className="flex gap-2"><Clock className="h-4 w-4 text-primary mt-0.5" /> {course.duration} self-paced</li>
                  <li className="flex gap-2"><Award className="h-4 w-4 text-primary mt-0.5" /> Verified certificate</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> 14-day refund</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold mb-6">What you'll learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5 p-4 rounded-xl bg-secondary/50">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-medium">{o}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl font-extrabold mb-6">Curriculum</h2>
              <div className="space-y-3">
                {course.modules.map((m, i) => (
                  <div key={m.title} className="card-premium p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display font-bold text-lg">Module {i + 1}: {m.title}</h3>
                      <span className="text-xs text-muted-foreground">{m.lessons.length} lessons</span>
                    </div>
                    <ul className="space-y-2">
                      {m.lessons.map((l) => (
                        <li key={l} className="flex items-center gap-3 text-sm text-foreground/80 py-1">
                          <PlayCircle className="h-4 w-4 text-primary" /> {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <Reveal>
              <div className="card-premium p-6">
                <h3 className="font-display font-bold mb-4">Related courses</h3>
                <ul className="space-y-3">
                  {courses.filter(c => c.slug !== course.slug).slice(0, 4).map((c) => (
                    <li key={c.slug}>
                      <Link to={`/courses/${c.slug}`} className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-secondary transition-colors">
                        <span className={`h-9 w-9 rounded-lg bg-gradient-to-br ${c.color} grid place-items-center text-white`}>{c.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{c.title}</p>
                          <p className="text-xs text-muted-foreground">{c.price}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
