"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function About() {
  const infoItems = [
    {
      icon: <User className="h-5 w-5 text-[#C1121F]" />,
      label: "ชื่อ-นามสกุล",
      value: "ธีรพล เปลี่ยนรัมย์ (Teeraphon Plianram)",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-[#C1121F]" />,
      label: "ตำแหน่งที่ต้องการฝึกงาน",
      value: "Full Stack Developer / System Analyst (SA) / SQA",
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#C1121F]" />,
      label: "ที่อยู่ / ที่ตั้ง",
      value: "บุรีรัมย์, ประเทศไทย",
    },
    {
      icon: <Mail className="h-5 w-5 text-[#C1121F]" />,
      label: "อีเมลติดต่อ",
      value: "teeraphon.pli@gmail.com",
      href: "mailto:teeraphon.pli@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-[#C1121F]" />,
      label: "เบอร์โทรศัพท์",
      value: "+66 63 005 6417",
      href: "tel:+66630056417",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#C1121F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground relative"
          >
            เกี่ยวกับฉัน
            <span className="block w-12 h-1 bg-[#C1121F] mx-auto mt-2 rounded" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-lg font-sans"
          >
            แนะนำตัวและข้อมูลส่วนตัวสำหรับการประเมินพิจารณาเข้าฝึกงาน
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl p-[2px] bg-gradient-to-tr from-[#C1121F] via-[#780000] to-border overflow-hidden shadow-2xl shadow-black/10 dark:shadow-white/5">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-card">
                <Image
                  src="/profile.png"
                  alt="Teeraphon Plianram"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content & Info Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-5 text-foreground leading-snug">
                นักศึกษาวิทยาการคอมพิวเตอร์ที่ต้องการฝึกงานตำแหน่ง <span className="text-[#C1121F]">Full Stack Developer</span>, <span className="text-[#C1121F]">System Analyst (SA)</span> และ <span className="text-[#C1121F]">Software Quality Assurance (SQA)</span>
              </h3>
              
              <p className="text-muted-foreground font-sans leading-relaxed mb-4 text-sm md:text-base">
                ผมเป็นนักศึกษาสาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจในการพัฒนาซอฟต์แวร์แบบ <strong className="text-foreground">Full Stack</strong>, การวิเคราะห์และออกแบบระบบ (<strong className="text-foreground">System Analysis & Design</strong>) รวมถึงการประกันคุณภาพซอฟต์แวร์ (<strong className="text-foreground">Software Quality Assurance / Testing</strong>) ผมชื่นชอบการออกแบบโครงสร้างฐานข้อมูล การร่างแผนภาพระบบ (System Diagram) การทดสอบซอฟต์แวร์และเขียน Unit test เพื่อตรวจสอบความถูกต้องของระบบ และการสร้างแอปพลิเคชันที่คลีน และมีความตั้งใจที่จะเรียนรู้เทคโนโลยีและหาความรู้สิ่งใหม่ๆเสมอ
              </p>

              <p className="text-muted-foreground font-sans leading-relaxed text-sm md:text-base">
                ผมมีความต้องการ <strong className="text-[#C1121F]">ฝึกงาน (Internship) ใน 3 บทบาทหลัก</strong> คือ ตำแหน่ง <strong className="text-foreground">Full Stack Developer</strong>, นักวิเคราะห์ระบบ <strong className="text-foreground">System Analyst (SA)</strong> หรือ <strong className="text-foreground">Software Quality Assurance (SQA)</strong> หรือ ตำแหน่งด้าน Tech อื่นๆ ตามความเหมาะสมกับประสบการณ์ส่วนตัว เพื่อเรียนรู้ทักษะการทำงานจริงอย่างเป็นระบบและนำความรู้มาช่วยสร้างคุณค่าให้กับทีมและองค์กร
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass border-border/80 shadow-xl shadow-black/5 dark:shadow-white/5 relative overflow-hidden bg-background/50">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C1121F] to-[#780000]" />
                
                <CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {infoItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3.5 ${
                        index === 0 || index === 1 ? "md:col-span-2 border-b border-border/40 pb-4" : ""
                      }`}
                    >
                      <div className="p-2.5 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground font-sans font-semibold uppercase tracking-wider mb-0.5">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground font-sans hover:text-[#C1121F] transition-colors duration-300 font-semibold break-all text-xs md:text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-sans font-semibold break-all text-xs md:text-sm">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
