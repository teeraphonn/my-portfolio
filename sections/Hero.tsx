"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full Stack Developer (ฝึกงาน)",
  "System Analyst / SA (ฝึกงาน)",
  "นักศึกษาวิทยาการคอมพิวเตอร์",
];

export function Hero() {
  const [currentRole, setCurrentRole] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  // Canvas particle background logic
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(canvas.width / 25), 45);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          color: Math.random() > 0.5 ? "rgba(193, 18, 31, 0.2)" : "rgba(120, 0, 0, 0.15)",
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = "rgba(193, 18, 31, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Typing effect logic
  React.useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100;
    const nextWordDelay = 2000;

    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentRole(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), nextWordDelay);
        }
      } else {
        setCurrentRole(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* Background Grid & Canvas Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0" />
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#C1121F]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#780000]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#C1121F] font-semibold text-lg tracking-wider mb-2 font-heading"
          >
            สวัสดีครับ, ผมชื่อ
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-4 text-foreground">
            ธีรพล เปลี่ยนรัมย์
          </h1>

          <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6">
            <span className="text-xl md:text-2xl font-medium text-foreground/80 font-heading">
              เป็น
            </span>
            <span className="text-xl md:text-2xl font-bold text-[#C1121F] ml-2 border-r-2 border-[#C1121F] pr-1 animate-pulse font-heading">
              {currentRole}
            </span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-sans">
            มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชันแบบ <strong className="text-foreground">Full Stack</strong> และการวิเคราะห์ออกแบบระบบ (<strong className="text-foreground">System Analysis & Design</strong>) <strong className="text-[#C1121F]">กำลังมองหาโอกาสฝึกงาน (Internship) ในตำแหน่ง Full Stack Developer หรือ System Analyst (SA)</strong>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-[#C1121F] hover:bg-[#780000] text-white rounded-full px-6 font-medium shadow-md shadow-[#C1121F]/20 hover:scale-105 transition-all duration-300 gap-2 cursor-pointer"
            >
              ดูผลงานของผม <ArrowRight className="h-4 w-4" />
            </Button>
            
            <a href="/resume.pdf" download="Teeraphon_Resume.pdf" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border hover:bg-primary/5 hover:border-[#C1121F] text-foreground hover:scale-105 transition-all duration-300 gap-2 cursor-pointer"
              >
                ดาวน์โหลด Resume <Download className="h-4 w-4" />
              </Button>
            </a>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="ghost"
              size="lg"
              className="rounded-full hover:bg-primary/10 text-foreground hover:scale-105 transition-all duration-300 gap-2 cursor-pointer"
            >
              ติดต่อผม <Send className="h-4 w-4 text-[#C1121F]" />
            </Button>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mt-8 text-sm text-muted-foreground font-sans border-t border-border/40 pt-6">
            <a
              href="mailto:teeraphon.pli@gmail.com"
              className="flex items-center gap-2.5 hover:text-[#C1121F] transition-colors duration-300 group cursor-pointer"
            >
              <span className="p-2 rounded-lg bg-[#C1121F]/5 text-[#C1121F] group-hover:bg-[#C1121F]/10 transition-colors duration-300">
                <Mail className="h-4.5 w-4.5" />
              </span>
              <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">teeraphon.pli@gmail.com</span>
            </a>
            
            <div className="hidden sm:block w-[1px] h-4 bg-border" />

            <a
              href="tel:+66630056417"
              className="flex items-center gap-2.5 hover:text-[#C1121F] transition-colors duration-300 group cursor-pointer"
            >
              <span className="p-2 rounded-lg bg-[#C1121F]/5 text-[#C1121F] group-hover:bg-[#C1121F]/10 transition-colors duration-300">
                <Phone className="h-4.5 w-4.5" />
              </span>
              <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">063-005-6417</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Animated Outer Circles */}
          <div className="absolute w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full border border-dashed border-[#C1121F]/20 animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[320px] h-[320px] md:w-[470px] md:h-[470px] rounded-full border border-[#780000]/10 animate-[spin_40s_linear_infinite_reverse]" />

          {/* Picture Container with gradient border - Changed to portrait rounded rectangle */}
          <div className="relative w-[260px] h-[320px] md:w-[320px] md:h-[400px] rounded-[2.5rem] p-[3px] bg-gradient-to-tr from-[#C1121F] via-[#780000] to-border overflow-hidden shadow-2xl shadow-black/10 dark:shadow-white/5">
            <div className="w-full h-full rounded-[2.3rem] bg-card overflow-hidden relative flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Teeraphon Plianram"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 260px, 320px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
