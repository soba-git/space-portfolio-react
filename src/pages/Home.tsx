import { useState, useEffect } from "react"
import { ThemeToggle } from "../components/ThemeToggle"
import { SpaceBackground } from "../components/SpaceBackground"
import { LightBackground } from "../components/LightBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutMe"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { ContactMe } from "../components/ContactMe"
import { Footer } from "../components/Footer"

export const Home = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pr-16">
    <div>
      <Navbar/>
      <ThemeToggle />
    </div>
    

    {isDark ? <SpaceBackground /> : <LightBackground />}

    {/* Main Content */}  
    <main>
       <HeroSection/>
       <AboutMe/>
       <Skills/>
       <Projects/>
       <ContactMe/>
      
    </main>

    <Footer />
    </div>

    
  )
}