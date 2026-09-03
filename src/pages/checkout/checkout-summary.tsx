import { Link } from "react-router-dom";
import type { GroupedBagLine } from "@/types/shop";

interface CheckoutSummaryProps {
  groupedBag: GroupedBagLine[];
  bagCount: number;
  money: (n: number) => string;
  subtotal: number;
  shipLabel: string;
}

export default function CheckoutSummary({ groupedBag, bagCount, money, subtotal, shipLabel }: CheckoutSummaryProps) {
  return (
    <aside className="flex flex-col gap-5 bg-foreground p-6 text-primary-foreground sm:p-8.5 lg:sticky lg:top-7.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[10.5px] tracking-[0.26em] text-[#8B9AAF] uppercase">Your order</span>
        <Link to="/cart" className="text-[10px] tracking-[0.18em] text-[#8B9AAF] uppercase">Edit</Link>
      </div>

      {groupedBag.map((g) => (
        <div key={g.id + g.size} className="grid grid-cols-[62px_minmax(0,1fr)_auto] items-start gap-4 border-b border-primary-foreground/12 pb-4">
          <div className="relative aspect-3/4 overflow-hidden bg-[#1A1F26]">
            <img src={g.img} alt={g.name} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-[15px]">{g.name}</span>
            <span className="text-[11px] tracking-[0.12em] text-[#8B8579] uppercase">Size {g.size} · Qty {g.qty}</span>
          </div>
          <span className="text-[13px]">{money(g.price * g.qty)}</span>
        </div>
      ))}

      {bagCount === 0 && (
        <div className="flex flex-col gap-3 py-1">
          <span className="text-[13.5px] font-light text-[#B6B0A4]">Your bag is empty — nothing to check out yet.</span>
          <Link to="/catalogue" className="text-[10.5px] tracking-[0.18em] text-[#8B9AAF] uppercase">Shop the collection →</Link>
        </div>
      )}

      <div className="flex flex-col gap-3 text-[13.5px] font-light">
        <Row label="Subtotal" value={money(subtotal)} />
        <Row label="Delivery" value={shipLabel} />
        <Row label="Duties & taxes" value="Included" />
      </div>

      <div className="flex items-baseline justify-between gap-4 border-t border-primary-foreground/16 pt-4.5">
        <span className="text-[11px] tracking-[0.2em] text-[#B6B0A4] uppercase">Total</span>
        <span className="font-serif text-2xl">{money(subtotal)}</span>
      </div>

      <span className="text-[11.5px] leading-relaxed font-light text-[#8B8579]">
        Dispatched from Ikoyi within 48 hours. A fitting appointment can be added to any order at no charge.
      </span>
    </aside>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-[#B6B0A4]">{label}</span>
      <span>{value}</span>
    </div>
  );
}
