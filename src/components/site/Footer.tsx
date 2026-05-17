export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x mx-auto max-w-7xl py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="mt-6 max-w-sm text-sm text-white/60 leading-relaxed">
            The modern academy training the next generation of professional virtual assistants for the world's best remote teams.
          </p>
          <form className="mt-8 flex max-w-sm border border-white/15">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none"
              aria-label="Email"
            />
            <button type="submit" className="bg-accent px-5 text-sm font-bold uppercase tracking-wider text-accent-foreground">
              Join
            </button>
          </form>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Academy</div>
            <ul className="mt-5 space-y-3">
              <li><a href="#programs" className="hover:text-accent">Programs</a></li>
              <li><a href="#why" className="hover:text-accent">Why PRIMEVA</a></li>
              <li><a href="#stats" className="hover:text-accent">Outcomes</a></li>
              <li><a href="#about" className="hover:text-accent">About</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Connect</div>
            <ul className="mt-5 space-y-3">
              <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent">Instagram</a></li>
              <li><a href="#" className="hover:text-accent">YouTube</a></li>
              <li><a href="#" className="hover:text-accent">X / Twitter</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">Contact</div>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>primevatc@gmail.com</li>
              <li>+63 9123456789</li>
              <li>0962 694 1710</li>
              <li>Remote-first · Santa Cruz, Laguna · Philippines</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} PRIMEVA Academy. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest">Built for remote · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
