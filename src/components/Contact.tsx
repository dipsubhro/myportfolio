import { Github, Linkedin, Instagram } from "lucide-react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="mb-12 text-center">
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
  );
};

export default Contact;
