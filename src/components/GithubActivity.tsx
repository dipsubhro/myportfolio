import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section id="github-activity" className="py-12 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
          GitHub Activity
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is a snapshot of my recent contributions on GitHub.
        </p>

        <div className="w-full flex justify-center">
           <div className="w-full overflow-x-auto pb-4 px-2 scrollbar-none md:scrollbar-thin md:scrollbar-thumb-primary/20 md:scrollbar-track-transparent">
            <div className="min-w-[800px] mx-auto flex justify-center p-6 border border-border/40 rounded-xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
              <GitHubCalendar 
                username="dipsubhro"
                colorScheme="dark"
                fontSize={14}
                blockSize={13}
                blockMargin={4}
                style={{
                  color: "hsl(var(--foreground))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
