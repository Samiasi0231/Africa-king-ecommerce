import { cn } from "@/lib/utils";
import { SERVICES } from "@/data/fitting";
import StepHeader from "./step-header";

interface ServiceStepProps {
  service: string;
  onSelect: (key: string) => void;
}

export default function ServiceStep({ service, onSelect }: ServiceStepProps) {
  return (
    <div className="flex flex-col gap-4.5">
      <StepHeader n="01" title="What are we doing?" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SERVICES.map((s) => {
          const on = service === s.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => onSelect(s.key)}
              className={cn(
                "flex cursor-pointer flex-col gap-2 border p-5.5 text-left hover:border-primary",
                on ? "border-primary bg-secondary" : "border-border bg-transparent"
              )}
            >
              <span className="font-serif text-lg text-foreground">{s.label}</span>
              <span className="text-[13px] leading-relaxed font-light text-[#5C584F]">{s.note}</span>
              <span className="mt-0.5 text-[10.5px] tracking-[0.16em] text-primary uppercase">{s.meta}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
