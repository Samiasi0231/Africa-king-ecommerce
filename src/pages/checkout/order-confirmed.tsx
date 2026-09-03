import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { GroupedBagLine } from "@/types/shop";

interface OrderConfirmedProps {
  orderNo: string;
  email: string;
  etaDays: string;
  shipLabel: string;
  sumPayment: string;
  groupedBag: GroupedBagLine[];
  money: (n: number) => string;
  subtotal: number;
}

export default function OrderConfirmed({ orderNo, email, etaDays, shipLabel, sumPayment, groupedBag, money, subtotal }: OrderConfirmedProps) {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-18 lg:px-10 lg:py-22.5 lg:pb-32.5">
      <div className="flex flex-col gap-6.5">
        <span className="text-[10.5px] tracking-[0.3em] text-muted-foreground uppercase">Order {orderNo}</span>
        <h1 className="text-[clamp(34px,4vw,54px)] leading-[1.04] font-normal font-serif">
          Thank you. The
          <br />
          cutter has it.
        </h1>
        <p className="max-w-[52ch] text-[15px] leading-relaxed font-light text-[#4E4A42]">
          A confirmation is on its way to {email || "your email"}. Your pieces leave the Ikoyi atelier within
          forty-eight hours and you will have a tracking number the moment they do.
        </p>
        <div className="grid grid-cols-3 justify-start gap-4 border-y border-border py-5 sm:gap-8.5 sm:py-6.5">
          {[["48h", "Dispatch"], [etaDays, "Delivery"], ["90d", "Free alterations"]].map(([n, l]) => (
            <div key={l} className="flex flex-col gap-1.5">
              <span className="font-serif text-[22px]">{n}</span>
              <span className="text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase">{l}</span>
            </div>
          ))}
        </div>
        <p className="max-w-[52ch] text-[14.5px] leading-relaxed font-light text-[#4E4A42]">
          Next: book a fitting and we will record your measurements while this order is still in your hands. Every
          piece after this one starts from your own pattern.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/fitting">Book a fitting</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/catalogue">Continue shopping</Link>
          </Button>
        </div>
      </div>
      <aside className="flex flex-col gap-4.5 bg-secondary p-8">
        <span className="text-[10.5px] tracking-[0.26em] text-muted-foreground uppercase">Summary</span>
        {groupedBag.map((g) => (
          <div key={g.id + g.size} className="flex justify-between gap-4 border-b border-border pb-3 text-[13.5px] font-light">
            <span>{g.name} — {g.size} × {g.qty}</span>
            <span>{money(g.price * g.qty)}</span>
          </div>
        ))}
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Paid</span>
          <span className="font-serif text-2xl">{money(subtotal)}</span>
        </div>
        <span className="text-[12.5px] leading-relaxed font-light text-[#5C584F]">{sumPayment} · {shipLabel}</span>
      </aside>
    </section>
  );
}
