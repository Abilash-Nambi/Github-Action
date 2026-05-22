import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Angular Specialist",
  "Node.js Engineer",
  "React Developer",
];

const codeLines = [
  { indent: 0, text: "const abilash = {" },
  { indent: 1, text: 'stack: ["Angular", "React", "Node.js","TypeScript"],' },
  { indent: 1, text: 'db: ["PostgreSQL", "MongoDB"],' },
  { indent: 1, text: "experience: \"21 months\"," },
  { indent: 1, text: "orgs: 20," },
  { indent: 1, text: "coverage: \"94%\"," },
  { indent: 0, text: "};" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center pt-14">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text block */}
          <div>
            <span className="font-mono text-xs text-cobalt tracking-wider uppercase mb-6 block">
              Available for opportunities
            </span>

            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-text-base leading-[1.1] mb-4">
              Abilash N
            </h1>

            <div className="text-2xl lg:text-3xl font-medium text-muted mb-6 h-9">
              <span className="typewriter-cursor">{displayed}</span>
            </div>

            <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
              21 months building production SaaS in the ESG compliance space.
              Solo end-to-end — frontend, backend, infrastructure. Serving 20+
              global organisations.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-cobalt text-white text-sm px-5 py-2.5 rounded-md hover:bg-cobalt-dim active:scale-95 transition-all duration-200"
              >
                View work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:abilashn2704@gmail.com"
                className="inline-flex items-center text-sm text-muted border border-border px-5 py-2.5 rounded-md hover:border-cobalt hover:text-text-base transition-all duration-200"
              >
                Get in touch
              </a>
            </div>

            <div className="flex gap-6 mt-10">
              {[
                { label: "21 months", sub: "experience" },
                { label: "20+", sub: "organisations" },
                { label: "94%", sub: "test coverage" },
              ].map((s) => (
                <div key={s.sub}>
                  <div className="text-xl font-semibold text-text-base tracking-tight">{s.label}</div>
                  <div className="text-xs text-muted mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — code block */}
          <div className="hidden lg:block">
            <div className="bg-surface border border-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-border" />
                <span className="w-3 h-3 rounded-full bg-border" />
                <span className="w-3 h-3 rounded-full bg-border" />
                <span className="font-mono text-xs text-muted ml-2">profile.ts</span>
              </div>
              <pre className="p-5 font-mono text-sm leading-6 overflow-x-auto">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }}>
                    {line.indent > 0 ? (
                      <>
                        <span className="text-muted">
                          {line.text.split(":")[0]}
                        </span>
                        <span className="text-muted">:</span>
                        <span className="text-cobalt">
                          {line.text.split(":").slice(1).join(":")}
                        </span>
                      </>
                    ) : (
                      <span className="text-text-base">{line.text}</span>
                    )}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
