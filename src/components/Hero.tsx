
import { Github, Linkedin, Instagram } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-blue-200">
              <img
                src="/me.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Hi, I'm <span className="text-foreground">Subhro</span>
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          I am a Full-stack developer building scalable web applications with a focus on cloud-native AWS deployments. My expertise lies in designing high-performance, concurrent backend services that drive fast and functional digital solutions.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/dipsubhro"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-border"
          >
            <Github className="w-6 h-6 text-foreground group-hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/subhradip-sinha-8a31b9277/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-border"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a
            href="https://x.com/Dipsubhro12?t=HwytE8lR6_Iz_cu1lhqu3A&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-border"
          >
            <X className="w-6 h-6 text-foreground group-hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/dips_ubhro?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-border"
          >
            <Instagram className="w-6 h-6 text-foreground group-hover:text-blue-600 transition-colors duration-300" />
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-48 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href="#projects">
              View My Work
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-48 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border"
          >
            <a
              href="/resume4subhro2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
