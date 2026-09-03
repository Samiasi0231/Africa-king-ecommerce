import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StepShellProps {
  n: string;
  title: string;
  active: boolean;
  done: boolean;
  onEdit?: () => void;
  summary?: ReactNode;
  children: ReactNode;
}

export default function StepShell({ n, title, active, done, onEdit, summary, children }: StepShellProps) {
  return (
    <div className={cn("flex flex-col gap-5 border-t border-border pt-7", !active && !done && "opacity-40")}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-serif text-[23px]">{n} — {title}</span>
        {done && onEdit && (
          <button type="button" onClick={onEdit} className="cursor-pointer text-[10.5px] tracking-[0.18em] text-primary uppercase">
            Edit
          </button>
        )}
      </div>
      {active && children}
      {done && !active && summary}
    </div>
  );
}
