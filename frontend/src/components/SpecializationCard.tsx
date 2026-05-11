import { Link } from "react-router-dom";
import { Specialization } from "@/lib/data";
import { Clock, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SpecializationCard({ spec }: { spec: Specialization }) {
  return (
    <Link
      to={`/specializations/${spec.slug}`}
      className="group card-premium overflow-hidden flex flex-col"
      aria-label={`${spec.title} specialization`}
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-secondary relative">
        <img
          src={spec.image}
          alt={`${spec.title} specialization — students learning`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-foreground shadow-sm">
            Specialization
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="inline-flex px-3 py-1.5 rounded-full text-sm font-bold shadow-md"
            style={{ background: 'var(--gradient-highlight)', color: 'hsl(var(--highlight-foreground))' }}
          >
            {spec.price}
          </span>
        </div>

        {/* Bottom meta */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-white/90 font-medium bg-black/30 backdrop-blur px-2.5 py-1 rounded-full">
            <Clock className="h-3 w-3" />
            {spec.duration}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/90 font-medium bg-black/30 backdrop-blur px-2.5 py-1 rounded-full">
            <Layers className="h-3 w-3" />
            {spec.courses} courses
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl mb-1.5 group-hover:text-primary transition-colors tracking-tight leading-snug">
          {spec.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{spec.tagline}</p>

        {/* Outcomes */}
        <ul className="space-y-2 mb-5 flex-1">
          {spec.outcomes.slice(0, 3).map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              {o}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/70">
          <span className="text-xs text-muted-foreground">Live mentorship included</span>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
            View track <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}