import {
    SiTypescript,
    SiPython,
    SiGo,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiSocketdotio,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiAmazonec2,
    SiAmazons3,
    SiAmazonecs,
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiNginx,
    SiLinux,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiCloudflare,
    SiNeovim,
    SiVercel,
    SiReactquery,
    SiHuggingface,
} from "react-icons/si";

const SiQdrant = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.2 15h2v2h-2v-2zm-3-2h2v2h-2v-2zm6-2h-3v-6h3c1.657 0 3 1.343 3 3s-1.343 3-3 3z" /> 
        <text x="12" y="17" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor">Q</text>
    </svg>
);
import { FaJava, FaAws } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IconType } from "react-icons";

interface TechItem {
    name: string;
    icon: IconType;
    color: string;
}

const TechStack = () => {
    const techCategories: { name: string; techs: TechItem[] }[] = [
        {
            name: "Languages",
            techs: [
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "Java", icon: FaJava, color: "#ED8B00" },
                { name: "Python", icon: SiPython, color: "#3776AB" },
                { name: "Go", icon: SiGo, color: "#00ADD8" },
                { name: "SQL", icon: SiMysql, color: "#4479A1" },
                { name: "HTML", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS", icon: SiCss3, color: "#1572B6" },
            ],
        },
        {
            name: "Frontend",
            techs: [
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
                { name: "Zustand", icon: TbBrandReactNative, color: "#764ABC" },
            ],
        },
        {
            name: "Backend & Databases",
            techs: [
                { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
                { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
                { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
                { name: "Redis", icon: SiRedis, color: "#DC382D" },
                { name: "Qdrant", icon: SiQdrant, color: "#D91656" },
            ],
        },
        {
            name: "Cloud & DevOps",
            techs: [
                { name: "AWS", icon: FaAws, color: "#FF9900" },
                { name: "Docker", icon: SiDocker, color: "#2496ED" },
                { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
                { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
                { name: "Nginx", icon: SiNginx, color: "#009639" },
                { name: "Linux", icon: SiLinux, color: "#FCC624" },
                { name: "Git", icon: SiGit, color: "#F05032" },
                { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
                { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
                { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
            ],
        },
        {
            name: "Tools",
            techs: [
                { name: "VS Code", icon: VscCode, color: "#007ACC" },
                { name: "Neovim", icon: SiNeovim, color: "#57A143" },
                { name: "Postman", icon: FaAws, color: "#FF6C37" },
                { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
                { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
            ],
        },
    ];

    return (
        <TooltipProvider delayDuration={100}>
            <div className="space-y-3">
                {techCategories.map((category, index) => (
                    <div key={index} className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {category.techs.map((tech, techIndex) => (
                            <Tooltip key={techIndex}>
                                <TooltipTrigger asChild>
                                    <div className="p-2 md:p-3 cursor-pointer">
                                        <tech.icon
                                            className="w-8 h-8 md:w-10 md:h-10"
                                            style={{ color: tech.color }}
                                        />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p className="font-medium">{tech.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default TechStack;
