
import { Github, Linkedin, Instagram } from "lucide-react";
import { X } from "lucide-react";

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

        <h1 className="text-4xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-600 font-medium">Subhro</span>
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm a full-stack developer who builds smart, user-focused web apps using modern technologies. From AI tools to full-featured platforms, I turn ideas into fast, functional, and scalable solutions.
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
          <a
            href="#projects"
            className="inline-block w-48 text-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-48 text-center px-8 py-3 bg-secondary text-foreground rounded-full hover:bg-secondary/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-border"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
