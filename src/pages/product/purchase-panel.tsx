import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

interface PurchasePanelProps {
  product: Product;
  subtitle: string;
  blurb: string;
  priceLabel: string;
  size: string;
  onSelectSize: (s: string) => void;
  onSoldOutClick: (s: string) => void;
  stockNote: string;
  stockColour: string;
  saved: boolean;
  onToggleSaved: () => void;
  onAddToBag: () => void;
  addLabel: string;
}

export default function PurchasePanel({
  product,
  subtitle,
  blurb,
  priceLabel,
  size,
  onSelectSize,
  onSoldOutClick,
  stockNote,
  stockColour,
  saved,
  onToggleSaved,
  onAddToBag,
  addLabel,
}: PurchasePanelProps) {
  return (
    <div className="flex flex-col gap-6.5">
      <div className="flex flex-col gap-3">
        <span className="text-[10.5px] tracking-[0.3em] text-muted-foreground uppercase">Ready to wear</span>
        <h1 className="text-[clamp(30px,3.4vw,42px)] leading-[1.06] font-normal font-serif">{product.name}</h1>
        <span className="text-[12.5px] tracking-[0.14em] text-muted-foreground uppercase">{subtitle}</span>
        <div className="mt-1 flex items-baseline gap-3.5">
          <span className="font-serif text-2xl text-foreground">{priceLabel}</span>
          <span className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">Duties included</span>
        </div>
      </div>

      <p className="text-[14.5px] leading-relaxed font-light text-[#4E4A42]">{blurb}</p>

      <div className="flex flex-col gap-3 border-t border-border pt-6">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-[10.5px] tracking-[0.24em] text-muted-foreground uppercase">Size — {size || "select"}</span>
          <a href="#fit" className="text-[10.5px] tracking-[0.16em] uppercase">Size guide</a>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => {
            const soldOut = product.out.includes(s);
            const on = size === s;
            return (
              <button
                key={s}
                type="button"
                onClick={soldOut ? () => onSoldOutClick(s) : () => onSelectSize(s)}
                className={cn(
                  "min-w-14 border px-3.5 py-3 text-[13px] tracking-wide transition-colors hover:border-primary",
                  on
                    ? "border-primary bg-primary text-primary-foreground"
                    : soldOut
                    ? "cursor-not-allowed border-border text-[#B9B3A8] line-through"
                    : "cursor-pointer border-foreground/26 text-foreground"
                )}
              >
                {s}
              </button>
            );
          })}
        </div>
        <span className={cn("text-[12.5px] font-light", stockColour)}>{stockNote}</span>
      </div>

      <div className="flex flex-col gap-2.5">
        <Button className="w-full" size="lg" onClick={onAddToBag}>
          {addLabel}
        </Button>
        <div className="flex gap-2.5">
          <Button variant="outline" className="flex-1" onClick={onToggleSaved}>
            {saved ? "Saved ✓" : "Save piece"}
          </Button>
          <a
            href="#bespoke-note"
            className="flex flex-1 items-center justify-center border border-foreground/26 px-5 py-4 text-[11px] tracking-[0.18em] text-foreground uppercase hover:border-foreground"
          >
            Made to measure
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-border pt-5.5 text-[12.5px] font-light text-[#5C584F]">
        <span>Ships from Ikoyi within 48 hours</span>
        <span>Free alterations within 90 days, worldwide</span>
        <span>30-day returns on unworn stock pieces</span>
      </div>
    </div>
  );
}
