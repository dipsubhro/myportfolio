import { ExternalLink, Github } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import AutoScroll from "embla-carousel-auto-scroll";

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
      technologies: ["Node.js", "Commander", "Chalk"],
      liveLink: "https://www.npmjs.com/package/boiling-code",
      githubLink: "https://github.com/dipsubhro/cli-tool-boilerplate",
      demoLink: "https://x.com/Dipsubhro12/status/1921658218062712901"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-border group">
                  <div className="relative overflow-hidden shrink-0 h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-2">
                      {project.liveLink && (
                        <Button asChild size="icon" variant="default" className="h-8 w-8">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Site"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button asChild size="icon" variant="secondary" className="h-8 w-8">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
