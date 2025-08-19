import { useState } from "react"
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    {name: "HTML/CSS", level: "Advanced", category: "frontend"},
    {name: "Javascript", level: "Intermediate", category: "frontend"},
    {name: "Bootstrap", level: "Advanced", category: "frontend"},
    {name: "React", level: "Beginner", category: "frontend"},

    // Backend
    { name: "PHP", level: "Intermediate", category: "backend" },
    { name: "Laravel", level: "Advanced", category: "backend" },
    { name: "CodeIgniter", level: "Intermediate", category: "backend" },
    { name: "MySql", level: "Intermediate", category: "backend" },
    { name: "Python", level: "Intermediate", category: "backend" },
    { name: "Golang", level: "Beginner", category: "backend" },

    // Tools
    { name: "Git/Github", level: "Intermediate", category: "tools" },
    { name: "VS Code", level: "Advanced", category: "tools" },
    { name: "Unity", level: "Intermediate", category: "tools" },
    { name: "Postman", level: "Beginner", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-4 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-warp justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        > 
                            {category} 
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill }}
                                >
                                </div>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};