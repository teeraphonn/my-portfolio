"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, FileText, CheckCircle2, Calendar, ExternalLink, X, Sparkles, ZoomIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Competency {
  code: string;
  name: string;
  description: string;
}

interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  certNo: string;
  image: string;
  badge: string;
  badgeColor: string;
  competencies: Competency[];
}

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const certificates: CertificateItem[] = [
    {
      id: "futureskill-depa-ai-game",
      title: "พื้นฐานการสร้างเกมด้วย AI ฉบับเข้าใจง่าย",
      subtitle: "Certificate of Completion",
      issuer: "FutureSkill ร่วมกับ สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)",
      date: "14 กรกฎาคม 2569",
      certNo: "Digital Skill Roadmap - depa Certified",
      image: "/certificate-ai-game.png",
      badge: "FutureSkill x depa Certified",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      competencies: [
        {
          code: "AI-GAME-01",
          name: "การประยุกต์ใช้ AI ในการพัฒนาและสร้างสรรค์เกม",
          description: "ความรู้ความเข้าใจเกี่ยวกับการนำเทคโนโลยี AI มาช่วยออกแบบ Asset, Workflow และพัฒนาเกมได้อย่างรวดเร็วและมีประสิทธิภาพ",
        },
        {
          code: "AI-GAME-02",
          name: "Digital Skill Roadmap Certification",
          description: "หลักสูตรได้รับการยกระดับและรับรองมาตรฐานทักษะดิจิทัลโดย depa (สำนักงานส่งเสริมเศรษฐกิจดิจิทัล)",
        },
      ],
    },
    {
      id: "arit-tpqi",
      title: "นักพัฒนาซอฟต์แวร์ (Systems Developer) — ระดับ 3",
      subtitle: "หนังสือรับรองสมรรถนะตามมาตรฐานอาชีพ",
      issuer: "สถาบันคุณวุฒิวิชาชีพ (องค์การมหาชน) ร่วมกับ บริษัท เอาร์ไอที จำกัด (ARIT)",
      date: "20 เมษายน 2569",
      certNo: "OSCN-CB0176A...",
      image: "/certificate.jpg",
      badge: "TPQI & ARIT Standard",
      badgeColor: "bg-[#C1121F]/10 text-[#C1121F] border-[#C1121F]/20",
      competencies: [
        {
          code: "ICT-TG-008B",
          name: "ดำเนินการพัฒนาโปรแกรม (Carry out program development)",
          description: "ความสามารถในการเขียนโค้ดและพัฒนาส่วนควบคุมโปรแกรมตามการออกแบบระบบ",
        },
        {
          code: "ICT-EN-009B",
          name: "ทดสอบโปรแกรมแบบ Unit test (Perform the unit testing)",
          description: "ความสามารถในการเขียนชุดตรวจสอบคุณภาพโค้ดระดับยูนิตเทสเพื่อความมั่นคงของซอฟต์แวร์",
        },
      ],
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
      {/* Background soft styling */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C1121F]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            ใบรับรองและคุณวุฒิวิชาชีพ (Certifications)
            <span className="block w-12 h-1 bg-[#C1121F] mx-auto mt-2 rounded" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-xl font-sans"
          >
            การทดสอบผ่านเกณฑ์สมรรถนะวิชาชีพทางคอมพิวเตอร์ เทคโนโลยี AI และดิจิทัลที่ได้รับการรับรองอย่างเป็นทางการ
          </motion.p>
        </div>

        {/* Certificates List Grid */}
        <div className="space-y-16">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card/40 backdrop-blur-sm border border-border/70 rounded-3xl p-6 md:p-8 hover:border-[#C1121F]/30 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              
              {/* Left Side: Certificate details */}
              <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold font-heading rounded-full border ${cert.badgeColor}`}>
                    {cert.badge}
                  </span>
                  <span className="text-xs text-muted-foreground font-heading flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-[#C1121F]" />
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2.5 rounded-2xl bg-[#C1121F]/10 border border-[#C1121F]/15 flex items-center justify-center text-[#C1121F] shrink-0">
                    <Award className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-heading">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 text-muted-foreground font-sans mt-2">
                  <div>
                    <p className="text-sm font-semibold text-[#C1121F] font-heading mb-1 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 shrink-0" />
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Core units list */}
                  <div className="space-y-3 border-t border-border/60 pt-4">
                    <h4 className="text-xs font-bold text-foreground font-heading uppercase tracking-wide">
                      รายละเอียดสมรรถนะ / หัวข้อที่ได้รับการรับรอง:
                    </h4>
                    <ul className="space-y-3">
                      {cert.competencies.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-[#C1121F] shrink-0 mt-0.5" />
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-foreground font-heading">
                              {item.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta details */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-4 text-xs font-heading text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-[#C1121F]" />
                      <span>{cert.certNo}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Image preview card */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center order-1 lg:order-2">
                <Card className="glass border-border/80 bg-background/60 overflow-hidden w-full max-w-[380px] hover:shadow-xl transition-all duration-500 group relative rounded-2xl">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C1121F] to-purple-600" />
                  <CardContent className="p-3.5 flex flex-col items-center">
                    
                    {/* Certificate Image Container */}
                    <div 
                      onClick={() => setSelectedImage({ src: cert.image, title: cert.title })}
                      className="relative w-full aspect-[1.414/1] rounded-xl overflow-hidden border border-border/60 mb-3 bg-muted cursor-pointer group/img"
                    >
                      <Image
                        src={cert.image}
                        alt={`${cert.title} - Teeraphon Plianram`}
                        fill
                        className="object-contain group-hover/img:scale-105 transition-transform duration-500 bg-white/5"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold font-heading flex items-center gap-1.5 bg-[#C1121F]/90 px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                          <ZoomIn className="h-4 w-4" /> ดูรูปภาพขนาดใหญ่
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 w-full">
                      <Button
                        onClick={() => setSelectedImage({ src: cert.image, title: cert.title })}
                        variant="outline"
                        className="flex-1 rounded-full border-border hover:bg-[#C1121F]/5 hover:border-[#C1121F] text-foreground transition-all duration-300 gap-1.5 text-xs font-heading"
                      >
                        <ZoomIn className="h-3.5 w-3.5 text-[#C1121F]" /> ขยายรูป
                      </Button>
                      
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="ghost"
                          className="w-full rounded-full border border-border/60 hover:bg-muted text-foreground transition-all duration-300 gap-1.5 text-xs font-heading"
                        >
                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" /> แท็บใหม่
                        </Button>
                      </a>
                    </div>

                  </CardContent>
                </Card>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
                <h3 className="text-base font-bold font-heading text-foreground truncate pr-4">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body / Image */}
              <div className="relative flex-1 p-4 bg-black/90 min-h-[400px] flex items-center justify-center overflow-auto">
                <div className="relative w-full h-[65vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-border bg-card text-xs text-muted-foreground font-heading">
                <span>กด ESC หรือคลิกพื้นที่ว่างเพื่อปิด</span>
                <a
                  href={selectedImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C1121F] hover:underline flex items-center gap-1"
                >
                  เปิดภาพในแท็บใหม่ <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

