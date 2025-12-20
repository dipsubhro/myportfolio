import { Badge } from "@/components/ui/badge";

const TechStack = () => {
    const techCategories = [
        {
            name: "Languages",
            techs: ["TypeScript", "Python", "Golang", "SQL", "HTML/CSS"],
        },
        {
            name: "Frameworks & Libraries",
            techs: ["React", "Next.js", "Node.js", "Express.js", "BullMQ", "Socket.IO"],
        },
        {
            name: "Cloud & DevOps",
            techs: ["Docker", "AWS (EC2, S3, ECS)", "Redis", "Terraform", "Nginx"],
        },
        {
            name: "Developer Tools",
            techs: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
        },
        {
            name: "Databases",
            techs: ["MongoDB", "PostgreSQL", "Redis"],
        },
    ];

    return (
        <section id="tech-stack" className="py-12 md:py-20 px-6 lg:px-8 bg-background">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 tracking-tight">
                    Tech Stack
                </h2>

                <div className="space-y-4">
                    {techCategories.map((category, index) => (
                        <div key={index} className="flex flex-wrap justify-center gap-4">
                            {category.techs.map((tech, techIndex) => (
                                <Badge
                                    key={techIndex}
                                    variant="secondary"
                                    className="text-sm py-2 px-4 md:text-md md:py-3 md:px-6 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
