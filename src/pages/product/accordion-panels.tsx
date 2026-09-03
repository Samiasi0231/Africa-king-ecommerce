import { useState } from "react";
import type { Panel } from "@/types/product";

export default function AccordionPanels({ panels }: { panels: Panel[] }) {
  const [open, setOpen] = useState(panels[0]?.key ?? "");

  return (
    <div className="flex flex-col border-t border-border">
      {panels.map((pn) => {
        const isOpen = open === pn.key;
        return (
          <div key={pn.key} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? "" : pn.key)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-4.5 text-left text-xs tracking-[0.16em] text-foreground uppercase"
            >
              <span>{pn.title}</span>
              <span className="text-base leading-none text-muted-foreground">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <p className="m-0 pb-5 text-[13.5px] leading-relaxed font-light text-[#5C584F]">{pn.body}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
