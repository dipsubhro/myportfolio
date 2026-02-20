
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import GithubActivity from "../components/GithubActivity";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
import FloatingNav from "../components/FloatingNav";
import VisitorCount from "../components/VisitorCount";
import Section from "../components/Section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <VisitorCount />
      <FloatingNav />
      <Hero />
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences."
      >
        <Projects />
      </Section>
      <Section
        id="tech-stack"
        title="Tech Stack"
        subtitle="A curated collection of technologies and tools I use to build scalable, high-performance web applications."
      >
        <TechStack />
      </Section>
      <Section
        id="github-activity"
        title="GitHub Activity"
        subtitle="Here is a snapshot of my recent contributions on GitHub."
        className="bg-black"
      >
        <GithubActivity />
      </Section>
      <Section
        id="blogs"
        title="Writing"
        subtitle="Technical articles on system design, performance, and software engineering."
      >
        <Blogs />
      </Section>
      <Section
        id="contact"
        title="Let's Work Together"
        subtitle="I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just say hello!"
      >
        <Contact />
      </Section>
    </div>
  );
};

export default Index;
