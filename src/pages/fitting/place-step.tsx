import { cn } from "@/lib/utils";
import { useShop } from "@/context/shop-context";
import { PLACES } from "@/data/fitting";
import StepHeader from "./step-header";

interface PlaceStepProps {
  place: string;
  onSelect: (key: string) => void;
}

export default function PlaceStep({ place, onSelect }: PlaceStepProps) {
  const { money } = useShop();

  return (
    <div className="flex flex-col gap-4.5">
      <StepHeader n="02" title="Where shall we meet?" />
      <div className="flex flex-col gap-2.5">
        {PLACES.map((p) => {
          const on = place === p.key;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => onSelect(p.key)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-5 border p-4.5 text-left hover:border-primary",
                on ? "border-primary bg-secondary" : "border-border bg-transparent"
              )}
            >
              <span className="flex flex-col gap-1">
                <span className="text-[15px] text-foreground">{p.label}</span>
                <span className="text-[12.5px] font-light text-muted-foreground">{p.note}</span>
              </span>
              <span className={cn("text-[11.5px] tracking-[0.14em] uppercase", p.fee === 0 ? "text-muted-foreground" : "text-primary")}>
                {p.fee === 0 ? "No charge" : money(p.fee)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
