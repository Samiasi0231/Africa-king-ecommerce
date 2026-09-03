import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePromoCode } from "@/hooks/use-promo-code";

interface OrderSummaryProps {
  subtotal: number;
  money: (n: number) => string;
}

export default function OrderSummary({ subtotal, money }: OrderSummaryProps) {
  const { code, setCode, codeMsg, codeOk, discount, applyCode } = usePromoCode(subtotal);
  const total = subtotal - discount;

  return (
    <aside className="flex flex-col gap-5 bg-foreground p-6 text-primary-foreground sm:gap-5.5 sm:p-8.5 lg:sticky lg:top-27">
      <span className="text-[10.5px] tracking-[0.28em] text-[#8B9AAF] uppercase">Order summary</span>

      <div className="flex flex-col gap-3.5 border-b border-primary-foreground/16 pb-5.5 text-[13.5px] font-light">
        <Row label="Subtotal" value={money(subtotal)} />
        {discount > 0 && <Row label="House credit" value={`– ${money(discount)}`} accent />}
        <Row label="Shipping" value="Complimentary" />
        <Row label="Duties & taxes" value="Included" />
      </div>

      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[11px] tracking-[0.2em] text-[#B6B0A4] uppercase">Total</span>
        <span className="font-serif text-[27px]">{money(total)}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[10px] tracking-[0.22em] text-[#8B9AAF] uppercase">Promotion code</span>
        <div className="flex border-b border-primary-foreground/30">
          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code"
            className="border-0 text-primary-foreground"
          />
          <Button variant="ghost" size="sm" onClick={applyCode} className="shrink-0 text-[#8B9AAF] hover:text-primary-foreground">
            Apply
          </Button>
        </div>
        {codeMsg && <span className={`text-[11.5px] font-light ${codeOk ? "text-[#8B9AAF]" : "text-[#C08A6A]"}`}>{codeMsg}</span>}
      </div>

      <Button asChild size="lg" className="mt-1 w-full">
        <Link to="/checkout">Proceed to checkout</Link>
      </Button>

      <div className="flex flex-col gap-1.5 border-t border-primary-foreground/16 pt-4.5 text-[11.5px] font-light text-[#8B8579]">
        <span>Card · Apple Pay · Google Pay · PayPal</span>
        <span>30-day returns on unworn stock pieces</span>
        <span>Free alterations for ninety days</span>
      </div>
    </aside>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-4">
      <span className={accent ? "text-[#8B9AAF]" : "text-[#B6B0A4]"}>{label}</span>
      <span className={accent ? "text-[#8B9AAF]" : undefined}>{value}</span>
    </div>
  );
}
