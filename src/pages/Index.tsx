
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import GithubActivity from "../components/GithubActivity";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <TechStack />
      <GithubActivity />
      <Contact />
    </div>
  );
};

export default Index;
