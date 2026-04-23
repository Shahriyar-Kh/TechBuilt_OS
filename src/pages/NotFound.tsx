import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | TechBuilt OS" description="The page you're looking for doesn't exist." />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container relative py-32 text-center">
          <p className="font-display text-9xl md:text-[12rem] font-extrabold text-gradient leading-none">404</p>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold mt-4">Page not found</h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">The page you're looking for might have been moved or doesn't exist.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild className="bg-gradient-primary shadow-glow">
              <Link to="/"><Home className="mr-1.5 h-4 w-4" /> Back home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses">Browse courses <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
