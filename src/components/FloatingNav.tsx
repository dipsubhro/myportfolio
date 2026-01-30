import { useEffect, useState } from "react";
import { Home, FolderKanban, PenLine, Layers, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "blogs", label: "Writing", icon: PenLine },
  { id: "tech-stack", label: "Stack", icon: Layers },
  { id: "contact", label: "Contact", icon: Mail },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [hasPeeked, setHasPeeked] = useState(false);

  // Initial peek animation on page load
  useEffect(() => {
    const peekTimer = setTimeout(() => {
      setIsVisible(true);
      const hideTimer = setTimeout(() => {
        if (window.scrollY <= 100) {
          setIsVisible(false);
        }
        setHasPeeked(true);
      }, 2000);
      return () => clearTimeout(hideTimer);
    }, 500);

    return () => clearTimeout(peekTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero (or keep visible after peek)
      if (hasPeeked) {
        setIsVisible(window.scrollY > 100);
      }

      // Determine active section
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPeeked]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-1/2 right-6 -translate-y-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col items-center gap-1 px-2 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="relative group">
              <button
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                className={`p-2 rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
              <span className="absolute top-1/2 right-full -translate-y-1/2 mr-2 px-2 py-1 text-xs font-medium text-foreground bg-card border border-border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FloatingNav;
