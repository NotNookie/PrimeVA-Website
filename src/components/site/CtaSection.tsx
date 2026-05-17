export function CtaSection() {
  return (
    <section id="cta" className="bg-accent text-accent-foreground">
      <div className="container-x mx-auto max-w-7xl py-24 lg:py-32 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="text-xs uppercase tracking-[0.25em]">06 / Take the next step</div>
          <h2 className="mt-6 font-display text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-balance">
            Your remote career starts on Monday.
          </h2>
          <p className="mt-6 max-w-xl text-base lg:text-lg">
            Reserve a seat in the next cohort or book a 20-minute consultation with our admissions team.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3">
          <a href="#" className="bg-ink text-ink-foreground px-8 py-5 text-sm font-bold uppercase tracking-widest text-center hover:opacity-90 transition">
            Enroll in next cohort →
          </a>
          <a href="#" className="border border-black/30 px-8 py-5 text-sm font-semibold uppercase tracking-widest text-center hover:bg-black/5 transition">
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
