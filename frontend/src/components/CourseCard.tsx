import { Link } from "react-router-dom";
import { Course } from "@/lib/data";
import { Clock, BookOpen, ArrowUpRight, ChevronRight } from "lucide-react";

const levelColors = {
  Beginner: "badge-accent",
  Intermediate: "badge-primary",
  Advanced: "text-xs font-semibold px-2.5 py-1 rounded-full bg-highlight/10 text-highlight-foreground border border-highlight/20",
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group card-premium p-6 flex flex-col h-full relative overflow-hidden"
      aria-label={`${course.title} - ${course.level} level course`}
    >
      {/* Decorative gradient orb */}
      <div
        className={`absolute -top-14 -right-14 h-36 w-36 rounded-full bg-gradient-to-br ${course.color} opacity-8 group-hover:opacity-[0.15] transition-all duration-500`}
        aria-hidden="true"
      />

      {/* Course icon */}
      <div
        className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${course.color} text-white text-xl grid place-items-center shadow-md mb-5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg`}
        aria-hidden="true"
      >
        {course.icon}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 flex-wrap mb-2.5">
        <span className={levelColors[course.level] || "badge-primary"}>
          {course.level}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {course.duration}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <BookOpen className="h-3 w-3" />
          {course.lessons} lessons
        </span>
      </div>

      {/* Title & tagline */}
      <h3 className="font-display font-bold text-lg mb-1.5 leading-snug tracking-tight group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
        {course.tagline}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/70">
        <span className="font-display font-bold text-xl tracking-tight">
          {course.price}
        </span>
        <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all duration-200">
          Explore <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}