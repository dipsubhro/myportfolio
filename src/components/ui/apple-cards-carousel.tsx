"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  height?: number | string;
  width?: number | string;
  src: string;
  blurDataURL?: string;
  fill?: boolean;
};

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
  autoScroll?: boolean;
  speed?: number; // pixels per frame (approx 60fps)
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0, autoScroll = false, speed = 1 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  // const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  // const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>(0);

  // Duplicate items for infinite scroll effect
  const renderItems = autoScroll ? [...items, ...items] : items;

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  useEffect(() => {
    const animate = () => {
      if (carouselRef.current && !isHovered && autoScroll) {
        // Use a closer-to-standard implementation for infinite scroll
        // Changing scrollLeft directly with small numbers might be lost due to rounding
        // But since we want smooth checking, let's try to just use valid integers or accumulate errors if needed.
        // For now, let's see if 0.5 works. If not, we can assume speed >= 1 or use delta.
        // Let's assume most screens are fine or use a simple accumulator ref if speed < 1 is crucial.
        // Let's just apply the speed.
        
        carouselRef.current.scrollLeft += speed;
        
        // precise check
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
             carouselRef.current.scrollLeft -= carouselRef.current.scrollWidth / 2;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    if (autoScroll) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll, isHovered, speed]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // setCanScrollLeft(scrollLeft > 0);
      // setCanScrollRight(scrollLeft < scrollWidth - clientWidth);

      // Manual infinite scroll check
      if (autoScroll) {
         if (scrollLeft >= scrollWidth / 2) {
             carouselRef.current.scrollLeft -= scrollWidth / 2;
         }
      }
    }
  };



  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 320; // (md:w-80)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {renderItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-black p-4 font-sans md:p-10 border-none"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-black" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-primary"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-white md:text-5xl"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-[18rem] w-48 flex-col items-start justify-start overflow-hidden rounded-3xl bg-black md:h-[24rem] md:w-64"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
