"use client";

import * as React from "react";

export function useActiveSection(sectionIds: string[], offset = 160) {
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      // Add standard scroll offset to account for sticky header height
      const scrollPosition = window.scrollY + offset;

      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
