"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-[#C1121F]" />,
      label: "อีเมล",
      value: "teeraphon.pli@gmail.com",
      href: "mailto:teeraphon.pli@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-[#C1121F]" />,
      label: "เบอร์โทรศัพท์",
      value: "+66 63 005 6417",
      href: "tel:+66630056417",
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#C1121F]" />,
      label: "ที่อยู่",
      value: "อำเภอเมืองบุรีรัมย์, จังหวัดบุรีรัมย์, ประเทศไทย",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/teeraphonn?tab=projects",
      label: "GitHub",
      color: "hover:bg-foreground hover:text-background",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/teeraphon-plianram-aa5075422/",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
    },
  ];



  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#C1121F]/5 rounded-full blur-[120px] pointer-events-none" />

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
            ติดต่อฉัน (Contact)
            <span className="block w-12 h-1 bg-[#C1121F] mx-auto mt-2 rounded" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-lg font-sans"
          >
            ยินดีรับข้อมูลติดต่อกลับ หรือข้อความเพื่อพูดคุยแลกเปลี่ยนและร่วมงานกัน
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass border-border/80 bg-background/50 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C1121F] to-[#780000]" />
              <CardContent className="p-8 md:p-12 space-y-8 text-center md:text-left">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4 text-center">
                  ช่องทางการติดต่อตรง
                </h3>
                
                <p className="text-muted-foreground font-sans leading-relaxed text-center">
                  หากคุณมีข้อเสนอแนะ โครงการที่ต้องการพัฒนา หรือสนใจร่วมงานด้าน Full Stack พัฒนาเว็บแอปพลิเคชัน 
                  สามารถติดต่อผ่านอีเมล เบอร์โทรศัพท์ หรือโซเชียลมีเดียได้ทันทีครับ
                </p>

                <div className="space-y-6 pt-2">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="p-3 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/10 flex items-center justify-center shrink-0 text-[#C1121F]">
                        {info.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs text-muted-foreground font-sans font-medium mb-0.5">
                          {info.label}
                        </span>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-sans font-semibold hover:text-[#C1121F] transition-colors duration-300 break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-sans font-semibold break-words">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-border/50 text-center">
                  <h4 className="text-xs font-bold text-foreground font-heading uppercase tracking-wider mb-4">
                    โซเชียลมีเดีย
                  </h4>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:scale-110 cursor-pointer ${social.color}`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
