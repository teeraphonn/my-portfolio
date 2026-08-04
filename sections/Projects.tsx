"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Strategic Performance Tracking System",
      subtitle: "Computer Science Capstone Project",
      category: "Full-Stack Web Application",
      description: "ระบบติดตามและประเมินผลการดำเนินงานเชิงยุทธศาสตร์แบบ Full-Stack พัฒนาขึ้นเพื่อช่วยในการบันทึก ติดตาม และสรุปผลตัวชี้วัดผ่านแดชบอร์ดอย่างเป็นระบบ",
      responsibilities: "Developed frontend dashboards, backend RESTful APIs, and JWT/RBAC authentication using React, Node.js, Express.js, Prisma ORM, MySQL, Tailwind CSS, and Chart.js.",
      tech: ["React", "Node.js", "Express.js", "Prisma ORM", "MySQL", "Tailwind CSS", "Chart.js", "JWT / RBAC"],
      github: "https://github.com/teeraphonn?tab=projects",
      demo: "#",
      renderVisual: () => (
        <div className="w-full h-full bg-[#121215] flex flex-col p-4 font-sans text-xs relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-white/40 text-[9px] font-heading font-medium tracking-wider">CAPSTONE PROJECT • FULL-STACK</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-white/5 border border-white/5 rounded p-2 flex flex-col justify-between">
              <span className="text-white/50 text-[8px] font-heading">Performance</span>
              <span className="text-sm font-bold text-white font-heading">Tracking</span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded p-2 flex flex-col justify-between">
              <span className="text-white/50 text-[8px] font-heading">Security</span>
              <span className="text-sm font-bold text-[#C1121F] font-heading">JWT / RBAC</span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded p-2 flex flex-col justify-between">
              <span className="text-white/50 text-[8px] font-heading">Analytics</span>
              <span className="text-sm font-bold text-emerald-400 font-heading">Chart.js</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/5 rounded p-3 flex-grow flex flex-col justify-between">
            <span className="text-white/60 text-[9px] font-heading mb-2 block">Strategic Performance Analytics Dashboard</span>
            <div className="flex items-end justify-between gap-2 h-20 px-2">
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-[#C1121F] rounded-t" style={{ height: "85%" }} />
                <span className="text-white/30 text-[7px]">Q1</span>
              </div>
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-[#780000] rounded-t" style={{ height: "65%" }} />
                <span className="text-white/30 text-[7px]">Q2</span>
              </div>
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-white/40 rounded-t" style={{ height: "75%" }} />
                <span className="text-white/30 text-[7px]">Q3</span>
              </div>
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-emerald-400 rounded-t" style={{ height: "95%" }} />
                <span className="text-white/30 text-[7px]">Q4</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Strategic Issue Implementation Monitoring System",
      subtitle: "System Analysis and Design • Term Project",
      category: "Buriram Rajabhat University",
      description: "โครงการวิเคราะห์และออกแบบระบบติดตามการดำเนินงานตามประเด็นยุทธศาสตร์สำหรับมหาวิทยาลัยราชภัฏบุรีรัมย์",
      responsibilities: "Conducted system analysis, designed Context Diagrams, DFD, Flowcharts, Decomposition Diagrams, and ERD, and translated functional requirements into system workflows.",
      tech: ["System Analysis", "Context Diagram", "DFD", "Flowchart", "Decomposition Diagram", "ERD", "UML Workflow"],
      github: "https://github.com/teeraphonn?tab=projects",
      demo: "#",
      renderVisual: () => (
        <div className="w-full h-full bg-[#0F141C] flex flex-col p-4 font-sans text-xs relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            </div>
            <span className="text-white/40 text-[9px] font-heading font-medium tracking-wider">SYSTEM ANALYSIS & DESIGN</span>
          </div>
          <div className="space-y-2 flex-grow flex flex-col justify-center">
            <div className="p-2 bg-white/5 border border-white/10 rounded flex items-center justify-between text-[10px]">
              <span className="text-blue-400 font-mono font-bold">Context Diagram & DFD</span>
              <span className="text-white/60">Process Flow</span>
            </div>
            <div className="p-2 bg-white/5 border border-white/10 rounded flex items-center justify-between text-[10px]">
              <span className="text-indigo-400 font-mono font-bold">ERD & Data Dictionary</span>
              <span className="text-white/60">Database Architecture</span>
            </div>
            <div className="p-2 bg-white/5 border border-white/10 rounded flex items-center justify-between text-[10px]">
              <span className="text-rose-400 font-mono font-bold">Decomposition & Flowcharts</span>
              <span className="text-white/60">Functional Requirements</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Member Management System",
      subtitle: "Internet Application Development • Term Project",
      category: "RESTful API Backend",
      description: "ระบบจัดการสมาชิกและเชื่อมต่อฐานข้อมูลสำหรับบริหารจัดการข้อมูลสมาชิกอย่างมีประสิทธิภาพ",
      responsibilities: "Developed a RESTful API for member management using Node.js, Express.js, and MySQL, implementing CRUD functionality and database integration for efficient data management.",
      tech: ["Node.js", "Express.js", "MySQL", "RESTful API", "CRUD Operations", "Database Integration"],
      github: "https://github.com/teeraphonn?tab=projects",
      demo: "#",
      renderVisual: () => (
        <div className="w-full h-full bg-[#0E1013] flex flex-col p-4 font-sans text-[9px] text-[#A9B1D6] relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="text-white/40 text-[8px] font-heading font-medium tracking-wider">RESTFUL API • CRUD SERVICE</span>
          </div>
          <div className="space-y-2 flex-grow">
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/10 text-emerald-400 font-bold px-1.5 py-0.5 rounded text-[8px]">GET</span>
                <span className="font-mono text-white/90">/api/v1/members</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">200 OK</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-blue-500/10 text-blue-400 font-bold px-1.5 py-0.5 rounded text-[8px]">POST</span>
                <span className="font-mono text-white/90">/api/v1/members</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">201 Created</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/10 text-amber-400 font-bold px-1.5 py-0.5 rounded text-[8px]">PUT</span>
                <span className="font-mono text-white/90">/api/v1/members/:id</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">200 OK</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-rose-500/10 text-rose-400 font-bold px-1.5 py-0.5 rounded text-[8px]">DELETE</span>
                <span className="font-mono text-white/90">/api/v1/members/:id</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">200 OK</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Image Upload Mobile & Web App Concept",
      subtitle: "Mobile Application Development • Term Project",
      category: "UX/UI & Interactive Prototype",
      description: "แนวคิดและต้นแบบแอปพลิเคชันสำหรับการอัปโหลดและจัดการรูปภาพ รองรับการใช้งานทั้งบนสมาร์ทโฟนและเว็บแอปพลิเคชัน",
      responsibilities: "Designed end-to-end UX/UI workflows and interactive prototypes for both mobile and web platforms using Figma.",
      tech: ["Figma", "UX/UI Design", "Interactive Prototype", "Mobile App UI", "Web App UI", "User Workflow"],
      github: "https://github.com/teeraphonn?tab=projects",
      demo: "#",
      renderVisual: () => (
        <div className="w-full h-full bg-[#1A121F] flex flex-col p-4 font-sans text-xs relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            </div>
            <span className="text-white/40 text-[9px] font-heading font-medium tracking-wider">FIGMA UX/UI PROTOTYPE</span>
          </div>
          <div className="flex items-center justify-around flex-grow py-2">
            {/* Mobile Wireframe Mockup */}
            <div className="w-16 h-28 border-2 border-purple-500/40 rounded-xl bg-purple-500/10 flex flex-col items-center p-1.5 gap-1.5 justify-center">
              <div className="w-6 h-1 bg-purple-400/40 rounded-full" />
              <div className="w-10 h-10 border border-dashed border-purple-400/50 rounded-lg flex items-center justify-center text-[8px] text-purple-300">Upload</div>
              <div className="w-12 h-2 bg-purple-400/30 rounded" />
            </div>
            {/* Web Wireframe Mockup */}
            <div className="w-32 h-24 border border-pink-500/40 rounded-lg bg-pink-500/10 flex flex-col p-2 gap-1.5 justify-between">
              <div className="flex items-center justify-between border-b border-pink-500/20 pb-1">
                <div className="w-4 h-1 bg-pink-400/50 rounded" />
                <div className="w-10 h-1 bg-pink-400/30 rounded" />
              </div>
              <div className="border border-dashed border-pink-400/40 rounded flex flex-col items-center justify-center p-2 text-[8px] text-pink-300">
                Drag & Drop Image Here
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#C1121F]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground"
          >
            ผลงาน
            <span className="block w-12 h-1 bg-[#C1121F] mx-auto mt-2 rounded" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-lg font-sans"
          >
            โครงการเว็บแอปพลิเคชันหลักที่ได้ออกแบบ วิเคราะห์ระบบ และพัฒนาระหว่างเรียน
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="h-full"
            >
              <Card className="glass border-border/80 h-full hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 bg-background/50 flex flex-col overflow-hidden group">
                
                {/* Visual Representation Area instead of image placeholder */}
                <div className="w-full h-56 bg-muted border-b border-border/60 overflow-hidden relative">
                  {project.renderVisual()}
                </div>

                <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Title & Subtitle */}
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-1 leading-snug group-hover:text-[#C1121F] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider font-heading mb-4 uppercase">
                    {project.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm font-sans mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C1121F]/10 border border-[#C1121F]/15 text-[#C1121F] font-heading"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-1.5 mb-6 border-t border-border/50 pt-4">
                    <span className="text-xs font-bold text-foreground font-heading flex items-center gap-1.5 uppercase tracking-wide">
                      <Layers className="w-3.5 h-3.5 text-[#C1121F]" /> Responsibilities & Scope
                    </span>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                      {project.responsibilities}
                    </p>
                  </div>


                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
