import { SectionLabel } from "./SectionLabel";
import { Compass, Rocket, Globe2 } from "lucide-react";

const pillars = [
  { Icon: Compass, title: "Empowerment", body: "Build the discipline, mindset and toolkit to operate at executive standards from day one." },
  { Icon: Rocket,  title: "Career Growth", body: "From entry-level to specialist tracks — engineered ladders for measurable progression." },
  { Icon: Globe2,  title: "Remote-First", body: "Train inside the workflows of distributed teams: async ops, dashboards, SOPs and stakeholder care." },
];

export function About() {
  return (
    <section id="about" className="container-x mx-auto max-w-7xl py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionLabel index="01" title="Our Mission" />
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-extrabold leading-[1.02] text-balance">
            A modern academy for the world's most-needed remote role.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            PrimeVA exists to convert ambition into employability. We equip aspiring virtual assistants with the operating
            systems, communication craft and digital fluency that elite remote teams demand — and we stand beside you until
            you're placed.
          </p>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-px bg-border hairline-y">
        {pillars.map(({ Icon, title, body }) => (
          <div key={title} className="group bg-background p-8 lg:p-10 hover:bg-accent transition-colors duration-300">
            <Icon className="h-7 w-7 stroke-[1.5]" />
            <h3 className="mt-8 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground group-hover:text-foreground/80 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
