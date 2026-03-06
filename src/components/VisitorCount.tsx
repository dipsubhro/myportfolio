import { useEffect, useState, useRef } from "react";
import { Eye } from "lucide-react";
import { useSpring, useTransform, motion } from "framer-motion";

const VISITOR_API = "https://visitor-counter.sbhrdpsinha.workers.dev/";

const VisitorCount = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const spring = useSpring(0, { duration: 1500 });
  const display = useTransform(spring, (value) =>
    Math.floor(value).toLocaleString()
  );

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch(VISITOR_API);
        const data = await response.json();
        setCount(data.visits);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchVisits();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);

      if (!shouldAnimate && count !== null) {
        setShouldAnimate(true);
        spring.set(count);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [shouldAnimate, spring, count]);

  if (count === null) return null;

  return (
    <div
      className={`fixed top-6 left-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg">
        <Eye className="w-4 h-4 text-muted-foreground" />
        <motion.span className="text-sm font-medium text-foreground">
          {display}
        </motion.span>
      </div>
    </div>
  );
};

export default VisitorCount;
