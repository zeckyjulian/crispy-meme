import { ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Jigsaw Puzzle 2D",
        description: "Cozy Jigsaw Puzzle is a relaxing Unity-based puzzle game designed for casual play, combining simplicity with a soothing gameplay experience.",
        image: "/projects/project1.jpg",
        tags: ["Unity"],
        demoUrl: "#",
        githubUrl: "#,"
    },
    {
        id: 2,
        title: "Dashboard Pembayaran Listrik",
        description: "A web application for managing electicity bills and payments.",
        image: "/projects/project2.png",
        tags: ["CodeIgniter", "PHP", "MySql", "Bootstrap", "Javascript"],
        demoUrl: "#",
        githubUrl: "#,"
    },
    {
        id: 3,
        title: "E-Commerce",
        description: "A modern e-commerce website for fashion.",
        image: "/projects/project3.png",
        tags: ["Laravel", "PHP", "MySql", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "#,"
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects, developed with precision and a strong focus on usability, performance, and design.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank" 
                        href="https://github.com/zeckyjulian"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}