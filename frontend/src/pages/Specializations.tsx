import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SpecializationCard from "@/components/SpecializationCard";
import { specializations } from "@/lib/data";

export default function Specializations() {
  return (
    <>
      <SEO
        title="Specializations — Career Tracks in Frontend, Backend & Full Stack | TechBuilt OS"
        description="Comprehensive career tracks: Frontend, Backend, Full Stack Web Development and Python Programming. Bundled courses, mentorship and job support."
      />
      <PageHero
        eyebrow="Specializations"
        title={<>Career tracks that get you <span className="text-gradient-accent">hired</span>.</>}
        description="Each specialization bundles multiple courses with 1:1 mentorship, live sessions, capstone projects and dedicated career support."
      />

      <section className="container py-12 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {specializations.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <SpecializationCard spec={s} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
