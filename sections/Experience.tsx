"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, CheckCircle2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const academicProjects = [
    {
      title: "ระบบติดตามการดำเนินงานตามประเด็นยุทธศาสตร์",
      subtitle: "วิชาการวิเคราะห์และออกแบบระบบ (System Analysis and Design - Term Project)",
      institution: "มหาวิทยาลัยราชภัฏบุรีรัมย์",
      period: "โครงการภาคเรียน",
      responsibilities: [
        "ออกแบบแผนภาพบริบท (Context Diagram) และกระแสข้อมูล (DFD Level 0-2)",
        "ออกแบบฐานข้อมูลความสัมพันธ์ด้วยแผนภาพ ERD (Entity-Relationship Diagram)",
        "วางโครงสร้างและพัฒนาฐานข้อมูลเชิงสัมพันธ์ MySQL",
        "ออกแบบและพัฒนาหน้าเว็บไซต์ด้วยหลักการ Responsive UI",
        "เทคโนโลยีที่ใช้หลัก: HTML, CSS, JavaScript, MySQL",
      ],
    },
    {
      title: "ระบบจัดการสมาชิก (Member Management System)",
      subtitle: "วิชาการพัฒนาแอปพลิเคชันอินเทอร์เน็ต (Internet Application Development)",
      institution: "มหาวิทยาลัยราชภัฏบุรีรัมย์",
      period: "โครงการภาคเรียน",
      responsibilities: [
        "ออกแบบและพัฒนาเว็บเซอร์วิส RESTful API สำหรับการทำงานฐานข้อมูล",
        "พัฒนาส่วนเชื่อมต่อ CRUD สำหรับจัดการข้อมูลผู้ใช้และสมาชิก",
        "สร้างระบบยืนยันตัวตนและความปลอดภัยการเข้าสู่ระบบ (Authentication)",
        "เทคโนโลยีที่ใช้หลัก: Node.js, Express, MySQL",
      ],
    },
  ];

  const internships = [
    {
      title: "นักศึกษาฝึกงาน - การบริการและการจัดการคลังสินค้า",
      subtitle: "บริษัท เซ็นทรัล เรสตอรองส์ กรุ๊ป จำกัด (CRG) - สาขา KFC",
      period: "มีนาคม 2565 - กันยายน 2565 (March 2022 - September 2022)",
      responsibilities: [
        "จัดการและควบคุมปริมาณคลังสินค้าวัตถุดิบ (Inventory Management)",
        "ประสานงานและดูแลงานด้านบริการลูกค้าหน้าร้าน (Customer Service)",
        "ตรวจสอบและรวบรวมเอกสารสต็อกสินค้าประจำวันประจำร้าน (Document Management)",
      ],
    },
    {
      title: "นักศึกษาฝึกงาน - สนับสนุนงานเอกสารและการบริการ",
      subtitle: "สำนักงานสรรพากรพื้นที่บุรีรัมย์ (Buriram Area Revenue Office)",
      period: "พฤษภาคม 2563 - กันยายน 2563 (May 2020 - September 2020)",
      responsibilities: [
        "คัดกรอง จัดเก็บ และจัดหมวดหมู่เอกสารราชการของสำนักงาน (Government Document)",
        "ช่วยเหลือและแนะนำข้อมูลการชำระภาษีเบื้องต้นแก่ผู้ใช้บริการ (Tax Support)",
        "ดูแลงานด้านบริการต้อนรับและอำนวยความสะดวกประชาชน (Customer Service)",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-24 bg-card relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C1121F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground"
          >
            ประสบการณ์ของฉัน
            <span className="block w-12 h-1 bg-[#C1121F] mx-auto mt-2 rounded" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-lg font-sans"
          >
            ประวัติการทำโปรเจกต์ภาคการศึกษาและการฝึกงานวิชาชีพจริง
          </motion.p>
        </div>

        {/* Experience Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Academic Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <span className="p-2.5 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/10 flex items-center justify-center text-[#C1121F]">
                <Code className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-bold font-heading text-foreground">
                โครงงานพัฒนาเว็บ (Academic Projects)
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {academicProjects.map((proj, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="glass border-border/80 relative overflow-hidden group hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 bg-background/50 h-full">
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-[#C1121F]" />
                    <CardContent className="p-6">
                      <span className="inline-block text-xs font-semibold text-[#C1121F] bg-[#C1121F]/10 px-2.5 py-1 rounded-full mb-3 font-heading">
                        {proj.period}
                      </span>
                      <h4 className="text-lg font-bold font-heading text-foreground mb-1 leading-snug">
                        {proj.title}
                      </h4>
                      <h5 className="text-sm font-semibold text-muted-foreground font-heading mb-4">
                        {proj.subtitle} — <span className="text-foreground/75 font-medium">{proj.institution}</span>
                      </h5>
                      <ul className="space-y-2">
                        {proj.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-sans">
                            <CheckCircle2 className="h-4.5 w-4.5 text-[#C1121F] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Internships */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <span className="p-2.5 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/10 flex items-center justify-center text-[#C1121F]">
                <Briefcase className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-bold font-heading text-foreground">
                ประสบการณ์ฝึกงาน (Professional Internships)
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {internships.map((intern, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="glass border-border/80 relative overflow-hidden group hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 bg-background/50 h-full">
                    <div className="absolute top-0 left-0 w-[4px] h-full bg-[#780000]" />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#780000] mb-3 font-heading">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{intern.period}</span>
                      </div>
                      <h4 className="text-lg font-bold font-heading text-foreground mb-1 leading-snug">
                        {intern.title}
                      </h4>
                      <h5 className="text-sm font-semibold text-muted-foreground font-heading mb-4">
                        {intern.subtitle}
                      </h5>
                      <ul className="space-y-2">
                        {intern.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-sans">
                            <CheckCircle2 className="h-4.5 w-4.5 text-[#780000] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
