export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Abilash N
        </span>
        <span className="font-mono text-xs text-muted">
          Built with React & Tailwind
        </span>
      </div>
    </footer>
  );
}
