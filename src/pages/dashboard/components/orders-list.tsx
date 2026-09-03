import { ORDERS } from "@/data/orders";
import type { Order } from "@/types/order";

const orderTotal = (o: Order) => o.items.reduce((s, i) => s + i.price * i.qty, 0);

export default function OrdersList({ money, onOpenOrder }: { money: (n: number) => string; onOpenOrder: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-4.5">
      <div className="flex items-baseline justify-between gap-5 border-b border-foreground/24 pb-3.5">
        <span className="font-serif text-[26px]">Orders</span>
        <span className="text-[10.5px] tracking-[0.2em] text-muted-foreground uppercase">{ORDERS.length} orders since 2023</span>
      </div>
      {ORDERS.map((o, i) => (
        <div key={o.ref} className="grid grid-cols-[68px_minmax(0,1fr)_auto] items-center gap-3.5 border-b border-border py-4 sm:grid-cols-[92px_minmax(0,1fr)_auto] sm:gap-6.5 sm:py-5.5">
          <div className="relative aspect-3/4 overflow-hidden bg-[#EFEAE0]">
            <img src={o.img} alt={o.title} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-serif text-lg">{o.title}</span>
            <span className="text-[11.5px] tracking-[0.14em] text-muted-foreground uppercase">{o.ref} · {o.date} · {o.pieces}</span>
            <span className={`text-[12.5px] font-light ${o.status === "Delivered" ? "text-muted-foreground" : "text-[#3F5C46]"}`}>{o.statusLine}</span>
          </div>
          <div className="flex flex-col items-end gap-2.5">
            <span className="text-[15px]">{money(orderTotal(o))}</span>
            <button
              type="button"
              onClick={() => onOpenOrder(i)}
              className="cursor-pointer border border-foreground/24 px-5 py-2.5 text-[10.5px] tracking-[0.18em] text-foreground uppercase hover:border-foreground"
            >
              View order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
