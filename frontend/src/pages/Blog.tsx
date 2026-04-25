import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog & Resources — Free Tech Tutorials & Career Guides | TechBuilt OS"
        description="Free articles, roadmaps, comparisons and career advice for aspiring web developers. Updated weekly."
      />
      <PageHero
        eyebrow="Blog & resources"
        title={<>Free <span className="text-gradient">guides</span>, roadmaps and career advice.</>}
        description="Practical, no-fluff articles written by senior engineers. Updated weekly."
      />

      <section className="container py-12 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <a href="#" className="card-premium overflow-hidden group block h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{p.category}</span>
                    <span>{p.date}</span>·<span>{p.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-xl group-hover:text-primary transition-colors leading-snug">{p.title}</h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
