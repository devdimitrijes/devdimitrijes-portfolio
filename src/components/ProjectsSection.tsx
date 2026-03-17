import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Fitness Coaching Services",
    description:
      "A responsive website for a fitness coaching service. Focused on clean layout, good structure, and modern CSS practices.",
    link: "https://github.com/devdimitrijes/Fitness-coaching-services",
  },
  {
    name: "Fuel Calculator",
    description:
      "A simple ASP.NET Core MVC web application designed to help users track their vehicle's fuel consumption.",
    link: "https://github.com/devdimitrijes/Fuel-Calculator",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        My projects
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* GitHub profile link */}
        <a
          href="https://github.com/devdimitrijes"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-4 border-[3px] border-primary rounded-lg bg-secondary text-secondary-foreground p-8 hover:border-primary-dark hover:bg-secondary/80 transition-all duration-500"
        >
          <Github className="w-12 h-12 group-hover:scale-90 transition-transform" />
          <div className="text-center">
            <p className="text-xl font-bold">GitHub</p>
            <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              All projects are on GitHub!
            </p>
          </div>
        </a>

        {/* Highlighted projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-[3px] border-primary rounded-lg p-6 hover:border-primary-dark hover:bg-muted transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-primary">{project.name}</h3>
                <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
