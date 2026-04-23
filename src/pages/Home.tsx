import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Users, GraduationCap, Trophy, CheckCircle2, Quote, Code2, Database, Zap, ShieldCheck, Rocket, Play } from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CourseCard from "@/components/CourseCard";
import SpecializationCard from "@/components/SpecializationCard";
import { courses, specializations, testimonials, faqs, blogPosts } from "@/lib/data";
import heroImg from "@/assets/hero-main.jpg";

const stats = [
  { icon: Users, value: "12,400+", label: "Students enrolled" },
  { icon: GraduationCap, value: "94%", label: "Completion rate" },
  { icon: Trophy, value: "78%", label: "Hired in 6 months" },
  { icon: Star, value: "4.9/5", label: "Average rating" },
];

const features = [
  { icon: Code2, title: "Project-based learning", desc: "Build a portfolio of real projects you can show employers from day one." },
  { icon: Users, title: "1:1 mentorship", desc: "Weekly live sessions with industry mentors who've shipped real products." },
  { icon: Rocket, title: "Career-ready outcomes", desc: "Resume reviews, mock interviews and access to our hiring partner network." },
  { icon: ShieldCheck, title: "Verified certificates", desc: "Industry-recognized certificates verified on-chain and shareable on LinkedIn." },
  { icon: Database, title: "Hands-on labs", desc: "In-browser coding labs with instant feedback so you learn by doing." },
  { icon: Zap, title: "Lifetime access", desc: "Pay once, learn forever. Free updates as the curriculum evolves." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="TechBuilt OS — Premium Tech Education & Coding Specializations"
        description="Become a job-ready developer with TechBuilt OS. Learn HTML, CSS, JavaScript, React, Python, Django and more through expert-led courses and full-stack specializations."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "TechBuilt OS",
          url: typeof window !== "undefined" ? window.location.origin : "",
          sameAs: ["https://twitter.com/techbuiltos", "https://github.com/techbuiltos"],
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="container relative pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-border/60 text-sm shadow-premium"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="font-medium">Spring intake now open</span>
                <span className="text-muted-foreground">— save 30% on specializations</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
              >
                The operating system for{" "}
                <span className="text-gradient">tech careers</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                Premium courses and specializations in frontend, backend and full-stack development —
                designed by senior engineers, mentored live, and built to ship you into a real tech role.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95 h-12 px-7 text-base">
                  <Link to="/specializations">
                    Explore specializations <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base border-2">
                  <Link to="/courses">
                    <Play className="mr-2 h-4 w-4" /> Browse courses
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <div className="flex -space-x-2">
                  {testimonials.map((t) => (
                    <img key={t.name} src={t.image} alt={t.name} className="h-10 w-10 rounded-full border-2 border-background object-cover" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">12,400+ students</span> learning with us</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-border/60">
                <img src={heroImg} alt="Students learning to code" className="w-full h-auto" width={1920} height={1080} />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
              </div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -left-4 lg:-left-8 top-12 glass rounded-2xl p-4 shadow-premium-lg border border-border/60 animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-accent grid place-items-center">
                    <Trophy className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Just placed</p>
                    <p className="text-sm font-semibold">Sara → Stripe 🎉</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute -right-3 lg:-right-6 bottom-10 glass rounded-2xl p-4 shadow-premium-lg border border-border/60 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Project shipped</p>
                    <p className="text-sm font-semibold">React e-commerce app</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Trust badges */}
          <Reveal delay={0.3} className="mt-20">
            <p className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-6">
              Our graduates work at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-70">
              {["Stripe", "Shopify", "Atlassian", "GitHub", "Vercel", "Linear", "Notion"].map((name) => (
                <span key={name} className="font-display text-xl md:text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="container -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-premium p-6 text-center">
                <div className="h-11 w-11 mx-auto rounded-xl bg-primary/10 grid place-items-center mb-3">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-3xl font-extrabold">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why TechBuilt OS</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
            Everything you need to <span className="text-gradient">go from zero to hired</span>.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            We built the learning experience we wish we had — premium content, real mentors, real projects, real outcomes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card-premium p-7 h-full">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow mb-5">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="section bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Specializations</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold max-w-xl leading-tight">
                Career tracks that get you <span className="text-gradient-accent">hired</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link to="/specializations">View all <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <SpecializationCard spec={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="section container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Single courses</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold max-w-xl leading-tight">
              Master one skill at a time.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link to="/courses">All courses <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.slice(0, 8).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-secondary/40 border-y border-border">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Loved by learners</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
              Real students. <span className="text-gradient">Real outcomes.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="card-premium p-7 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-foreground/85 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                    <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Simple pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
            Invest in your future.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Pay once, learn forever. Or join a specialization and unlock everything.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { name: "Single Course", price: "$49+", desc: "Master a single skill", features: ["Lifetime access", "Certificate", "Community access"], cta: "Browse courses", to: "/courses", featured: false },
            { name: "Specialization", price: "$329+", desc: "Career-ready track", features: ["3–7 courses bundled", "1:1 mentorship", "Job support", "Capstone project"], cta: "View tracks", to: "/specializations", featured: true },
            { name: "Teams", price: "Custom", desc: "Train your team", features: ["Bulk licensing", "Custom curriculum", "Dedicated support"], cta: "Contact sales", to: "/contact", featured: false },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={`relative card-premium p-8 h-full ${p.featured ? "border-primary/40 shadow-glow" : ""}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold shadow-accent-glow">
                    MOST POPULAR
                  </div>
                )}
                <p className="text-sm font-semibold text-muted-foreground">{p.name}</p>
                <div className="mt-2 mb-1 flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl">{p.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={p.featured ? "w-full bg-gradient-primary shadow-glow" : "w-full"} variant={p.featured ? "default" : "outline"}>
                  <Link to={p.to}>{p.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">From the blog</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold max-w-xl leading-tight">
                Free guides & resources.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link to="/blog">All articles <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to="/blog" className="card-premium overflow-hidden group block h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{p.category}</span>
                      <span>{p.date}</span>·<span>{p.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">FAQ</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">
                Questions? <br />We've got <span className="text-gradient">answers</span>.
              </h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Can't find what you're looking for? Our team is one click away — we typically respond within an hour.
              </p>
              <Button asChild className="mt-6 bg-gradient-primary shadow-glow">
                <Link to="/contact">Contact us</Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="card-premium px-6 border-0">
                    <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-20">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-10 md:p-16 text-center shadow-premium-lg">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight max-w-3xl mx-auto">
                Your tech career starts <span className="text-gradient-accent">today</span>.
              </h2>
              <p className="text-primary-foreground/80 mt-5 text-lg max-w-2xl mx-auto">
                Join 12,000+ learners building real careers with TechBuilt OS. 14-day money-back guarantee.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-95 shadow-accent-glow h-12 px-7 text-base font-semibold">
                  <Link to="/apply">Apply now <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground h-12 px-7 text-base">
                  <Link to="/specializations">Browse tracks</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
