import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  centered?: boolean;
  size?: "default" | "lg";
};

export default function PageHero({ eyebrow, title, description, children, centered = false, size = "default" }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-bg" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden="true" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/8 blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-highlight/10 blur-3xl animate-blob" style={{ animationDelay: '5s' }} aria-hidden="true" />

      <div className={`container relative ${size === "lg" ? "py-20 md:py-28" : "py-14 md:py-20"}`}>
        <Reveal className={centered ? "text-center max-w-3xl mx-auto" : "max-w-4xl"}>
          {eyebrow && (
            <p className="eyebrow mb-3">{eyebrow}</p>
          )}
          <h1 className={`font-display font-extrabold leading-[1.06] tracking-tight ${size === "lg" ? "text-5xl md:text-7xl" : "text-4xl md:text-6xl"}`}>
            {title}
          </h1>
          {description && (
            <p className={`text-muted-foreground mt-5 leading-relaxed ${size === "lg" ? "text-xl max-w-2xl" : "text-lg max-w-2xl"} ${centered ? "mx-auto" : ""}`}>
              {description}
            </p>
          )}
          {children && (
            <div className="mt-7">{children}</div>
          )}
        </Reveal>
      </div>
    </section>
  );
}