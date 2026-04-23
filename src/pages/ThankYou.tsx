import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank You — TechBuilt OS" description="Thank you for reaching out. We'll be in touch shortly." />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container relative py-20 md:py-32 text-center max-w-2xl">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-24 w-24 mx-auto rounded-3xl bg-gradient-primary grid place-items-center shadow-glow mb-8"
          >
            <CheckCircle2 className="h-12 w-12 text-primary-foreground" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-extrabold leading-tight"
          >
            You're <span className="text-gradient">in</span>!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground mt-5"
          >
            Thanks for reaching out. A real human from our team will be in touch within 24 hours with your next steps.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button asChild className="bg-gradient-primary shadow-glow">
              <Link to="/">Back to home <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/blog">Read the blog</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Mail className="h-4 w-4" /> Check your inbox — confirmation is on its way.
          </motion.div>
        </div>
      </section>
    </>
  );
}
