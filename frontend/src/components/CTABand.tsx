import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  variant?: "dark" | "accent" | "soft";
};

export default function CTABand({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Apply now", to: "/apply" },
  secondaryCta,
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  const isAccent = variant === "accent";

  return (
    <div className="container pb-20">
      <Reveal>
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center noise-overlay"
          style={{
            background: isDark
              ? 'var(--gradient-hero)'
              : isAccent
              ? 'var(--gradient-accent)'
              : 'linear-gradient(135deg, hsl(220 28% 97%), hsl(220 24% 94%))',
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden="true" />
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
            style={{ background: 'hsl(230 80% 52% / 0.2)' }}
            aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl"
            style={{ background: 'hsl(38 100% 54% / 0.15)' }}
            aria-hidden="true" />

          <div className="relative max-w-2xl mx-auto">
            {eyebrow && (
              <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${isDark ? 'text-white/60' : isAccent ? 'text-white/70' : 'text-primary/70'}`}>
                {eyebrow}
              </p>
            )}
            <h2
              className={`font-display font-extrabold text-3xl md:text-5xl leading-tight tracking-tight ${isDark || isAccent ? 'text-white' : 'text-foreground'}`}
              style={{ letterSpacing: '-0.03em' }}
            >
              {title}
            </h2>
            {description && (
              <p className={`mt-4 text-base md:text-lg leading-relaxed ${isDark ? 'text-white/70' : isAccent ? 'text-white/80' : 'text-muted-foreground'}`}>
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 text-base font-semibold rounded-xl shadow-highlight-glow hover:-translate-y-0.5 transition-all"
                style={{ background: 'var(--gradient-highlight)', color: 'hsl(var(--highlight-foreground))' }}
              >
                <Link to={primaryCta.to}>
                  {primaryCta.label} <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={`h-12 px-7 text-base rounded-xl border-2 ${isDark || isAccent ? 'bg-transparent border-white/25 text-white hover:bg-white/10 hover:text-white hover:border-white/40' : ''}`}
                >
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}