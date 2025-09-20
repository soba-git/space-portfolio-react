import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Echo",
    description: "Real-time MERN chat app with secure messaging, chat rooms, and history.",
    image: "/public/img/echo.png",
    tags: ["MERN", "Socket.IO", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Linguin",
    description: "SaaS language learning platform with subscription monetization and interactive lessons.",
    image: "/projects/linguin.png",
    tags: ["React", "Node.js", "SaaS"],
    link: "#",
    github: "https://github.com/soba-git/linguin",
  },
  {
    id: 3,
    title: "PulseTrack",
    description: "Health tracker providing real-time monitoring, personalized insights, and alerts.",
    image: "/projects/pulsetrack.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    link: "#",
    github: "#",
  },
];


export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="max-w-5xl mx-auto container text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    My <span className="text-primary">Projects</span>
                </h2>

                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                    Here are some of the projects I've worked on recently.
                    Each project showcases my skills in various technologies and my ability to deliver high-quality solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card hover:bg-card-hover rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                            <div className="overflow-hidden h-50">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap mb-5 gap-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="font-medium text-xs bg-primary/20 text-secondary-foreground px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="space-x-3 flex">
                                        <a href={project.link} className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a target="_blank" href="https://github.com/soba-git" className="space-button mx-auto gap-2 w-fit flex items-center">Go To Github <ArrowRight size={16} /></a>

                </div>
                
            </div>
        </section>
    );
};