import { useEffect, useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { CloudBackground } from "../components/CloudBackground";
import { Footer } from "../components/Footer";

export const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }

        // observer untuk memantau perubahan class di <html>
        const observer = new MutationObserver(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}

            <ThemeToggle />

            {/* Background Effects */}

            {isDarkMode ? <StarBackground /> : <CloudBackground />}

            {/* Navbar */}

            <Navbar />

            {/* Main Content */}

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}

            <Footer />

        </div>
    );
}