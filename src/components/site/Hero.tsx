import hero from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      {/* Enrollment banner removed per request */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rotate-12 bg-accent/90" aria-hidden />
      <div className="relative container-x mx-auto max-w-7xl pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 fade-up">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
              <span className="h-px w-8 bg-accent" />
              Virtual Assistant Academy
            </div>
            <h1 className="mt-10 font-display font-black text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.05]">
              Launch your career as a <span className="text-accent">Professional</span> Virtual Assistant.
            </h1>
            <p className="mt-8 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
              Industry-grade training, real-world mentorship and placement support — engineered to make you remote-ready in 90 days.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#programs" className="group inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:brightness-95 transition">
                Explore Programs
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#about" className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-medium text-white hover:bg-white/5 transition">
                Book a Consultation
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["12k+", "Trained"],
                ["94%", "Placement"],
                ["48", "Partners"],
              ].map(([k, v]) => (
                <div key={v} className="border-l border-white/15 pl-4">
                  <dt className="font-display text-3xl font-bold text-white">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-white/50">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-4 bg-accent/20 blur-2xl" aria-hidden />
            <div className="relative border border-white/10 bg-black/40">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="ml-3 text-[10px] uppercase tracking-widest text-white/40">primeva / dashboard</span>
              </div>
              <img src={hero} alt="VA training dashboard preview" width={1600} height={1200} className="block w-full" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
