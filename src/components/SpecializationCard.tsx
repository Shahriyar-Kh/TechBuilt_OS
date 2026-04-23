import { Link } from "react-router-dom";
import { Specialization } from "@/lib/data";
import { Clock, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SpecializationCard({ spec }: { spec: Specialization }) {
  return (
    <Link
      to={`/specializations/${spec.slug}`}
      className="group card-premium overflow-hidden flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-secondary relative">
        <img
          src={spec.image}
          alt={spec.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-semibold">
          Specialization
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold shadow-accent-glow">
          {spec.price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{spec.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{spec.tagline}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{spec.duration}</span>
          <span className="flex items-center gap-1.5"><Layers className="h-3.5 w-3.5" />{spec.courses} courses</span>
        </div>
        <ul className="space-y-2 mb-5">
          {spec.outcomes.slice(0, 3).map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              {o}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
          View specialization <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
