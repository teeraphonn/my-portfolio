"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    // Hide loading screen after 1.6 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999999] bg-[#0A0A0C] flex flex-col items-center justify-center text-white"
        >
          {/* Logo Animation */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-1.5 font-heading text-2xl md:text-3xl font-extrabold tracking-tight mb-4"
            >
              <span>Teeraphon</span>
              <span className="text-[#C1121F]">.dev</span>
            </motion.div>

            {/* Premium Loader Bar */}
            <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-[#C1121F] rounded-full"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[9px] text-white/30 font-heading tracking-widest uppercase mt-4 block"
            >
              กำลังเข้าสู่เว็บไซต์พอร์ตโฟลิโอ...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
