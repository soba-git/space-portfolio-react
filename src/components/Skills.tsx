import { useState, useRef, useLayoutEffect } from "react";

import { cn } from "../lib/utils";

const skillList = [
    // Frontend
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Next.js", level: 75, category: "frontend" },
    { name: "TailwindCSS", level: 80, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "Redux / State Mgmt", level: 75, category: "frontend" },

    // Backend
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Express.js", level: 70, category: "backend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "Django", level: 70, category: "backend" },
    { name: "Java", level: 80, category: "backend" },
    { name: "Spring Boot", level: 70, category: "backend" },
    { name: "REST APIs", level: 85, category: "backend" },
    { name: "GraphQL", level: 65, category: "backend" },

    // DevOps & Tools
    { name: "Git", level: 85, category: "devops" },
    { name: "GitHub / GitLab", level: 80, category: "devops" },
    { name: "Docker", level: 70, category: "devops" },
    { name: "Kubernetes", level: 60, category: "devops" },
    { name: "Jenkins", level: 65, category: "devops" },
    { name: "CI/CD Pipelines", level: 70, category: "devops" },

    // Cloud & Databases
    { name: "SQL", level: 75, category: "cloud-database" },
    { name: "PostgreSQL", level: 75, category: "cloud-database" },
    { name: "MongoDB", level: 70, category: "cloud-database" },
    { name: "Firebase", level: 65, category: "cloud-database" },
    { name: "Azure", level: 60, category: "cloud-database" },
    { name: "AWS", level: 65, category: "cloud-database" },
    

    // Other Skills
    { name: "Agile / Scrum", level: 80, category: "other" },
    { name: "Unit Testing (Jest/PyTest)", level: 70, category: "other" },
    { name: "Problem Solving / Algorithms", level: 85, category: "other" },
    { name: "System Design Basics", level: 65, category: "other" },
    { name: "UI/UX Principles", level: 75, category: "other" },
    { name: "Data Structures", level: 80, category: "other" },

]

const categories = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" },
    { name: "DevOps & Tools", value: "devops" },
    { name: "Cloud & Databases", value: "cloud-database" },
    { name: "Other", value: "other" },
]



export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const filteredSkills = skillList.filter(skill => activeCategory === "all" || skill.category === activeCategory);

    // Animation: auto height transition
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | "auto">(0);

    useLayoutEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.scrollHeight);
        }
    }, [filteredSkills.length, showAll, activeCategory]);

    // Only show 9 skills if not showing all
    const skillsToShow = showAll ? filteredSkills : filteredSkills.slice(0, 9);

    return (
        <section id="skills" className="container py-20 px-4 relative bg-secondary/50 rounded-lg">
            <div className="max-w-4xl mx-auto text-center z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center mb-8 space-x-4 gap-4">
                    {categories.map((category, key) => (
                        <button key={key} className={`px-4 py-2 rounded-full border border-primary text-sm font-medium transition-colors capitalize duration-300 hover:bg-primary hover:text-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                            ${activeCategory === category.value ? "bg-primary text-background" : "bg-background text-foreground"}`}
                            onClick={() => { setActiveCategory(category.value); setShowAll(false); }}>
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Animated skills grid */}
                <div
                    style={{
                        maxHeight: showAll ? height : 9999, // fallback for first render
                        transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1)",
                        overflow: "hidden"
                    }}
                >
                    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {skillsToShow.map((skill, key) => (
                            <div key={key} className="bg-card p-6 rounded-lg shadow-md card-hover">
                                <div className="text-left mb-4">
                                    <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-background/100 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-primary h-2 rounded-full transition-all duration-500 animate-[grow_1.5s_ease-out]"
                                        style={{ width: `${skill.level}%` }} />
                                </div>
                                <div className="text-xs text-muted-foreground mt-2 text-right">
                                    {skill.level}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Show More / Show Less Button */}
                {filteredSkills.length > 9 && (
                    <button
                        onClick={() => setShowAll(v => !v)}
                        className=
                            "space-button mt-8"    
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>
        </section>
    );
};