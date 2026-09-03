import { Link } from "react-router-dom";
import { STAGES } from "@/data/orders";
import type { Order } from "@/types/order";

interface OrderDetailProps {
  order: Order;
  money: (n: number) => string;
  onBack: () => void;
}

const orderTotal = (o: Order) => o.items.reduce((s, i) => s + i.price * i.qty, 0);

export default function OrderDetail({ order: o, money, onBack }: OrderDetailProps) {
  return (
    <div className="flex flex-col gap-7.5">
      <div className="flex flex-col gap-3.5">
        <button type="button" onClick={onBack} className="w-fit cursor-pointer text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground">
          ← All orders
        </button>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/24 pb-4.5">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-3xl">{o.ref}</span>
            <span className="text-[11.5px] tracking-[0.14em] text-muted-foreground uppercase">Placed {o.date} · {o.pieces}</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href="#" className="border border-foreground/24 px-5.5 py-3 text-[10.5px] tracking-[0.18em] text-foreground uppercase hover:border-foreground">
              Invoice
            </a>
            <a href="#" className="border border-foreground/24 px-5.5 py-3 text-[10.5px] tracking-[0.18em] text-foreground uppercase hover:border-foreground">
              Book alteration
            </a>
            <Link to="/catalogue" className="bg-primary px-5.5 py-3 text-[10.5px] tracking-[0.18em] text-primary-foreground uppercase hover:bg-foreground">
              Order again
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0.5 sm:grid-cols-4">
        {STAGES.map((label, idx) => {
          const done = idx < o.stage;
          const current = idx === o.stage - 1;
          return (
            <div key={label} className={`flex flex-col gap-2 px-4.5 py-5 ${current ? "bg-foreground" : done ? "bg-secondary" : "bg-[#F6F3EC]"}`}>
              <span className={`text-[10px] tracking-[0.2em] uppercase ${current ? "text-[#8B9AAF]" : "text-muted-foreground"}`}>{label}</span>
              <span className={`text-[13.5px] font-light ${current ? "text-primary-foreground" : done ? "text-[#3A3833]" : "text-[#A8A29A]"}`}>
                {idx === 0 ? o.date : current ? o.status : done ? "Complete" : "Pending"}
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-11.5">
        <div className="flex flex-col">
          {o.items.map((it) => (
            <div key={it.name} className="grid grid-cols-[64px_minmax(0,1fr)_auto] items-start gap-3.5 border-b border-border py-4 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:gap-5.5 sm:py-5">
              <div className="relative aspect-3/4 overflow-hidden bg-[#EFEAE0]">
                <img src={it.img} alt={it.name} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col gap-1">
                <Link to="/product/ijoba" className="font-serif text-[17px] text-foreground">{it.name}</Link>
                <span className="text-[11.5px] tracking-[0.14em] text-muted-foreground uppercase">Size {it.size} · Qty {it.qty}</span>
                <span className="text-[12.5px] font-light text-[#5C584F]">{it.note}</span>
              </div>
              <span className="text-sm">{money(it.price * it.qty)}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5.5">
          <div className="flex flex-col gap-3 bg-secondary p-6.5 text-[13.5px] font-light">
            <Row label="Subtotal" value={money(orderTotal(o))} />
            <Row label="Delivery" value="Complimentary" />
            <Row label="Duties" value="Included" />
            <div className="flex items-baseline justify-between gap-3.5 border-t border-border pt-3">
              <span className="text-[10.5px] tracking-[0.2em] text-muted-foreground uppercase">Paid</span>
              <span className="font-serif text-[22px]">{money(orderTotal(o))}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-[13px] font-light text-[#5C584F]">
            <span className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">Delivered to</span>
            <span>{o.address}</span>
          </div>
          <div className="flex flex-col gap-2 text-[13px] font-light text-[#5C584F]">
            <span className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">Paid with</span>
            <span>{o.payment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3.5">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
