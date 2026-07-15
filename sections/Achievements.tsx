"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Award, Code, CheckCircle, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CounterProps {
  value: number;
  decimals?: number;
  duration?: number;
}

function Counter({ value, decimals = 0, duration = 1.5 }: CounterProps) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const totalSteps = 60 * duration;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      const easeProgress = progress * (2 - progress); // Ease out quad
      const nextCount = start + easeProgress * (end - start);
      
      setCount(nextCount);

      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}</span>;
}

export function Achievements() {
  const stats = [
    {
      icon: <GraduationCap className="h-6 w-6 text-[#C1121F]" />,
      label: "เกรดเฉลี่ยสะสม ปวส.",
      subLabel: "วิทยาลัยเทคนิคบุรีรัมย์",
      value: 3.81,
      decimals: 2,
      suffix: "",
    },
    {
      icon: <Award className="h-6 w-6 text-[#C1121F]" />,
      label: "เกรดเฉลี่ย ป.ตรี",
      subLabel: "มหาวิทยาลัยราชภัฏบุรีรัมย์",
      value: 3.05,
      decimals: 2,
      suffix: "",
    },
    {
      icon: <Code className="h-6 w-6 text-[#C1121F]" />,
      label: "ผลงานโครงการทั้งหมด",
      subLabel: "เว็บแอปพลิเคชัน & แบ็คเอนด์",
      value: 12,
      decimals: 0,
      suffix: "+",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#C1121F]" />,
      label: "ประสบการณ์ฝึกงาน",
      subLabel: "หน่วยงานรัฐ & ภาคเอกชน",
      value: 2,
      decimals: 0,
      suffix: " ครั้ง",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background soft grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Achievements Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="glass border-border/80 text-center hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 bg-background/50 h-full overflow-hidden group">
                <CardContent className="p-6 md:p-8 flex flex-col items-center">
                  
                  {/* Metric Icon */}
                  <div className="p-3.5 rounded-2xl bg-[#C1121F]/10 border border-[#C1121F]/10 flex items-center justify-center text-[#C1121F] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  {/* Counter Value */}
                  <div className="text-3xl md:text-4xl font-extrabold font-heading text-foreground tracking-tight mb-2">
                    <Counter value={stat.value} decimals={stat.decimals} />
                    {stat.suffix}
                  </div>

                  {/* Labels */}
                  <h3 className="text-sm font-bold font-heading text-foreground mb-1">
                    {stat.label}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground font-sans">
                    {stat.subLabel}
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
