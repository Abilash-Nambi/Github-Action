import { useReveal } from "../hooks/useReveal";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Redefine Technologies",
    location: "Trivandrum",
    period: "June 2025 – Present",
    note: "Promoted from Junior Developer within first year",
    bullets: [
      "Sole developer on 2 production SaaS platforms — frontend, API, DB schema, deployment.",
      "Split monolithic Node.js service into 4 domain microservices; latency ~320ms → ~95ms.",
      "Refactored backend to Clean Architecture; API p95 response ~480ms → ~290ms (40% improvement).",
      "Built reusable Angular 19 component library cutting per-feature UI dev time by 3–4 hours.",
      "Achieved 94% unit test coverage on core ESG domain logic using Jest + Angular TestBed.",
      "Automated CI/CD with GitHub Actions; deployment time ~40 min → under 5 min.",
    ],
    stack: ["Angular 19", "Node.js", "PostgreSQL", "Strapi.js"],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Redefine Technologies",
    location: "Trivandrum",
    period: "July 2024 – June 2025",
    note: null,
    bullets: [
      "Primary developer on ESG SaaS platform serving 20+ global organisations.",
      "Rebuilt Node.js REST APIs for v5 upgrade; endpoint response time down ~50%.",
      "Automated ESG data aggregation & PDF reporting via Strapi.js; reporting cycle 5 days → 3.5 days.",
      "Resolved 30+ critical production bugs within SLA — 99%+ uptime over 3 months.",
      "Triaged 50+ bugs with QA team, reducing post-release defect rate.",
    ],
    stack: ["Angular", "Node.js", "PostgreSQL", "Strapi.js"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Prismatic Soft",
    location: "Remote",
    period: "May 2023 – June 2024",
    note: null,
    bullets: [
      "Built patient portal for UAE hospital chain; Lighthouse score 54 → 78.",
      "Implemented JWT auth, geolocation search, and Google Maps integration.",
      "Daily active sessions grew from ~200 to ~510 within 2 months of launch.",
      "Managed feature branches and PRs in a 4-person agile team.",
    ],
    stack: ["React.js", "Material UI", "Tailwind CSS"],
  },
];

function ExperienceItem({ item, isLast }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal relative pl-8">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 bottom-0 w-px bg-border" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cobalt bg-bg" />

      <div className="mb-10">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h3 className="text-base font-semibold text-text-base">{item.role}</h3>
          <span className="text-muted text-sm">·</span>
          <span className="text-sm text-muted">{item.company}</span>
          <span className="text-muted text-sm">·</span>
          <span className="text-sm text-muted">{item.location}</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-cobalt">{item.period}</span>
          {item.note && (
            <span className="font-mono text-[11px] text-muted border border-border px-2 py-0.5 rounded">
              {item.note}
            </span>
          )}
        </div>

        <ul className="space-y-1.5 mb-4">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-cobalt mt-1.5 flex-shrink-0">–</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {item.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] text-muted border border-border px-2 py-0.5 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useReveal();

  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal mb-12">
          <span className="font-mono text-xs text-cobalt tracking-wider uppercase mb-3 block">
            Career
          </span>
          <h2 className="text-3xl font-semibold text-text-base tracking-snug mb-3">
            Experience
          </h2>
        </div>

        <div className="max-w-2xl">
          {experience.map((item, i) => (
            <ExperienceItem
              key={item.role + item.period}
              item={item}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
