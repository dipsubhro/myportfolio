
import { Github, Linkedin, Instagram } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="h-[100dvh] w-full snap-start snap-always flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-muted shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-foreground/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-110 active:shadow-[0_0_35px_rgba(255,255,255,0.7)]">
              <img
                src="/me.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
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

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-36 sm:w-48 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href="#projects">
              View My Work
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-36 sm:w-48 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border"
          >
            <a
              href="/resume4subhro9.pdf"
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
