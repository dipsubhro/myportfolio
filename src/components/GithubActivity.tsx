import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
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
  );
};

export default GithubActivity;
