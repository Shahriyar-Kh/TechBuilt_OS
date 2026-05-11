import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Star, Users, GraduationCap, Trophy,
  CheckCircle2, Quote, Code2, Database, Zap, ShieldCheck,
  Rocket, Play, BookOpen, TrendingUp, Award
} from "lucide-react";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CourseCard from "@/components/CourseCard";
import SpecializationCard from "@/components/SpecializationCard";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { StatCounter } from "@/components/StatCounter";
import { courses, specializations, testimonials, faqs, blogPosts } from "@/lib/data";
import HeroCarousel from "@/components/HeroCarousel";

const features = [
  { icon: Code2, title: "Project-based learning", desc: "Build a portfolio of real, deployable projects you can show employers from day one." },
  { icon: Users, title: "1:1 live mentorship", desc: "Weekly sessions with senior engineers who've shipped real products at top companies." },
  { icon: Rocket, title: "Career-ready outcomes", desc: "Resume reviews, mock interviews, and direct access to our hiring partner network." },
  { icon: ShieldCheck, title: "Verified certificates", desc: "Industry-recognized credentials shareable on LinkedIn and with potential employers." },
  { icon: Database, title: "In-browser coding labs", desc: "Hands-on exercises with instant feedback so you learn entirely by building." },
  { icon: Zap, title: "Lifetime access", desc: "Pay once, keep forever. Free curriculum updates as the industry evolves." },
];

const companies = ["Stripe", "Shopify", "Atlassian", "GitHub", "Vercel", "Linear", "Notion", "Figma"];

