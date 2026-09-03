export default function StepHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3.5 border-b border-border pb-3.5">
      <span className="text-[10.5px] tracking-[0.24em] text-muted-foreground uppercase">{n}</span>
      <span className="font-serif text-2xl">{title}</span>
    </div>
  );
}
