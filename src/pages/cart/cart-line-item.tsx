import { Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { useShop } from "@/context/shop-context";
import type { GroupedBagLine } from "@/types/shop";

interface CartLineItemProps {
  item: GroupedBagLine;
  onFlash: (msg: string) => void;
}

export default function CartLineItem({ item: g, onFlash }: CartLineItemProps) {
  const { money, addToBag, removeOneLine, removeAllOfLine } = useShop();

  return (
    <div className="grid grid-cols-[80px_minmax(0,1fr)_auto] items-start gap-4 border-b border-border py-5 sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:gap-7 sm:py-7.5">
      <Link to={`/product/${g.id}`} className="relative block aspect-3/4 overflow-hidden bg-[#EFEAE0]">
        <img src={g.img} alt={g.name} className="absolute inset-0 h-full w-full object-cover" />
      </Link>
      <div className="flex flex-col gap-2">
        <Link to={`/product/${g.id}`} className="font-serif text-xl text-foreground">{g.name}</Link>
        <span className="text-[11.5px] tracking-[0.14em] text-muted-foreground uppercase">Size {g.size} · Ready to wear</span>
        <span className="text-[12.5px] font-light text-[#3F5C46]">In stock — dispatched within 48 hours</span>
        <div className="mt-2 flex flex-wrap items-center gap-3 sm:gap-5.5">
          <div className="flex items-center border border-foreground/22">
            <button
              type="button"
              aria-label="Decrease"
              onClick={() => (g.qty > 1 ? removeOneLine(g.id, g.size) : (removeAllOfLine(g.id, g.size), onFlash(`${g.name} removed`)))}
              className="cursor-pointer px-3.5 py-2.5 text-foreground hover:bg-secondary"
            >
              <Minus className="size-3.5" />
            </button>
            <span className="min-w-6.5 text-center text-[13px]">{g.qty}</span>
            <button
              type="button"
              aria-label="Increase"
              onClick={() => addToBag({ id: g.id, name: g.name, size: g.size, price: g.price, img: g.img })}
              className="cursor-pointer px-3.5 py-2.5 text-foreground hover:bg-secondary"
            >
              <Plus className="size-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              removeAllOfLine(g.id, g.size);
              onFlash(`${g.name} removed`);
            }}
            className="cursor-pointer text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground"
          >
            Remove
          </button>
          <button
            type="button"
            onClick={() => {
              removeAllOfLine(g.id, g.size);
              onFlash(`${g.name} saved for later`);
            }}
            className="cursor-pointer text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground"
          >
            Save for later
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <span className="text-[15px] text-foreground">{money(g.price * g.qty)}</span>
        {g.qty > 1 && <span className="text-[11.5px] text-[#9A948A]">{money(g.price)} each</span>}
      </div>
    </div>
  );
}
