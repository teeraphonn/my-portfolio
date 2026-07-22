"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const navLinks = [
    { name: "หน้าแรก", id: "home" },
    { name: "เกี่ยวกับฉัน", id: "about" },
    { name: "ประวัติการศึกษา", id: "education" },
    { name: "ใบรับรอง", id: "certifications" },
    { name: "ประสบการณ์", id: "experience" },
    { name: "ทักษะ", id: "skills" },
    { name: "ผลงาน", id: "projects" },
    { name: "ติดต่อผม", id: "contact" },
  ];

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Calculate layout header offset
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass py-3 shadow-md shadow-black/5 dark:shadow-white/5 border-b border-border/80"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1.5 font-heading text-lg font-extrabold text-foreground tracking-tight cursor-pointer"
          >
            <span>Teeraphon</span>
            <span className="text-[#C1121F]">.dev</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold font-heading">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-[#C1121F]"
                    : "text-foreground/80 hover:text-[#C1121F]"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C1121F] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#C1121F] hover:bg-[#780000] text-white rounded-full font-heading text-xs px-5 shadow-sm shadow-[#C1121F]/10 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              ติดต่อพูดคุย
            </Button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full w-10 h-10 hover:bg-primary/10 text-foreground cursor-pointer"
              aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-background/95 dark:bg-background/98 backdrop-blur-lg border-b border-border shadow-xl py-6 flex flex-col items-center gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-center py-2.5 text-sm font-semibold font-heading cursor-pointer ${
                  activeSection === link.id
                    ? "text-[#C1121F] bg-[#C1121F]/5"
                    : "text-foreground/80 hover:text-[#C1121F]"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 w-[80%]">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#C1121F] hover:bg-[#780000] text-white rounded-full font-heading text-xs py-5 cursor-pointer"
              >
                ติดต่อพูดคุย
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
