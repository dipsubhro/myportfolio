import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={`h-[100dvh] w-full snap-start snap-always flex flex-col justify-center px-4 md:px-8 bg-background overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
