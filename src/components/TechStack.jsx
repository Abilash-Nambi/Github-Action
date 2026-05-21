import { useReveal } from "../hooks/useReveal";

const stack = [
  { name: "Angular", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "RxJS", category: "Frontend" },
  { name: "NgRx", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Strapi.js", category: "CMS" },
  { name: "Jest", category: "Testing" },
];

const categoryColor = {
  Frontend: "text-cobalt border-cobalt/30 bg-cobalt/5",
  Backend: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  Database: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  Language: "text-violet-400 border-violet-400/30 bg-violet-400/5",
  Styling: "text-pink-400 border-pink-400/30 bg-pink-400/5",
  DevOps: "text-orange-400 border-orange-400/30 bg-orange-400/5",
  CMS: "text-teal-400 border-teal-400/30 bg-teal-400/5",
  Testing: "text-red-400 border-red-400/30 bg-red-400/5",
};

export default function TechStack() {
  const ref = useReveal();

  return (
    <section id="stack" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal">
          <span className="font-mono text-xs text-cobalt tracking-wider uppercase mb-3 block">
            Tech Stack
          </span>
          <h2 className="text-3xl font-semibold text-text-base tracking-snug mb-3">
            Tools I build with
          </h2>
          <p className="text-muted text-sm mb-10 max-w-md">
            Production-tested across 2 SaaS platforms over 21 months.
          </p>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <div
                key={item.name}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm font-mono cursor-default transition-all duration-200 hover:-translate-y-0.5 ${
                  categoryColor[item.category]
                }`}
              >
                {item.name}
                <span className="text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-200">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
