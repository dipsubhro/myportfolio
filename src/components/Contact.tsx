
import { Github, Linkedin, Instagram } from "lucide-react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-12 md:py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects.
          Feel free to reach out if you'd like to collaborate or just say hello!
        </p>

        <div className="mb-12">
          <Button
            asChild
            size="lg"
            className="rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto"
          >
            <a
              href="mailto:hi@subhro.tech"
            >
              Get In Touch
            </a>
          </Button>
        </div>
        {/*         
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-blue-100"
          >
            <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">
              GitHub
            </span>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-blue-100"
          >
            <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">
              LinkedIn
            </span>
          </a>
        </div>
        
        <div className="flex justify-center space-x-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-blue-100"
          >
            <X className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">
              Twitter
            </span>
          </a>
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-blue-100"
          >
            <Instagram className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">
              Instagram
            </span>
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-blue-200">
          <p className="text-gray-500 text-sm">
            © 2024 Your Name. Crafted with care and attention to detail.
          </p>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Contact;
