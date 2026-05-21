import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    name: "ESG Compliance Platform",
    description:
      "End-to-end SaaS for ESG reporting used by 20+ global organisations. Solo-responsible for frontend, API layer, database schema, and deployment. Introduced microservices architecture reducing inter-service latency from ~320ms to ~95ms.",
    tags: ["Angular 19", "Node.js", "PostgreSQL", "Strapi.js", "Docker"],
    metrics: [
      { label: "Latency", value: "95ms" },
      { label: "Orgs", value: "20+" },
      { label: "Uptime", value: "99%+" },
    ],
    link: null,
  },
  {
    name: "Carbon & BRSR Dashboards",
    description:
      "6 data-intensive ESG dashboards — carbon tracking, supplier audit, BRSR reporting — replacing manual Excel workflows for client sustainability teams. Built with reactive RxJS pipelines for real-time filtering.",
    tags: ["Angular 19", "RxJS", "NgRx", "Angular Material"],
    metrics: [
      { label: "Dashboards", value: "6" },
      { label: "API p95", value: "290ms" },
      { label: "Test cov.", value: "94%" },
    ],
    link: null,
  },
  {
    name: "UAE Healthcare Portal",
    description:
      "Patient-facing portal for a UAE hospital chain. Implemented JWT auth, geolocation-based hospital search, and Google Maps integration. Improved Lighthouse score from 54 to 78 via code-splitting and lazy loading.",
    tags: ["React.js", "Material UI", "Tailwind CSS", "REST APIs"],
    metrics: [
      { label: "Lighthouse", value: "54→78" },
      { label: "DAU", value: "200→510" },
      { label: "Team", value: "4 devs" },
    ],
    link: null,
  },
];

function ProjectCard({ project, delay }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal group bg-surface border border-border rounded-lg p-6 flex flex-col transition-all duration-200 hover:border-cobalt hover:-translate-y-0.5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-text-base tracking-tight leading-snug">
          {project.name}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-cobalt transition-colors ml-2 flex-shrink-0"
            aria-label="View project"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>

      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] text-muted border border-border px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-border">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <div className="text-sm font-semibold text-cobalt">{m.value}</div>
            <div className="text-[11px] text-muted">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal mb-12">
          <span className="font-mono text-xs text-cobalt tracking-wider uppercase mb-3 block">
            Selected Work
          </span>
          <h2 className="text-3xl font-semibold text-text-base tracking-snug mb-3">
            Projects
          </h2>
          <p className="text-muted text-sm max-w-md">
            Production systems built and maintained solo across two SaaS platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
