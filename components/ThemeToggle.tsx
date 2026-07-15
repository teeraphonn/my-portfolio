"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      if (active) setMounted(true);
    }, 0);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-transparent" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 text-foreground hover:bg-primary/10 transition-colors duration-300"
      aria-label="สลับโหมดมืด/สว่าง"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 transition-all duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-[#C1121F] transition-all duration-300 hover:-rotate-12" />
      )}
    </Button>
  );
}
