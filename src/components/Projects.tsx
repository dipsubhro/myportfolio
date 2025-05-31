
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    title: "SubTerm",
    description: "A web-based IDE featuring a text editor, file browser, and terminal—running on your own virtual machine",
    image: "/subterm.png",
    technologies: ["Vite", "AceEditor", "Node-pty", "EC2"],
    liveLink: "https://subterm.duckdns.org",
    githubLink: "https://github.com/dipsubhro/subterm-frontend",
    demoLink: "https://x.com/Dipsubhro12/status/1926130395793297551"
  },
  {
    title: "PDFChat-AI",
    description: "A web app to extract content from your PDFs and chat with AI for context-aware insights tailored to your documents.",
    image: "/pdfChat.png",
    technologies: ["LangChain", "Qdrant", "BullMQ", "Next.js"],
    liveLink: "https://pdf-ai-chi.vercel.app/",
    githubLink: "https://github.com/dipsubhro/pdf-AI",
    demoLink: "https://x.com/Dipsubhro12/status/1920925360847229382"
  },
  {
    title: "Reseller",
    description: "A complete Ecom platform where users can list their products for reselling, and others can purchase them through a shared link.",
    image: "/ecom.png",
    technologies: ["Next.js", "MongoDB", "Clerk"],
    liveLink: "",
    githubLink: "https://github.com/dipsubhro/reseller",
    demoLink: ""
  },
  {
    title: "QuikType",
    description: "A responsive typing speed test application with real-time WPM calculation, accuracy tracking, and performance analytics.",
    image: "/quicktype.png",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    liveLink: "https://quiktype-one.vercel.app/",
    githubLink: "https://github.com/dipsubhro/quiktype",
    demoLink: ""
  },
  {
    title: "Boiling-Code",
    description: "An npm tool that allows you to generate boilerplate code and code snippets directly in your terminal.",
    image: "/boil.png",
    technologies: ["Node.js","Commander","Chalk"],
    liveLink: "https://www.npmjs.com/package/boiling-code",
    githubLink: "https://github.com/dipsubhro/cli-tool-boilerplate",
    demoLink: "https://x.com/Dipsubhro12/status/1921658218062712901"
  },
  {
    title: "Presento",
    description: "An AI-powered presentation creator that generates slides based on user-provided context. Currently in development.",
    image: "/presento.png",
    technologies: ["Next.js"],
    liveLink: "",
    githubLink: "",
    demoLink: ""
  }
];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-blue-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group hover:scale-105 border border-blue-50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 group/btn"
                      title="Live Site"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300 group/btn"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300 hover:underline"
                  >
                   Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
