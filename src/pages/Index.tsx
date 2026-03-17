import { useState, useEffect } from "react";
import Header from "@/components/Header";
import WhyMeSection from "@/components/WhyMeSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <WhyMeSection isDark={isDark} />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
    </div>
  );
};

export default Index;
