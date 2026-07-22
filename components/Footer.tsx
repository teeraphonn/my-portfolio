"use client";

import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

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

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/teeraphonn?tab=projects", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/teeraphon-plianram-aa5075422/", label: "LinkedIn" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Footer Top: Brand and Socials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60 mb-8">
          {/* Logo / Brand Name */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold font-heading text-foreground tracking-tight">
              Teeraphon<span className="text-[#C1121F]">.dev</span>
            </span>
            <span className="text-xs text-muted-foreground font-sans mt-1">
              Computer Science & Full-stack Developer Portfolio
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-[#C1121F] hover:border-[#C1121F] hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Middle: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm font-medium font-heading">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-muted-foreground hover:text-[#C1121F] transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Footer Bottom: Copyright & Built With */}
        <div className="text-center text-xs text-muted-foreground font-sans space-y-2">
          <p>© {currentYear} Teeraphon Plianram. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="h-3 w-3 text-[#C1121F] fill-[#C1121F]" /> using Next.js 15, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
