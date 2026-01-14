import { ExternalLink, Github } from "lucide-react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const cards = projects.map((project, index) => (
    <Card key={project.title} card={project} index={index} />
  ));

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>
        <Carousel items={cards} autoScroll={true} speed={0.5} />
      </div>
    </section>
  );
};

const ProjectContent = ({ project }: { project: any }) => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-primary">
          {project.title}
        </span>{" "}
        <span className="text-gray-300">- {project.description}</span>
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8 max-w-3xl mx-auto">
        {project.technologies.map((tech: string, index: number) => (
          <Badge key={index} variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20 border-none">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4 mb-8 max-w-3xl mx-auto">
        {project.liveLink && (
           <Button asChild className="gap-2">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
           </Button>
        )}
        {project.githubLink && (
          <Button variant="outline" asChild className="gap-2 border-primary text-primary hover:bg-primary hover:text-black">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        )}
      </div>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-contain rounded-xl shadow-lg"
      />
    </div>
  );
};

const projects = [
  {
    category: "Web Development",
    title: "SubTerm",
    src: "/subterm.png",
    content: <ProjectContent project={{
      title: "SubTerm",
      description: "A web-based IDE featuring a text editor, file browser, and terminal—running on your own virtual machine",
      image: "/subterm.png",
      technologies: ["Vite", "AceEditor", "Node-pty", "EC2"],
      liveLink: "https://subterm.duckdns.org",
      githubLink: "https://github.com/dipsubhro/subterm-frontend",
      demoLink: "https://x.com/Dipsubhro12/status/1926130395793297551"
    }} />,
  },
  {
    category: "AI Application",
    title: "PDFChat-AI",
    src: "/pdfChat.png",
    content: <ProjectContent project={{
      title: "PDFChat-AI",
      description: "A web app to extract content from your PDFs and chat with AI for context-aware insights tailored to your documents.",
      image: "/pdfChat.png",
      technologies: ["LangChain", "Qdrant", "BullMQ", "Next.js"],
      liveLink: "https://pdf-ai-chi.vercel.app/",
      githubLink: "https://github.com/dipsubhro/pdf-AI",
      demoLink: "https://x.com/Dipsubhro12/status/1920925360847229382"
    }} />,
  },
  {
    category: "E-Commerce",
    title: "Reseller",
    src: "/ecom.png",
    content: <ProjectContent project={{
      title: "Reseller",
      description: "A complete Ecom platform where users can list their products for reselling, and others can purchase them through a shared link.",
      image: "/ecom.png",
      technologies: ["Next.js", "MongoDB", "Clerk"],
      liveLink: "",
      githubLink: "https://github.com/dipsubhro/reseller",
      demoLink: ""
    }} />,
  },
  {
    category: "Tool",
    title: "QuikType",
    src: "/quicktype.png",
    content: <ProjectContent project={{
      title: "QuikType",
      description: "A responsive typing speed test application with real-time WPM calculation, accuracy tracking, and performance analytics.",
      image: "/quicktype.png",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      liveLink: "https://quiktype-one.vercel.app/",
      githubLink: "https://github.com/dipsubhro/quiktype",
      demoLink: ""
    }} />,
  },
  {
    category: "CLI Tool",
    title: "Boiling-Code",
    src: "/boil.png",
    content: <ProjectContent project={{
      title: "Boiling-Code",
      description: "An npm tool that allows you to generate boilerplate code and code snippets directly in your terminal.",
      image: "/boil.png",
      technologies: ["Node.js", "Commander", "Chalk"],
      liveLink: "https://www.npmjs.com/package/boiling-code",
      githubLink: "https://github.com/dipsubhro/cli-tool-boilerplate",
      demoLink: "https://x.com/Dipsubhro12/status/1921658218062712901"
    }} />,
  },
  {
    category: "Cloud & AI",
    title: "AI Image Rekognizer",
    src: "/rekognizer.png",
    content: <ProjectContent project={{
      title: "AI Image Rekognizer",
      description: "An AI-powered image recognition application built with AWS Lambda and Terraform.",
      image: "/rekognizer.png",
      technologies: ["React", "AWS Lambda", "Terraform"],
      liveLink: "https://rekognizer.netlify.app",
      githubLink: "https://github.com/dipsubhro/rekognizer",
      demoLink: ""
    }} />,
  }
];

export default Projects;