export default function Home() {
  return (
    <>
      <SEO
        title="TechBuilt OS — TechBuilt Open School | Job-Ready Tech Skills"
        description="TechBuilt OS (TechBuilt Open School) delivers job-ready tech skills through low-cost single courses and industry-level specializations in HTML, CSS, JavaScript, React, Python, Django and more. Join 12,400+ students."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "TechBuilt OS — TechBuilt Open School",
          alternateName: "TechBuilt Open School",
          description: "Open school providing job-ready tech skills via single courses and industry-level specializations.",
          url: typeof window !== "undefined" ? window.location.origin : "",
          sameAs: ["https://twitter.com/techbuiltos"],
        }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" aria-label="Hero section">
        <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
        <div className="absolute inset-0 dots-pattern opacity-60" aria-hidden="true" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl animate-blob" aria-hidden="true" />
        <div className="absolute top-20 -right-40 h-[400px] w-[400px] rounded-full bg-highlight/12 blur-3xl animate-blob" style={{ animationDelay: "5s" }} aria-hidden="true" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-blob" style={{ animationDelay: "10s" }} aria-hidden="true" />

        <div className="container relative pt-10 pb-20 lg:pt-16 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="hero-tag w-fit">
                  <Sparkles className="h-3.5 w-3.5 text-highlight" aria-hidden="true" />
                  <span className="text-sm font-semibold">TechBuilt Open School</span>
                  <span className="text-xs text-muted-foreground border-l border-border pl-2 ml-0.5">Spring intake now open</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 }}
                className="font-display font-extrabold text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.04] tracking-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                Job-ready tech skills for{" "}
                <span className="text-gradient">industry-level</span>{" "}
                careers.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                <strong className="text-foreground font-semibold">TechBuilt Open School</strong> offers low-cost single courses and full specializations taught by senior engineers — with live mentors, real projects, and career support to your first role.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.24 }}
                className="flex flex-wrap gap-3"
              >
                <Button asChild size="lg" className="btn-primary-glow h-12 px-7 text-base rounded-xl font-semibold">
                  <Link to="/specializations">
                    Explore specializations <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base rounded-xl border-2 font-semibold">
                  <Link to="/courses">
                    <Play className="mr-2 h-4 w-4 fill-current" aria-hidden="true" /> Browse courses
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.38 }}
                className="flex flex-wrap items-center gap-6 pt-2"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {testimonials.map((t) => (
                      <img
                        key={t.name}
                        src={t.image}
                        alt={`${t.name}, TechBuilt OS student`}
                        className="h-10 w-10 rounded-full border-2 border-background object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-highlight text-highlight" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">12,400+ students</span> learning with us
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground border-l border-border pl-6">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  14-day money-back guarantee
                </div>
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18 }}
              className="lg:col-span-5 relative"
            >
              <HeroCarousel />

              {/* Floating card — placement */}
              <motion.div
                initial={{ opacity: 0, x: -24, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="absolute -left-4 lg:-left-8 top-10 glass rounded-2xl p-3.5 shadow-premium-lg border border-border/60 animate-float"
                aria-label="Student placement example"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl grid place-items-center shrink-0"
                    style={{ background: 'var(--gradient-highlight)' }}>
                    <Trophy className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground leading-none mb-0.5">Just placed</p>
                    <p className="text-sm font-bold leading-none">Sara → Stripe 🎉</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — project */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: -16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="absolute -right-3 lg:-right-5 bottom-8 glass rounded-2xl p-3.5 shadow-premium-lg border border-border/60 animate-float"
                style={{ animationDelay: "2.5s" }}
                aria-label="Project completion example"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl grid place-items-center shrink-0"
                    style={{ background: 'var(--gradient-accent)' }}>
                    <CheckCircle2 className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground leading-none mb-0.5">Project shipped</p>
                    <p className="text-sm font-bold leading-none">React e-commerce app</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Company logos */}
          <Reveal delay={0.35} className="mt-20">
            <p className="text-center text-[11px] uppercase tracking-[0.22em] font-bold text-muted-foreground mb-6">
              Our graduates work at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {companies.map((name) => (
                <span
                  key={name}
                  className="font-display text-xl md:text-2xl font-bold text-foreground/30 hover:text-foreground/60 transition-colors duration-200 select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────────────────── */}
      <section className="container -mt-8 relative z-10" aria-label="Key statistics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {[
            { icon: <Users className="h-5 w-5 text-primary" />, value: "12,400+", label: "Students enrolled" },
            { icon: <GraduationCap className="h-5 w-5 text-primary" />, value: "94%", label: "Completion rate" },
            { icon: <Trophy className="h-5 w-5 text-primary" />, value: "78%", label: "Hired in 6 months" },
            { icon: <Star className="h-5 w-5 text-primary" />, value: "4.9", label: "Average rating" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <StatCounter value={s.value} label={s.label} icon={s.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── WHY TECHBUILT ─────────────────────────────────────────────────── */}
      <section className="section container" aria-labelledby="features-heading">
        <SectionHeading
          eyebrow="Why TechBuilt OS"
          title={<>Everything you need to <span className="text-gradient">go from zero to hired</span>.</>}
          description="We built the learning experience we wish we had — premium content, real mentors, genuine projects, and career support all the way."
          className="mb-14"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <article className="card-premium p-7 h-full group">
                <div className="icon-box mb-5 group-hover:scale-105 transition-transform duration-300">
                  <f.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── SPECIALIZATIONS ───────────────────────────────────────────────── */}
      <section className="section bg-secondary/50 border-y border-border" aria-labelledby="specializations-heading">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <p className="eyebrow mb-3">Specializations</p>
              <h2 id="specializations-heading" className="font-display font-bold text-4xl md:text-5xl max-w-lg leading-tight tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                Career tracks that get you <span className="text-gradient-accent">hired</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="outline" size="lg" className="border-2 rounded-xl font-semibold">
                <Link to="/specializations">View all tracks <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
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

      {/* ─── COURSES ───────────────────────────────────────────────────────── */}
      <section className="section container" aria-labelledby="courses-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="eyebrow mb-3">Single Courses</p>
            <h2 id="courses-heading" className="font-display font-bold text-4xl md:text-5xl max-w-lg leading-tight tracking-tight" style={{ letterSpacing: '-0.03em' }}>
              Master one skill at a time.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outline" size="lg" className="border-2 rounded-xl font-semibold">
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

      {/* ─── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="section bg-secondary/50 border-y border-border" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Loved by learners"
            title={<>Real students. <span className="text-gradient">Real outcomes.</span></>}
            description="Don't take our word for it. Here's what our graduates are saying."
            className="mb-14"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.09}>
                <article className="card-premium p-7 h-full flex flex-col group">
                  <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} star rating`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-highlight text-highlight" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-primary/15 mb-3 rotate-180" aria-hidden="true" />
                  <blockquote className="text-foreground/85 leading-relaxed flex-1 text-[15px]">
                    "{t.text}"
                  </blockquote>
                  <footer className="flex items-center gap-3 mt-6 pt-5 border-t border-border/70">
                    <img
                      src={t.image}
                      alt={`${t.name} — ${t.role}`}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-border"
                      loading="lazy"
                    />
                    <div>
                      <cite className="not-italic font-semibold text-sm font-display">{t.name}</cite>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="text-center mt-10">
            <Button asChild variant="outline" className="border-2 rounded-xl font-semibold">
              <Link to="/testimonials">Read all stories <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ─── PRICING TEASER ────────────────────────────────────────────────── */}
      <section className="section container" aria-labelledby="pricing-heading">
        <SectionHeading
          eyebrow="Simple pricing"
          title={<>Invest in your <span className="text-gradient">future</span>.</>}
          description="Pay once, learn forever. No subscriptions, no surprises."
          className="mb-12"
        />
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            {
              name: "Single Course",
              price: "$49",
              suffix: "+",
              desc: "Master a single skill at your pace",
              features: ["Lifetime access", "Verified certificate", "Community access", "14-day refund"],
              cta: "Browse courses",
              to: "/courses",
              featured: false,
            },
            {
              name: "Specialization",
              price: "$329",
              suffix: "+",
              desc: "Complete career-ready learning track",
              features: ["3–7 bundled courses", "1:1 live mentorship", "Capstone project", "Career & job support", "Installments available"],
              cta: "View tracks",
              to: "/specializations",
              featured: true,
            },
            {
              name: "Teams",
              price: "Custom",
              suffix: "",
              desc: "Train your engineering team",
              features: ["Bulk licensing", "Custom curriculum", "Dedicated support", "Team dashboard"],
              cta: "Contact sales",
              to: "/contact",
              featured: false,
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${p.featured ? 'pricing-featured hover:shadow-premium-xl' : 'card-premium'}`}
              >
                {p.featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-highlight-glow"
                    style={{ background: 'var(--gradient-highlight)', color: 'hsl(var(--highlight-foreground))' }}
                  >
                    <Sparkles className="h-3 w-3" aria-hidden="true" /> MOST POPULAR
                  </div>
                )}
                <p className={`font-display font-bold text-base ${p.featured ? 'text-white/80' : 'text-muted-foreground'}`}>{p.name}</p>
                <p className={`text-sm mt-0.5 mb-4 ${p.featured ? 'text-white/60' : 'text-muted-foreground'}`}>{p.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`font-display font-extrabold text-4xl tracking-tight ${p.featured ? 'text-white' : ''}`} style={{ letterSpacing: '-0.04em' }}>
                    {p.price}
                  </span>
                  <span className={`font-semibold ${p.featured ? 'text-white/60' : 'text-muted-foreground'}`}>{p.suffix}</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? 'text-white/80' : 'text-accent'}`} aria-hidden="true" />
                      <span className={p.featured ? 'text-white/85' : ''}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-xl font-semibold ${p.featured ? 'bg-white text-primary hover:bg-white/90 shadow-md' : 'border-2'}`}
                  variant={p.featured ? "default" : "outline"}
                >
                  <Link to={p.to}>{p.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.25} className="text-center mt-8">
          <Button asChild variant="link" className="text-muted-foreground hover:text-primary">
            <Link to="/pricing">See full pricing details →</Link>
          </Button>
        </Reveal>
      </section>

      {/* ─── BLOG PREVIEW ──────────────────────────────────────────────────── */}
      <section className="section bg-secondary/50 border-y border-border" aria-labelledby="blog-heading">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <p className="eyebrow mb-3">From the blog</p>
              <h2 id="blog-heading" className="font-display font-bold text-4xl md:text-5xl max-w-lg leading-tight tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                Free guides & resources.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="outline" size="lg" className="border-2 rounded-xl font-semibold">
                <Link to="/blog">All articles <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to="/blog" className="card-premium overflow-hidden group block h-full">
                  <div className="aspect-[16/10] overflow-hidden relative bg-secondary">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="badge-primary">{p.category}</span>
                      <span>{p.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{p.readTime} read</span>
                    </div>
                    <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors leading-snug tracking-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                      Read article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section container" aria-labelledby="faq-heading">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-3">FAQ</p>
              <h2 id="faq-heading" className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                Questions?<br />We've got <span className="text-gradient">answers</span>.
              </h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Can't find what you're looking for? Our team replies within an hour.
              </p>
              <div className="mt-6 space-y-3">
                <Button asChild className="btn-primary-glow rounded-xl font-semibold">
                  <Link to="/contact">Contact us <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                  Team online now · Avg. 47min response
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="card-premium px-6 border-0 hover:shadow-premium transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5 text-[15px] tracking-tight">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-4 text-center">
                <Button asChild variant="link" className="text-muted-foreground hover:text-primary">
                  <Link to="/faq">View all FAQs →</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
      <CTABand
        eyebrow="Ready to start?"
        title="Your tech career starts today."
        description="Join 12,400+ learners building real careers with TechBuilt OS. 14-day money-back guarantee — no risk."
        primaryCta={{ label: "Apply now", to: "/apply" }}
        secondaryCta={{ label: "Browse specializations", to: "/specializations" }}
        variant="dark"
      />
    </>
  );
}