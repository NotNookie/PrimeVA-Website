import { SectionLabel } from "./SectionLabel";

const items = [
  { n: "01", t: "Industry-ready training", d: "Curriculum co-designed with hiring managers from 48+ partner companies." },
  { n: "02", t: "Real-world mentorship",   d: "1:1 sessions with senior VAs and chiefs of staff actively in the field." },
  { n: "03", t: "Portfolio building",      d: "Ship 6 graded artifacts — SOPs, dashboards, decks — ready for interviews." },
  { n: "04", t: "Job & internship help",   d: "Placement team, warm intros, and a private board updated weekly." },
  { n: "05", t: "Flexible learning",       d: "Live cohorts plus on-demand modules. Study around your timezone." },
  { n: "06", t: "Lifetime alumni network", d: "Stay connected to opportunities, deals and continuing-education tracks." },
];

export function WhyUs() {
  return (
    <section id="why" className="container-x mx-auto max-w-7xl py-24 lg:py-32">
      <SectionLabel index="03" title="Why Choose PRIMEVA" />
      <h2 className="mt-6 font-display text-4xl lg:text-6xl font-extrabold leading-[1.02] max-w-3xl text-balance">
        Built like a tech product. Taught like a top-tier academy.
      </h2>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border hairline-y">
        {items.map((it) => (
          <div key={it.n} className="bg-background p-8 lg:p-10">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-5xl font-black text-accent">{it.n}</span>
              <span className="h-px w-12 bg-foreground" />
            </div>
            <h3 className="mt-8 font-display text-xl font-bold">{it.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
