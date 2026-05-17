export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span className="font-display font-bold text-foreground">{index}</span>
      <span className="h-px w-12 bg-foreground" />
      <span>{title}</span>
    </div>
  );
}
