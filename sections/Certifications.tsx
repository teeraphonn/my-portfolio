"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, FileText, CheckCircle2, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Certifications() {
  const coreCompetencies = [
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
  ];

  return (
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
      {/* Background soft styling */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#C1121F]/5 rounded-full blur-[120px] pointer-events-none" />

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
            className="text-muted-foreground max-w-lg font-sans"
          >
            การทดสอบผ่านเกณฑ์สมรรถนะวิชาชีพทางคอมพิวเตอร์และดิจิทัลที่ได้รับการรับรองอย่างเป็นทางการ
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Certificate details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/15 flex items-center justify-center text-[#C1121F]">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                หนังสือรับรองสมรรถนะตามมาตรฐานอาชีพ
              </h3>
            </div>

            <div className="space-y-6 text-muted-foreground font-sans">
              <div>
                <h4 className="text-lg font-bold text-foreground font-heading mb-1">
                  นักพัฒนาซอฟต์แวร์ (Systems Developer) — ระดับ 3
                </h4>
                <p className="text-sm font-semibold text-[#C1121F] font-heading mb-2">
                  สถาบันคุณวุฒิวิชาชีพ (องค์การมหาชน) ร่วมกับ บริษัท เอาร์ไอที จำกัด (ARIT)
                </p>
                <p className="text-sm leading-relaxed">
                  ได้รับใบรับรองความสามารถตามมาตรฐานอาชีพสาขาวิชาชีพดิจิทัลและเทคโนโลยีสารสนเทศ 
                  ผ่านการประเมินทักษะการปฏิบัติงานที่จำเป็นต่อกระบวนการพัฒนาซอฟต์แวร์ระดับสากล
                </p>
              </div>

              {/* Core units list */}
              <div className="space-y-4 border-t border-border pt-5">
                <h5 className="text-sm font-bold text-foreground font-heading uppercase tracking-wide">
                  หัวข้อสมรรถนะที่ได้รับการรับรอง:
                </h5>
                <ul className="space-y-3.5">
                  {coreCompetencies.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C1121F] shrink-0 mt-0.5" />
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
              <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-xs">
                <div className="flex items-center gap-1.5 font-heading">
                  <Calendar className="h-4 w-4 text-[#C1121F]" />
                  <span>วันที่ออก: 20 เมษายน 2569</span>
                </div>
                <div className="flex items-center gap-1.5 font-heading">
                  <FileText className="h-4 w-4 text-[#C1121F]" />
                  <span>เลขที่หนังสือรับรอง: OSCN-CB0176A...</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image preview card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center items-center"
          >
            <Card className="glass border-border/80 bg-background/50 overflow-hidden w-full max-w-[360px] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 group relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C1121F]" />
              <CardContent className="p-4 flex flex-col items-center">
                
                {/* Certificate Image Container */}
                <div className="relative w-full aspect-[1/1.4] rounded-lg overflow-hidden border border-border/60 mb-4 bg-muted">
                  <Image
                    src="/certificate.jpg"
                    alt="Certificate of Competency - Teeraphon Plianram"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-xs font-semibold font-heading flex items-center gap-1.5 bg-[#C1121F]/90 px-3 py-1.5 rounded-full shadow-lg">
                      <ExternalLink className="h-3.5 w-3.5" /> คลิกเพื่อขยายใหญ่
                    </span>
                  </div>
                </div>

                <a
                  href="/certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-border hover:bg-[#C1121F]/5 hover:border-[#C1121F] text-foreground transition-all duration-300 gap-2 cursor-pointer text-xs"
                  >
                    <ExternalLink className="h-4 w-4 text-[#C1121F]" /> เปิดดูใบรับรองฉบับเต็ม
                  </Button>
                </a>

              </CardContent>
            </Card>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
