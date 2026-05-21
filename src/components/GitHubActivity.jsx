import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

const GITHUB_USERNAME = "abilashn2704";

export default function GitHubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const headerRef = useReveal();

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=public`
    )
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.json();
      })
      .then((data) => {
        setRepos(
          data
            .filter((r) => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4)
        );
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal mb-10">
          <span className="font-mono text-xs text-cobalt tracking-wider uppercase mb-3 block">
            Open Source
          </span>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-text-base tracking-snug">
              GitHub
            </h2>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-cobalt transition-colors font-mono"
            >
              @{GITHUB_USERNAME} →
            </a>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-surface border border-border rounded-lg p-5 animate-pulse h-24"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="text-muted text-sm font-mono">
            Could not load repositories — view them at{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cobalt hover:underline"
            >
              github.com/{GITHUB_USERNAME}
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface border border-border rounded-lg p-5 hover:border-cobalt hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-text-base group-hover:text-cobalt transition-colors">
                    {repo.name}
                  </h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-muted flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M4 10L10 4M10 4H5M10 4v5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {repo.description && (
                  <p className="text-muted text-xs leading-relaxed mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                )}

                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="font-mono text-[11px] text-cobalt">
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-[11px] text-muted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5 3 10.5l.6-3.2L1.2 5l3.3-.5z" />
                    </svg>
                    {repo.stargazers_count}
                  </span>
                  {repo.forks_count > 0 && (
                    <span className="text-[11px] text-muted">{repo.forks_count} forks</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
