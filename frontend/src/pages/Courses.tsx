import { useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";
import { Search } from "lucide-react";

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const filtered = courses.filter(
    (c) =>
      (filter === "All" || c.level === filter) &&
      (q === "" || c.title.toLowerCase().includes(q.toLowerCase()) || c.tagline.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <SEO
        title="Tech Courses — HTML, CSS, JavaScript, React, Python & More | TechBuilt OS"
        description="Browse premium single courses on HTML, CSS, JavaScript, Bootstrap, React, Vue, Python and Django. Project-based, mentor-led learning."
      />
      <PageHero
        eyebrow="Single courses"
        title={<>Master <span className="text-gradient">one skill</span> at a time.</>}
        description="Hand-crafted courses on the technologies that power the modern web. Buy individually or save with a specialization."
      />

      <section className="container py-10">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses..."
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setFilter(l)}
                className={`px-4 h-10 rounded-xl text-sm font-medium border transition-all ${
                  filter === l
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
          {filtered.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No courses found.</p>
        )}
      </section>
    </>
  );
}
