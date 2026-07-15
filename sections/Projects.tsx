"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "ระบบติดตามการดำเนินงานตามประเด็นยุทธศาสตร์",
      subtitle: "Strategic Issue Implementation Monitoring System",
      description: "ระบบวางแผนยุทธศาสตร์และติดตามประเด็นการดำเนินงานของมหาวิทยาลัยราชภัฏบุรีรัมย์ ช่วยอำนวยความสะดวกให้ผู้บริหารและเจ้าหน้าที่ในการประเมินประสิทธิภาพโครงการผ่านแดชบอร์ดสรุปผล",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      features: [
        "Executive Dashboard (แดชบอร์ดสรุปข้อมูลเชิงสถิติสำหรับผู้บริหาร)",
        "Project Management (ระบบบันทึกและจัดการข้อมูลโครงการตามยุทธศาสตร์)",
        "Real-time Report (ระบบออกรายงานความคืบหน้าแบบเรียลไทม์)",
      ],
      github: "https://github.com/teeraphon-pli/strategic-monitoring-system",
      demo: "#",
      // Rendered Programmatic Mockup
      renderVisual: () => (
        <div className="w-full h-full bg-[#121215] flex flex-col p-4 font-sans text-xs relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          {/* Dashboard Window Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-white/40 text-[9px] font-heading font-medium tracking-wider">STRATEGIC MONITORING</span>
          </div>
          
          {/* Dashboard Contents Mock */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-white/5 border border-white/5 rounded p-2 flex flex-col justify-between">
              <span className="text-white/50 text-[8px] font-heading">ยุทธศาสตร์ทั้งหมด</span>
              <span className="text-sm font-bold text-white font-heading">5 ประเด็น</span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded p-2 flex flex-col justify-between">
              <span className="text-white/50 text-[8px] font-heading">โครงการรวม</span>
              <span className="text-sm font-bold text-[#C1121F] font-heading">42 โครงการ</span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded p-2 flex flex-col justify-between">
              <span className="text-white/50 text-[8px] font-heading">การดำเนินงาน</span>
              <span className="text-sm font-bold text-emerald-400 font-heading">85%</span>
            </div>
          </div>

          {/* Simple Animated Graph Bar Simulation */}
          <div className="bg-white/5 border border-white/5 rounded p-3 flex-grow flex flex-col justify-between">
            <span className="text-white/60 text-[9px] font-heading mb-2 block">อัตราความสำเร็จจำแนกตามยุทธศาสตร์</span>
            <div className="flex items-end justify-between gap-2 h-20 px-2">
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-[#C1121F] rounded-t" style={{ height: "70%" }} />
                <span className="text-white/30 text-[7px]">ยศ.1</span>
              </div>
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-white/40 rounded-t" style={{ height: "45%" }} />
                <span className="text-white/30 text-[7px]">ยศ.2</span>
              </div>
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-[#780000] rounded-t" style={{ height: "90%" }} />
                <span className="text-white/30 text-[7px]">ยศ.3</span>
              </div>
              <div className="w-full flex flex-col items-center gap-1">
                <div className="w-3 bg-emerald-400 rounded-t" style={{ height: "60%" }} />
                <span className="text-white/30 text-[7px]">ยศ.4</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "ระบบจัดการสมาชิก (RESTful API & Backend Service)",
      subtitle: "Member Management System",
      description: "เว็บแอปพลิเคชันระบบจัดการสมาชิกและยืนยันสิทธิ์ พัฒนาส่วนหลังบ้าน (Backend) ในลักษณะ RESTful API ครอบคลุมฟังก์ชันการทำงานพื้นฐาน CRUD ครบถ้วน",
      tech: ["Node.js", "Express", "MySQL", "Authentication"],
      features: [
        "RESTful API (บริการเส้นทางเข้าถึงข้อมูลแบบมาตรฐานสำหรับเว็บส่วนหน้า)",
        "MySQL Integration (เชื่อมต่อ ดึงข้อมูล และบริหารจัดการฐานข้อมูล MySQL)",
        "Authentication & Security (ระบบล็อกอินด้วยโทเค็นและการตรวจสอบสิทธิ์)",
      ],
      github: "https://github.com/teeraphon-pli/member-management-system",
      demo: "#",
      // Rendered Programmatic Mockup
      renderVisual: () => (
        <div className="w-full h-full bg-[#0E1013] flex flex-col p-4 font-sans text-[9px] text-[#A9B1D6] relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="text-white/40 text-[8px] font-heading font-medium tracking-wider">REST API ENDPOINTS</span>
          </div>

          {/* Endpoint List Mockup */}
          <div className="space-y-2 flex-grow">
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/10 text-emerald-400 font-bold px-1.5 py-0.5 rounded text-[8px]">GET</span>
                <span className="font-mono text-white/90">/api/members</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">200 OK</span>
            </div>
            
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-blue-500/10 text-blue-400 font-bold px-1.5 py-0.5 rounded text-[8px]">POST</span>
                <span className="font-mono text-white/90">/api/members/auth</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">200 OK</span>
            </div>

            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/10 text-amber-400 font-bold px-1.5 py-0.5 rounded text-[8px]">PUT</span>
                <span className="font-mono text-white/90">/api/members/:id</span>
              </div>
              <span className="text-[8px] text-white/30 px-1">Pending</span>
            </div>

            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded p-2">
              <div className="flex items-center gap-2">
                <span className="bg-rose-500/10 text-rose-400 font-bold px-1.5 py-0.5 rounded text-[8px]">DELETE</span>
                <span className="font-mono text-white/90">/api/members/:id</span>
              </div>
              <span className="text-[8px] text-white/30 px-1">Pending</span>
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

                  {/* Features List */}
                  <div className="space-y-2 mb-8 border-t border-border/50 pt-5">
                    <span className="text-xs font-bold text-foreground font-heading flex items-center gap-1.5 uppercase tracking-wide">
                      <Layers className="w-3.5 h-3.5 text-[#C1121F]" /> ฟีเจอร์เด่นของระบบ
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.map((f, fIdx) => (
                        <li key={fIdx} className="text-xs text-muted-foreground font-sans list-disc list-inside">
                          {f}
                        </li>
                      ))}
                    </ul>
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
