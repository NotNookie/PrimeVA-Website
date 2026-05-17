import { SectionLabel } from "./SectionLabel";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const items = [
  { img: t1, name: "Amara Okafor",  role: "Executive Assistant, Lumen Labs",
    quote: "PRIMEVA didn't just train me — it rewired how I think about operations. I was placed two weeks after graduation." },
  { img: t2, name: "Kenji Tanaka",  role: "Operations VA, Atlas Group",
    quote: "The mentorship is unreal. Every artifact I built in the program ended up in my real job within the first month." },
  { img: t3, name: "Sofía Marín",   role: "Social Media Manager, Octave",
    quote: "The curriculum feels modern, the cohort feels elite. I tripled my income within six months of finishing." },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/60 hairline-y">
      <div className="container-x mx-auto max-w-7xl py-24 lg:py-32">
        <SectionLabel index="04" title="Graduates" />
        <h2 className="mt-6 font-display text-4xl lg:text-6xl font-extrabold leading-[1.02] max-w-3xl text-balance">
          Careers, rebuilt in 90 days.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
          {items.map((t) => (
            <figure key={t.name} className="bg-background p-8 lg:p-10 flex flex-col">
              <blockquote className="font-display text-xl lg:text-2xl font-medium leading-snug text-balance">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-10 flex items-center gap-4">
                <img src={t.img} alt={t.name} width={56} height={56} loading="lazy"
                  className="h-14 w-14 object-cover grayscale" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
