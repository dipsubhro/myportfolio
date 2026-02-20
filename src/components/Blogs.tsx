import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogEntry {
  title: string;
  date: string;
  summary: string;
  href: string;
}

const HASHNODE_GQL_ENDPOINT = "https://gql.hashnode.com";
const HASHNODE_USERNAME = "DipSubhro";

const query = `
  query GetUserPosts($username: String!) {
    user(username: $username) {
      publications(first: 1) {
        edges {
          node {
            posts(first: 3) {
              edges {
                node {
                  title
                  brief
                  publishedAt
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(HASHNODE_GQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: { username: HASHNODE_USERNAME },
          }),
        });

        const data = await response.json();
        
        const posts = data?.data?.user?.publications?.edges?.[0]?.node?.posts?.edges || [];
        
        const formattedBlogs: BlogEntry[] = posts.map((edge: any) => ({
          title: edge.node.title,
          date: formatDate(edge.node.publishedAt),
          summary: edge.node.brief,
          href: edge.node.url,
        }));

        setBlogs(formattedBlogs);
      } catch (err) {
        setError("Failed to load blog posts");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="py-6 border-b border-border first:border-t animate-pulse">
              <div className="h-5 bg-muted rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || blogs.length === 0) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-0">
        {blogs.map((entry, index) => (
          <article
            key={index}
            className="group py-6 border-b border-border first:border-t"
          >
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                  {entry.title}
                </h3>
                <time className="text-sm text-muted-foreground whitespace-nowrap">
                  {entry.date}
                </time>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                {entry.summary}
              </p>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <a
          href={`https://hashnode.com/@${HASHNODE_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all posts
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Blogs;
