"use client";

import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Developer Skills",
      icon: <Code2 className="h-6 w-6 text-[#C1121F]" />,
      skills: [
        "C",
        "Python",
        "Node.js",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6 text-[#C1121F]" />,
      skills: [
        "SQL",
        "MySQL",
        "Supabase",
      ],
    },
    {
      title: "Design & Development Tools",
      icon: <Wrench className="h-6 w-6 text-[#C1121F]" />,
      skills: [
        "Figma",
        "VS Code",
        "Cursor",
        "Postman",
        "Antigravity",
        "Claude",
        "Github",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative layout circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C1121F]/2 rounded-full blur-[120px] pointer-events-none" />

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
            ทักษะความสามารถ (Skills)
            <span className="block w-12 h-1 bg-[#C1121F] mx-auto mt-2 rounded" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-lg font-sans"
          >
            ความชำนาญการในการเขียนโปรแกรม ระบบจัดการฐานข้อมูล และซอฟต์แวร์เครื่องมือต่างๆ
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="h-full"
            >
              <Card className="glass border-border/80 h-full hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 bg-background/50 relative overflow-hidden group">
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C1121F]/60 group-hover:bg-[#C1121F] transition-colors duration-300" />

                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-xl bg-[#C1121F]/10 border border-[#C1121F]/10 flex items-center justify-center shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag Badge Grid */}
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                        className="text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl bg-background border border-border text-foreground/85 hover:text-foreground hover:border-[#C1121F] hover:bg-[#C1121F]/5 transition-all duration-300 font-heading cursor-default shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
