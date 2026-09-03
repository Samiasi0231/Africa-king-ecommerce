import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CATALOGUE, CATEGORY_NAMES, OCCASION_NAMES, COLOUR_DEFS, PRICE_BRACKETS } from "@/data/catalogue";

interface FilterSidebarProps {
  cat: string;
  setCat: (v: string) => void;
  occ: string[];
  toggleOcc: (v: string) => void;
  colours: string[];
  toggleColour: (v: string) => void;
  bracket: string;
  setBracket: (v: string) => void;
  readyOnly: boolean;
  setReadyOnly: (v: boolean) => void;
  onClearAll: () => void;
}

export default function FilterSidebar({
  cat,
  setCat,
  occ,
  toggleOcc,
  colours,
  toggleColour,
  bracket,
  setBracket,
  readyOnly,
  setReadyOnly,
  onClearAll,
}: FilterSidebarProps) {
  return (
    <aside className="flex flex-col gap-8.5 pb-5 lg:sticky lg:top-26">
      {/* Category */}
      <div className="flex flex-col gap-3">
        <span className="text-[10px] tracking-[0.26em] text-muted-foreground uppercase">Category</span>
        {CATEGORY_NAMES.map((name) => {
          const active = cat === name;
          const count = name === "All" ? CATALOGUE.length : CATALOGUE.filter((p) => p.cat === name).length;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setCat(name)}
              className={cn(
                "flex cursor-pointer items-baseline justify-between gap-3 py-1 text-left text-sm transition-colors hover:text-foreground",
                active ? "font-medium text-foreground" : "font-light text-[#5C584F]"
              )}
            >
              <span>{name === "All" ? "All pieces" : name}</span>
              <span className="text-[11px] text-muted-foreground">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Occasion */}
      <div className="flex flex-col gap-3 border-t border-border pt-6.5">
        <span className="text-[10px] tracking-[0.26em] text-muted-foreground uppercase">Occasion</span>
        <div className="flex flex-wrap gap-1.5">
          {OCCASION_NAMES.map((o) => {
            const on = occ.includes(o);
            return (
              <button
                key={o}
                type="button"
                onClick={() => toggleOcc(o)}
                className={cn(
                  "cursor-pointer border px-3 py-1.5 text-[10.5px] tracking-[0.14em] uppercase transition-colors hover:border-primary",
                  on ? "border-primary bg-primary text-primary-foreground" : "border-foreground/22 bg-transparent text-[#5C584F]"
                )}
              >
                {o}
              </button>
            );
          })}
        </div>
      </div>

      {/* Colour */}
      <div className="flex flex-col gap-3.5 border-t border-border pt-6.5">
        <span className="text-[10px] tracking-[0.26em] text-muted-foreground uppercase">Cloth colour</span>
        <div className="flex flex-wrap gap-3">
          {COLOUR_DEFS.map((c) => {
            const on = colours.includes(c.key);
            return (
              <button
                key={c.key}
                type="button"
                aria-label={c.label}
                onClick={() => toggleColour(c.key)}
                className={cn(
                  "size-5.5 cursor-pointer rounded-full border border-foreground/20 p-0 outline-1 outline-offset-3",
                  c.swatch,
                  on ? "outline-primary" : "outline-transparent"
                )}
              />
            );
          })}
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-2.5 border-t border-border pt-6.5">
        <span className="text-[10px] tracking-[0.26em] text-muted-foreground uppercase">Price</span>
        {PRICE_BRACKETS.map((b) => {
          const active = bracket === b.key;
          return (
            <button
              key={b.key}
              type="button"
              onClick={() => setBracket(b.key)}
              className={cn(
                "cursor-pointer py-1 text-left text-sm transition-colors hover:text-foreground",
                active ? "font-medium text-foreground" : "font-light text-[#5C584F]"
              )}
            >
              {b.label}
            </button>
          );
        })}
      </div>

      {/* Ready to ship + clear */}
      <div className="flex flex-col gap-3.5 border-t border-border pt-6.5">
        <button
          type="button"
          onClick={() => setReadyOnly(!readyOnly)}
          className={cn("flex cursor-pointer items-center gap-2.5 text-sm", readyOnly ? "text-foreground" : "text-[#5C584F]")}
        >
          <span className={cn("block size-3.5 border border-primary", readyOnly ? "bg-primary" : "bg-transparent")} />
          <span>Ready to ship</span>
        </button>
        <Button variant="link" onClick={onClearAll} className="w-fit text-[11px] tracking-[0.18em] text-primary uppercase hover:text-foreground">
          Clear all
        </Button>
      </div>
    </aside>
  );
}
