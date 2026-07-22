"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  const educationList = [
    {
      institution: "มหาวิทยาลัยราชภัฏบุรีรัมย์ (BRU)",
      degree: "ปริญญาตรี - วิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิทยาการคอมพิวเตอร์",
      gpa: "3.05",
      period: "2566 - ปัจจุบัน (2023 - Present)",
      description: "เน้นการเรียนรู้ด้านการออกแบบอัลกอริทึม พัฒนาซอฟต์แวร์ โครงสร้างข้อมูล และสถาปัตยกรรมระบบคลาวด์ พร้อมร่วมกิจกรรมพัฒนาทักษะวิชาการและการจัดการโครงการกลุ่ม",
    },
    {
      institution: "วิทยาลัยเทคนิคบุรีรัมย์",
      degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคโนโลยีธุรกิจดิจิทัล",
      gpa: "3.81",
      period: "2564 - 2565 (2021 - 2022)",
      description: "ศึกษาโครงสร้างพื้นฐานธุรกิจดิจิทัล การวิเคราะห์และออกแบบฐานข้อมูลเบื้องต้น การเขียนโปรแกรมสำหรับธุรกิจ และระบบสารสนเทศในองค์กร",
    },
  ];

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground"
          >
            ประวัติการศึกษา
            <span className="block w-12 h-1 bg-[#C1121F] mx-auto mt-2 rounded" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-lg font-sans"
          >
            เส้นทางการศึกษาที่บ่มเพาะทักษะและความสามารถด้านวิทยาการคอมพิวเตอร์และการพัฒนาซอฟต์แวร์
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border/80 max-w-3xl mx-auto pl-6 md:pl-10 space-y-12">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-background border-2 border-[#C1121F] text-[#C1121F] shadow-sm">
                <GraduationCap className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </span>

              {/* Timeline Card */}
              <Card className="glass hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 border-border/60 overflow-hidden group">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#C1121F] group-hover:h-full transition-all duration-300" />
                
                <CardContent className="p-6 md:p-8">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C1121F] font-heading mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{edu.period}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  
                  <h4 className="text-base md:text-lg font-medium text-foreground/80 font-heading mb-4">
                    {edu.degree}
                  </h4>

                  {/* GPA Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C1121F]/10 border border-[#C1121F]/15 text-[#C1121F] text-sm font-semibold font-heading mb-4">
                    <Award className="h-4 w-4" />
                    <span>เกรดเฉลี่ยสะสม (GPA): {edu.gpa}</span>
                  </div>

                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
