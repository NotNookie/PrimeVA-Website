import { SectionLabel } from "./SectionLabel";

const stats = [
  { v: "12,400+", l: "Students trained" },
  { v: "9,800",   l: "Job placements" },
  { v: "94%",     l: "Success rate" },
  { v: "48",      l: "Partner companies" },
];

export function Stats() {
  return (
    <section id="stats" className="bg-ink text-ink-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="relative container-x mx-auto max-w-7xl py-24 lg:py-32">
        <SectionLabel index="05" title="By the Numbers" />
        <h2 className="mt-6 font-display text-4xl lg:text-6xl font-extrabold leading-[1.02] max-w-3xl text-balance text-white">
          Measured outcomes. <span className="text-accent">Not promises.</span>
        </h2>

        <dl className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-y border-white/10">
          {stats.map((s) => (
            <div key={s.l} className="bg-ink p-8 lg:p-10">
              <dt className="text-xs uppercase tracking-[0.25em] text-white/50">{s.l}</dt>
              <dd className="mt-6 font-display text-5xl lg:text-7xl font-black tracking-tight">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
