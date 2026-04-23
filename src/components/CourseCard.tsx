import { Link } from "react-router-dom";
import { Course } from "@/lib/data";
import { Clock, BookOpen, ArrowUpRight } from "lucide-react";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group card-premium p-6 flex flex-col h-full relative overflow-hidden"
    >
      <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${course.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${course.color} text-white text-2xl grid place-items-center shadow-md mb-5`}>
        {course.icon}
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <span className="px-2 py-0.5 rounded-full bg-secondary font-medium">{course.level}</span>
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
        <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" />{course.lessons} lessons</span>
      </div>
      <h3 className="font-display font-bold text-xl mb-1.5">{course.title}</h3>
      <p className="text-sm text-muted-foreground mb-5 flex-1">{course.tagline}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-display font-bold text-lg">{course.price}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Explore <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
