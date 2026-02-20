import { useEffect, useState, useCallback, useRef } from "react";
import { Home, FolderKanban, PenLine, Layers, Mail, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "tech-stack", label: "Stack", icon: Layers },
  { id: "github-activity", label: "GitHub", icon: Github },
  { id: "blogs", label: "Writing", icon: PenLine },
  { id: "contact", label: "Contact", icon: Mail },
];

const FloatingNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item, index) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              if (!isScrollingRef.current) {
                setActiveIndex(index);
              }
            }
          });
        },
        { threshold: [0.3, 0.5, 0.8] }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Show/hide based on scroll
  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(hideTimer);
      
      // Hide or fade after scrolling stops
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initially
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimer);
    };
  }, []);

  const scrollToSection = useCallback((id: string, index: number) => {
    isScrollingRef.current = true;
    setActiveIndex(index);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    
    // Resume intersection observer updates after scroll finishes
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, []);
  // ─── Rotary dial (Desktop: Right, Mobile: Bottom) ──────────────────────────────────────
  
  const ARC_RADIUS = isMobile ? 140 : 220; // Radius of the semicircle
  const ITEM_SPACING = isMobile ? 35 : 30; // Degrees between items

  // Get index offset relative to active
  const getIndexOffset = (index: number) => index - activeIndex;

  // Convert offset to x,y
  const getXY = (indexOffset: number) => {
    if (isMobile) {
      // Mobile: Bottom dial, active is straight up (-90 deg)
      const angleDeg = -90 + indexOffset * ITEM_SPACING;
      const rad = (angleDeg * Math.PI) / 180;
      return {
        x: Math.cos(rad) * ARC_RADIUS, 
        y: Math.sin(rad) * ARC_RADIUS,
      };
    } else {
      // Desktop: Right dial, active is straight left
      const angleDeg = indexOffset * ITEM_SPACING;
      const rad = (angleDeg * Math.PI) / 180;
      return {
        x: -Math.cos(rad) * ARC_RADIUS, 
        y: Math.sin(rad) * ARC_RADIUS,
      };
    }
  };

  const showMenu = isVisible || isHovered;

  return (
    <nav
      className={`fixed z-50 transition-all duration-700 ease-out ${
        showMenu
          ? (isMobile ? "opacity-100 translate-y-0" : "opacity-100 translate-x-0")
          : (isMobile ? "opacity-30 translate-y-12" : "opacity-30 translate-x-12")
      }`}
      style={{
        ...(isMobile ? { bottom: "0px", left: "50%" } : { top: "50%", right: "0px" }),
        height: 0,
        width: 0,
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Decorative center arc track */}
      <svg
        className="absolute pointer-events-none"
        style={isMobile ? {
          bottom: 0,
          left: -ARC_RADIUS,
          width: ARC_RADIUS * 2,
          height: ARC_RADIUS,
        } : {
          top: -ARC_RADIUS,
          right: 0,
          width: ARC_RADIUS,
          height: ARC_RADIUS * 2,
        }}
      >
        <defs>
          <linearGradient id="arcTrackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(148,163,184,0.02)" />
            <stop offset="50%" stopColor="rgba(148,163,184,0.15)" />
            <stop offset="100%" stopColor="rgba(148,163,184,0.02)" />
          </linearGradient>
        </defs>
        <path
          d={isMobile 
            ? `M 0 ${ARC_RADIUS} A ${ARC_RADIUS} ${ARC_RADIUS} 0 0 1 ${ARC_RADIUS * 2} ${ARC_RADIUS}` 
            : `M ${ARC_RADIUS} 0 A ${ARC_RADIUS} ${ARC_RADIUS} 0 0 0 ${ARC_RADIUS} ${ARC_RADIUS * 2}`
          }
          fill="none"
          stroke="url(#arcTrackGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Decorative center dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: 8,
          height: 8,
          ...(isMobile ? { bottom: -4, left: -4 } : { right: -4, top: -4 }),
          background: "rgba(148,163,184,0.2)",
          boxShadow: "0 0 10px rgba(148,163,184,0.2)",
        }}
      />

      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeIndex === index;
        const indexOffset = getIndexOffset(index);
        const { x, y } = getXY(indexOffset);
        
        // Calculate visibility and opacity based on angle
        const absOffset = Math.abs(indexOffset) * ITEM_SPACING;
        let itemOpacity = 1;
        if (absOffset > 75) {
          const excess = absOffset - 75;
          itemOpacity = Math.max(0, 1 - excess / 15); // fully transparent at 90+
        }
        
        // Disable pointer events if it's strongly faded out or off screen
        const isClickable = itemOpacity > 0.1 && (isMobile ? y <= 0 : x <= 0);

        return (
          <div
            key={item.id}
            className="absolute flex items-center justify-start"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
              transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              opacity: itemOpacity,
              pointerEvents: isClickable ? 'auto' : 'none',
              zIndex: isActive ? 10 : 5,
            }}
          >
            {/* Icon Button */}
            <button
              onClick={() => scrollToSection(item.id, index)}
              aria-label={item.label}
              className="group relative flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer"
              style={{
                width: isActive ? 48 : 40,
                height: isActive ? 48 : 40,
                background: isActive
                  ? "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.1) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: isActive
                  ? "1.5px solid rgba(59,130,246,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isActive
                  ? "0 0 24px rgba(59,130,246,0.3), inset 0 0 12px rgba(59,130,246,0.15)"
                  : "0 2px 8px rgba(0,0,0,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{
                    border: "1px solid rgba(59,130,246,0.3)",
                    transform: "scale(1.3)",
                    opacity: 0.6,
                  }}
                />
              )}
              <Icon
                className="transition-all duration-500"
                style={{
                  width: isActive ? 22 : 18,
                  height: isActive ? 22 : 18,
                  color: isActive ? "rgb(96,165,250)" : "hsl(var(--muted-foreground))",
                  filter: isActive ? "drop-shadow(0 0 6px rgba(59,130,246,0.5))" : "none",
                }}
              />
            </button>

            {/* Label naturally flows to the right or below depending on mobile */}
            <span
              className={`whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-500 ${
                isMobile 
                  ? "absolute top-12 left-1/2" 
                  : "ml-4"
              }`}
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive 
                  ? (isMobile ? "translateX(-50%)" : "translateX(0)") 
                  : (isMobile ? "translateX(-50%)" : "translateX(-8px)"),
                color: isActive ? "hsl(217, 91%, 60%)" : "hsl(var(--muted-foreground))",
                textShadow: isActive ? "0 0 20px rgba(59,130,246,0.4)" : "none",
              }}
            >
              {item.label}
            </span>

            {/* Hover Tooltip - also aligned to the right like the active text */}
            {!isActive && !isMobile && (
              <span
                className="absolute left-[calc(100%+16px)] whitespace-nowrap text-xs font-medium text-muted-foreground bg-card/90 border border-border/50 px-2.5 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none backdrop-blur-md"
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default FloatingNav;
