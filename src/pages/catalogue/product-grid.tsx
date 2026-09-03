import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useShop } from "@/context/shop-context";
import type { Product } from "@/types/product";

interface ProductGridProps {
  items: Product[];
  onAddSize: (p: Product, size: string) => void;
  onClearAll: () => void;
}

export default function ProductGrid({ items, onAddSize, onClearAll }: ProductGridProps) {
  const { money } = useShop();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4.5 px-5 py-27.5 text-center">
        <span className="font-serif text-2xl">Nothing in stock to those specifications.</span>
        <p className="max-w-[44ch] text-sm leading-relaxed font-light text-[#5C584F]">
          Which is what made-to-measure is for. Tell the cutter what you had in mind and we will make it from your
          own pattern.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="sm">
            <Link to="/fitting">Book a fitting</Link>
          </Button>
          <Button variant="outline" size="sm" onClick={onClearAll}>
            Clear filters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-8.5">
      {items.map((p) => (
        <div key={p.id} className="flex flex-col gap-3.5">
          <Link to={`/product/${p.id}`} className="group relative block aspect-3/4 overflow-hidden bg-[#EFEAE0]">
            <img src={p.img} alt={p.name} className={cn("absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90", p.pos)} />
            {p.tag && <Badge className="absolute top-3.5 left-3.5">{p.tag}</Badge>}
          </Link>
          <div className="flex flex-col gap-1">
            <Link to={`/product/${p.id}`} className="font-serif text-lg text-foreground">{p.name}</Link>
            <span className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">{p.cloth}</span>
            <span className="mt-0.5 text-[13px] tracking-wide text-primary">{money(p.price)}</span>
          </div>
          <div className="mt-0.5 flex flex-col gap-2">
            <span className="text-[9.5px] tracking-[0.2em] text-[#9A948A] uppercase">
              {p.ready ? "In stock — add to bag" : "Made to order — 4 weeks"}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {p.sizes.map((sz) => {
                const gone = p.out.includes(sz);
                return (
                  <button
                    key={sz}
                    type="button"
                    disabled={gone}
                    onClick={gone ? undefined : () => onAddSize(p, sz)}
                    className={cn(
                      "border px-2.5 py-1.5 text-[11px] tracking-wide transition-colors hover:border-primary",
                      gone
                        ? "cursor-not-allowed border-border text-[#B9B3A8] line-through"
                        : "cursor-pointer border-foreground/28 text-foreground"
                    )}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
