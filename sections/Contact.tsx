"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Facebook, Linkedin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

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
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/teeraphon.ohms",
      label: "Facebook",
      color: "hover:bg-blue-500 hover:text-white",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
                ช่องทางการติดต่อตรง
              </h3>
              
              <p className="text-muted-foreground font-sans leading-relaxed">
                หากคุณมีข้อเสนอแนะ โครงการที่ต้องการพัฒนา หรือสนใจร่วมงานด้าน Full Stack พัฒนาเว็บแอปพลิเคชัน 
                สามารถส่งอีเมล โทรติดต่อ หรือกรอกฟอร์มส่งรายละเอียดได้ทันทีครับ
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/10 flex items-center justify-center shrink-0 text-[#C1121F]">
                      {info.icon}
                    </div>
                    <div className="flex flex-col">
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
            </div>

            {/* Social Icons inside left column */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-border/50">
              <h4 className="text-xs font-bold text-foreground font-heading uppercase tracking-wider mb-4">
                โซเชียลมีเดีย
              </h4>
              <div className="flex gap-4">
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
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <Card className="glass border-border/80 bg-background/50 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C1121F] to-[#780000]" />
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold font-heading text-foreground">
                      ชื่อของคุณ <span className="text-[#C1121F]">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="กรอกชื่อ-นามสกุลของคุณ"
                      className="rounded-xl border-border bg-background/60 focus:border-[#C1121F] focus:ring-[#C1121F]/20 transition-all font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold font-heading text-foreground">
                      อีเมลติดต่อกลับ <span className="text-[#C1121F]">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="example@domain.com"
                      className="rounded-xl border-border bg-background/60 focus:border-[#C1121F] focus:ring-[#C1121F]/20 transition-all font-sans"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold font-heading text-foreground">
                      ข้อความ / รายละเอียดงาน <span className="text-[#C1121F]">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      placeholder="เขียนรายละเอียดข้อความที่ต้องการส่งติดต่อฉัน..."
                      className="rounded-xl border-border bg-background/60 focus:border-[#C1121F] focus:ring-[#C1121F]/20 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button & Animations */}
                  <div className="relative pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className={`w-full rounded-full py-6 font-semibold font-heading hover:scale-[1.01] transition-all duration-300 cursor-pointer ${
                        isSuccess
                          ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                          : "bg-[#C1121F] hover:bg-[#780000] text-white"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>กำลังส่งข้อความ...</span>
                        </div>
                      ) : isSuccess ? (
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-2 justify-center"
                        >
                          <CheckCircle className="h-5 w-5 text-white" />
                          <span>ส่งข้อความสำเร็จ! (ขอบคุณครับ)</span>
                        </motion.div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <span>ส่งข้อความ</span>
                          <Send className="h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  </div>

                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
