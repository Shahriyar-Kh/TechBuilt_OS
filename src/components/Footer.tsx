import { Link } from "react-router-dom";
import { Sparkles, Mail, MapPin, Phone, Github, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border bg-gradient-to-b from-background to-secondary/40">
      <div className="container py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-xl">TechBuilt OS</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">TechBuilt Open School</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              <strong className="text-foreground font-semibold">TechBuilt Open School</strong> — job-ready tech skills through low-cost
              single courses and industry-level specializations, with mentors, real projects, and a thriving community.
            </p>
            <div className="flex gap-2">
              {[Github, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-xl border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-sm mb-4">Learn</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link to="/specializations" className="hover:text-primary transition-colors">Specializations</Link></li>
              <li><Link to="/roadmaps" className="hover:text-primary transition-colors">Roadmaps</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About us</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/apply" className="hover:text-primary transition-colors">Apply</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display font-semibold text-sm mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@techbuiltos.com</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +1 (415) 555-0179</li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 100 Learners Way, San Francisco, CA</li>
            </ul>
            <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="h-11 px-5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:opacity-95 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TechBuilt OS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
