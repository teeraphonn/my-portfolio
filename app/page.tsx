"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { CustomCursor } from "@/components/CustomCursor";

// Sections
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { Certifications } from "@/sections/Certifications";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";

import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Premium Loading Screen */}
      <LoadingScreen />

      {/* Global Aesthetics / Navigation Helpers */}
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      <Navbar />

      {/* Floating Left Sidebar (Desktop Only) */}
      <div className="hidden xl:flex fixed bottom-0 left-10 z-40 flex-col items-center gap-6">
        <div className="flex flex-col gap-5 text-muted-foreground">
          <a
            href="https://github.com/teeraphonn?tab=projects"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C1121F] hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/teeraphon-plianram-aa5075422/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C1121F] hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        {/* Vertical divider line */}
        <div className="w-[1px] h-28 bg-border" />
      </div>

      {/* Main Page Layout */}
      <main className="flex-1 w-full flex flex-col bg-background">
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
