import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
};

function parseNumber(val: string): { num: number; prefix: string; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9,]+\.?[0-9]*)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1] || "",
    num: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3] || "",
  };
}

export function StatCounter({ value, label, icon }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState("0");
  const { num, prefix, suffix: suf } = parseNumber(value);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = num / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        clearInterval(timer);
        // Format with commas if large
        setDisplayed(num >= 1000 ? num.toLocaleString() : String(num));
      } else {
        const rounded = Math.floor(current);
        setDisplayed(rounded >= 1000 ? rounded.toLocaleString() : String(rounded));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <div ref={ref} className="card-premium p-7 text-center group hover:shadow-premium-lg transition-all duration-300">
      {icon && (
        <div className="h-12 w-12 mx-auto rounded-xl icon-box-soft grid place-items-center mb-4 group-hover:scale-105 transition-transform">
          {icon}
        </div>
      )}
      <div className="stat-number text-gradient">
        {prefix}{inView ? displayed : "0"}{suf}
      </div>
      <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
    </div>
  );
}