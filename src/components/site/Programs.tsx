import { SectionLabel } from "./SectionLabel";
import { Briefcase, Megaphone, UserCog, Headphones, Target, FolderKanban } from "lucide-react";

const programs = [
  {
    Icon: Briefcase,
    code: "VA-101",
    title: "General Virtual Assistant",
    body: "Core VA skills: email & calendar management, admin ops, SOPs and client communication.",
    format: "5 days — In-depth face-to-face",
    schedule: "Mon–Fri · Afternoon 1–5pm / Evening 6–10pm",
    prices: { trainingOnly: 2000, trainingMentoring: 2500, fullPackage: 3000 },
  },
  {
    Icon: Megaphone,
    code: "SMM-210",
    title: "Social Media Management & Marketing",
    body: "Content strategy, content creation, analytics, community management and ad basics.",
    format: "5 days — In-depth face-to-face",
    schedule: "Mon–Fri · Afternoon 1–5pm / Evening 6–10pm",
    prices: { trainingOnly: 1750, trainingMentoring: 2000, fullPackage: 2700 },
  },
  {
    Icon: FolderKanban,
    code: "BK-150",
    title: "Online Bookkeeping",
    body: "QuickBooks basics, bookkeeping workflows, invoicing and simple financial reporting.",
    format: "3 days — In-depth face-to-face",
    schedule: "Mon–Fri · Afternoon 1–5pm / Evening 6–10pm",
    prices: { trainingOnly: 1500, trainingMentoring: 2000, fullPackage: 2500 },
  },
  {
    Icon: Headphones,
    code: "MD-120",
    title: "Medical Virtual Assistant",
    body: "Medical billing basics, appointment scheduling, records, HIPAA-aware processes.",
    format: "3 days — In-depth face-to-face",
    schedule: "Mon–Fri · Afternoon 1–5pm / Evening 6–10pm",
    prices: { trainingOnly: 1500, trainingMentoring: 2000, fullPackage: 2500 },
  },
];

const phCurrency = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  currencyDisplay: "narrowSymbol",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function Programs() {
  return (
    <section id="programs" className="bg-secondary/60 hairline-y">
      <div className="container-x mx-auto max-w-7xl py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <SectionLabel index="02" title="Training Programs" />
            <h2 className="mt-4 font-display text-3xl lg:text-4xl font-extrabold leading-[1.02] max-w-2xl text-balance">
              Six specialist tracks. One operating standard.
            </h2>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-accent transition">
            View full curriculum →
          </a>
        </div>

        <div className="mt-10 space-y-4">
          {programs.map(({ Icon, code, title, body, format, schedule, prices }) => (
            <article key={code} className="flex items-start gap-6 p-4 bg-background border border-white/6 rounded-lg hover:bg-ink hover:text-ink-foreground transition">
              <div className="flex-none">
                <div className="h-12 w-12 rounded-md bg-accent/10 text-accent flex items-center justify-center">
                  <Icon className="h-6 w-6 stroke-2" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
                  <span className="font-mono">{code}</span>
                  <span className="hidden sm:inline">·</span>
                  <span className="text-xs">{format}</span>
                </div>
                <h3 className="mt-2 text-lg font-display font-bold truncate">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground truncate">{body}</p>
                <div className="mt-2 text-xs text-white/60"><strong>Schedule:</strong> {schedule}</div>
              </div>

              <div className="ml-4 flex flex-col items-end justify-between">
                <div className="rounded-md bg-white/5 px-3 py-2 text-right">
                  <div className="text-xs text-muted-foreground">Training</div>
                  <div className="text-sm font-bold">{phCurrency.format(prices.trainingOnly)}</div>
                </div>
                <a
                  href={`mailto:primevatc@gmail.com?subject=${encodeURIComponent("Enroll - "+title)}&body=${encodeURIComponent("Hi, I\'d like to enroll in "+title+". Please reserve a slot for me.\n\nName:\nContact number:\nPreferred schedule: (Afternoon / Evening)")}`}
                  className="mt-3 inline-flex items-center gap-2 bg-accent px-3 py-2 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:brightness-95 transition"
                >
                  Enroll
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
