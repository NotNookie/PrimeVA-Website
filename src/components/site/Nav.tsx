import { PrimeLogo } from "@/components/ui/PrimeLogo";

// Lightweight local `Link` fallback for client-only usage
function Link({ to, children, ...props }: any) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={to} {...props}>
      {children}
    </a>
  );
}

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why us", href: "#why" },
  { label: "Results", href: "#stats" },
  { label: "Contact", href: "#cta" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-accent text-accent-foreground border-b border-black/10">
      <div className="container-x mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <PrimeLogo className="block relative -top-2 md:-top-3 h-12 md:h-14" primaryColor="#000000" secondaryColor="#ffffff" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-accent-foreground/75 hover:text-accent-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-2 bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground hover:opacity-90 transition"
        >
          Enroll Now
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
