import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImg from "@/assets/hero-main.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  { src: heroImg, alt: "Students learning to code at TechBuilt Open School" },
  { src: hero2, alt: "Diverse students collaborating on laptops in a coding classroom" },
  { src: hero3, alt: "Developer hands typing code on a modern laptop" },
  { src: hero4, alt: "Online mentor teaching a live coding session" },
  { src: hero5, alt: "Happy graduate ready to start a tech career" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-premium-lg border border-border/60 bg-muted">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slides[index].src}
            alt={slides[index].alt}
            width={1280}
            height={960}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent pointer-events-none" />

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-primary-foreground" : "w-1.5 bg-primary-foreground/50 hover:bg-primary-foreground/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Preload next images */}
      <div className="hidden">
        {slides.map((s) => (
          <img key={s.src} src={s.src} alt="" />
        ))}
      </div>
    </div>
  );
}
