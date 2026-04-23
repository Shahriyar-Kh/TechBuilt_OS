import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container relative py-16 md:py-24">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground mt-5 max-w-2xl leading-relaxed">{description}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
