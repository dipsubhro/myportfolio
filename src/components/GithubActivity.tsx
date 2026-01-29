import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section id="github-activity" className="py-24 md:py-48 px-4 md:px-8 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          GitHub <span className="text-primary">Activity</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Here is a snapshot of my recent contributions on GitHub.
        </p>

        <div className="w-full flex justify-center">
           <div className="w-full overflow-x-auto pb-4 px-2 scrollbar-none">
            <div className="min-w-[800px] mx-auto flex justify-center">
              <GitHubCalendar 
                username="dipsubhro"
                colorScheme="dark"
                fontSize={14}
                blockSize={13}
                blockMargin={4}
                blockRadius={7}
                theme={{
                  dark: ['#1a1a2e', '#16213e', '#1e3a5f', '#3b82f6', '#60a5fa']
                }}
                style={{
                  color: "white",
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
