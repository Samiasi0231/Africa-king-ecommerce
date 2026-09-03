import { cn } from "@/lib/utils";
import { SLOT_TIMES, type DayInfo } from "@/data/fitting";
import StepHeader from "./step-header";

interface DateStepProps {
  days: DayInfo[];
  day: number;
  slot: string;
  dateHint: string;
  onSelectDay: (i: number) => void;
  onSelectSlot: (t: string) => void;
  onClosedDay: () => void;
  onTakenSlot: () => void;
  isSlotTaken: (i: number) => boolean;
}

export default function DateStep({
  days,
  day,
  slot,
  dateHint,
  onSelectDay,
  onSelectSlot,
  onClosedDay,
  onTakenSlot,
  isSlotTaken,
}: DateStepProps) {
  return (
    <div className="flex flex-col gap-4.5">
      <StepHeader n="03" title="When suits you?" />
      <span className="text-[12.5px] font-light text-muted-foreground">{dateHint}</span>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {days.map((d, i) => {
          const on = day === i;
          return (
            <button
              key={d.idx}
              type="button"
              onClick={d.closed ? onClosedDay : () => onSelectDay(i)}
              className={cn(
                "flex flex-col items-center gap-1 border px-1.5 py-3.5 hover:border-primary",
                d.closed ? "cursor-not-allowed border-border/60" : "cursor-pointer border-border",
                on && "border-primary bg-primary"
              )}
            >
              <span className={cn("text-[9.5px] tracking-[0.16em] uppercase", on ? "text-[#8B9AAF]" : d.closed ? "text-[#C9C3B8]" : "text-muted-foreground")}>
                {d.dow}
              </span>
              <span className={cn("font-serif text-xl", on ? "text-primary-foreground" : d.closed ? "text-[#C9C3B8]" : "text-foreground")}>
                {d.num}
              </span>
              <span className={cn("text-[9px] tracking-[0.12em] uppercase", on ? "text-[#8B9AAF]" : d.closed ? "text-[#C9C3B8]" : "text-[#9A948A]")}>
                {d.mon}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {SLOT_TIMES.map((t, i) => {
          const gone = isSlotTaken(i);
          const on = slot === t;
          return (
            <button
              key={t}
              type="button"
              onClick={gone ? onTakenSlot : () => onSelectSlot(t)}
              className={cn(
                "border px-4.5 py-3 text-[13px] tracking-wide hover:border-primary",
                on
                  ? "cursor-pointer border-primary bg-primary text-primary-foreground"
                  : gone
                  ? "cursor-not-allowed border-border/60 text-[#C0BAB0] line-through"
                  : "cursor-pointer border-foreground/22 text-foreground"
              )}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
