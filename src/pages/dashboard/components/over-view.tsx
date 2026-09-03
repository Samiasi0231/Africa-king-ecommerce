import { ORDERS } from "@/data/orders";
import type { Order } from "@/types/order";

interface OverviewProps {
  money: (n: number) => string;
  onManage: () => void;
  onMeasure: () => void;
  onOpenOrder: (i: number) => void;
  onAllOrders: () => void;
}

const orderTotal = (o: Order) => o.items.reduce((s, i) => s + i.price * i.qty, 0);

export default function Overview({ money, onManage, onMeasure, onOpenOrder, onAllOrders }: OverviewProps) {
  return (
    <div className="flex flex-col gap-6.5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1.25fr_1fr] sm:gap-6.5">
        <div className="flex flex-col gap-4 bg-foreground p-6 text-primary-foreground sm:gap-4.5 sm:p-8.5">
          <span className="text-[10.5px] tracking-[0.26em] text-[#8B9AAF] uppercase">Next appointment</span>
          <span className="font-serif text-[28px] leading-[1.15]">Second fitting — Ikoyi atelier</span>
          <span className="text-sm font-light text-[#B6B0A4]">Thursday 3 September, 10:30 · with Segun, master cutter</span>
          <div className="mt-1.5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onManage}
              className="cursor-pointer bg-primary px-6.5 py-3.5 text-[10.5px] tracking-[0.18em] text-primary-foreground uppercase hover:bg-primary-foreground hover:text-foreground"
            >
              Manage
            </button>
            <a
              href="#"
              className="border border-primary-foreground/30 px-6.5 py-3.5 text-[10.5px] tracking-[0.18em] text-primary-foreground uppercase hover:border-primary-foreground"
            >
              Add to calendar
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-secondary p-6 sm:p-8.5">
          <span className="text-[10.5px] tracking-[0.26em] text-muted-foreground uppercase">Measurements</span>
          <span className="font-serif text-2xl">On file, taken May 2026</span>
          <p className="m-0 text-[13.5px] leading-relaxed font-light text-[#5C584F]">
            A pattern is only as current as the body it was cut for. We recommend a re-measure every eighteen
            months.
          </p>
          <button
            type="button"
            onClick={onMeasure}
            className="w-fit cursor-pointer text-[10.5px] tracking-[0.18em] text-primary uppercase hover:text-foreground"
          >
            View the record →
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-5 border-b border-border pb-3.5">
          <span className="font-serif text-[22px]">Recent orders</span>
          <button type="button" onClick={onAllOrders} className="cursor-pointer text-[10.5px] tracking-[0.18em] text-primary uppercase">
            All orders →
          </button>
        </div>
        {ORDERS.slice(0, 2).map((o, i) => (
          <button
            key={o.ref}
            type="button"
            onClick={() => onOpenOrder(i)}
            className="grid cursor-pointer grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-3 border-0 border-b border-border bg-transparent py-3.5 text-left sm:gap-6 sm:py-4.5"
          >
            <div className="relative aspect-3/4 overflow-hidden bg-[#EFEAE0]">
              <img src={o.img} alt={o.title} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-lg text-foreground">{o.title}</span>
              <span className="text-[11.5px] tracking-[0.14em] text-muted-foreground uppercase">{o.ref} · {o.date}</span>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className={`text-[11px] tracking-[0.16em] uppercase ${o.status === "Delivered" ? "text-muted-foreground" : "text-[#3F5C46]"}`}>
                {o.status}
              </span>
              <span className="text-sm text-foreground">{money(orderTotal(o))}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
