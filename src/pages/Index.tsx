
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import GithubActivity from "../components/GithubActivity";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
import FloatingNav from "../components/FloatingNav";
import VisitorCount from "../components/VisitorCount";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <VisitorCount />
      <FloatingNav />
      <Hero />
      <Projects />
      <Blogs />
      <TechStack />
      <GithubActivity />
      <Contact />
    </div>
  );
};

export default Index;
