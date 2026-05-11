import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ChevronDown, BookOpen, Layers, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const learnMenu = [
  { label: "All Courses", to: "/courses", desc: "HTML, CSS, JS, React, Python & more", icon: BookOpen },
  { label: "Specializations", to: "/specializations", desc: "Complete career-ready tracks", icon: Layers },
  { label: "Roadmaps", to: "/roadmaps", desc: "Step-by-step learning paths", icon: Map },
];

const nav = [
  { label: "Learn", to: "#", dropdown: learnMenu },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 lg:px-6 transition-all duration-500",
            scrolled
              ? "glass border border-border/50 shadow-md py-2.5"
              : "bg-transparent border border-transparent py-3"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative h-9 w-9 rounded-xl grid place-items-center shadow-glow overflow-hidden"
              style={{ background: 'var(--gradient-primary)' }}>
              <Sparkles className="h-4 w-4 text-white relative z-10" />
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-lg tracking-tight">TechBuilt OS</span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">Open School</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                      activeDropdown === item.label
                        ? "text-primary bg-primary/6"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", activeDropdown === item.label && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-full pt-2 w-72"
                      >
                        <div className="glass border border-border/60 rounded-2xl p-2 shadow-premium-lg">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/70 transition-colors group"
                            >
                              <div className="h-9 w-9 rounded-lg icon-box-soft grid place-items-center shrink-0 mt-0.5">
                                <sub.icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold group-hover:text-primary transition-colors">{sub.label}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{sub.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-primary bg-primary/6"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-sm font-medium">
              <Link to="/contact">Talk to us</Link>
            </Button>
            <Button asChild size="sm" className="btn-primary-glow rounded-xl h-9 px-5 text-sm font-semibold">
              <Link to="/apply">Apply now <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-2 glass border border-border/60 rounded-2xl p-3 shadow-premium-lg"
            >
              <div className="space-y-0.5 mb-3">
                {[
                  { label: "Home", to: "/" },
                  { label: "Courses", to: "/courses" },
                  { label: "Specializations", to: "/specializations" },
                  { label: "Roadmaps", to: "/roadmaps" },
                  { label: "Pricing", to: "/pricing" },
                  { label: "Blog", to: "/blog" },
                  { label: "About", to: "/about" },
                  { label: "Contact", to: "/contact" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive ? "text-primary bg-primary/6 font-semibold" : "text-foreground/80 hover:bg-muted hover:text-foreground"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                <Button asChild variant="outline" size="sm" className="rounded-xl">
                  <Link to="/contact">Talk to us</Link>
                </Button>
                <Button asChild size="sm" className="btn-primary-glow rounded-xl">
                  <Link to="/apply">Apply now</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}