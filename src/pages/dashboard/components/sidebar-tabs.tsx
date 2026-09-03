import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ADDRESSES, SAVED, ORDERS } from "@/data/orders";
import { TABS, type ViewKey } from "../types";

interface SidebarTabsProps {
  view: ViewKey;
  onChange: (v: ViewKey) => void;
}

const META: Record<string, string> = {
  overview: "",
  orders: String(ORDERS.length),
  measure: "May 26",
  appts: "1",
  addr: String(ADDRESSES.length),
  saved: String(SAVED.length),
};

export default function SidebarTabs({ view, onChange }: SidebarTabsProps) {
  return (
    <aside className="flex flex-col gap-4 border-b border-border pb-4 lg:sticky lg:top-26 lg:gap-1 lg:border-t lg:border-b-0 lg:pt-5 lg:pb-0">
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
        {TABS.map((t) => {
          const active = view === t.key || (t.key === "orders" && view === "order");
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onChange(t.key)}
              className={cn(
                "flex shrink-0 cursor-pointer items-baseline gap-1.5 border px-3.5 py-2 text-left text-[13px] transition-colors hover:text-foreground lg:justify-between lg:gap-3 lg:border-0 lg:px-0 lg:py-2.5 lg:text-sm",
                active
                  ? "border-primary bg-primary text-primary-foreground lg:bg-transparent lg:font-medium lg:text-foreground"
                  : "border-border text-[#5C584F] lg:font-light"
              )}
            >
              <span>{t.label}</span>
              <span className={cn("text-[11px]", active ? "text-primary-foreground/80 lg:text-muted-foreground" : "text-muted-foreground")}>
                {META[t.key]}
              </span>
            </button>
          );
        })}
      </div>
      <Link
        to="/fitting"
        className="w-fit text-[10.5px] tracking-[0.18em] uppercase lg:mt-5.5 lg:border-t lg:border-border lg:pt-5"
      >
        Book a fitting →
      </Link>
    </aside>
  );
}
