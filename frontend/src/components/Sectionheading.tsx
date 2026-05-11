import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
  delay?: number;
};

export default function SectionHeading({ eyebrow, title, description, centered = true, className, delay = 0 }: Props) {
  return (
    <Reveal delay={delay} className={cn(centered && "text-center", className)}>
      <div className={cn(centered ? "max-w-2xl mx-auto" : "max-w-2xl")}>
        {eyebrow && (
          <p className="eyebrow mb-3">{eyebrow}</p>
        )}
        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight" style={{ letterSpacing: '-0.03em' }}>
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}