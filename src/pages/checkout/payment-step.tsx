import { Button } from "@/components/ui/button";
import Field from "@/components/field";
import { cn } from "@/lib/utils";
import { PAYMENTS } from "@/data/checkout";

interface PaymentStepProps {
  pay: string; setPay: (v: string) => void;
  card: string; setCard: (v: string) => void;
  cardName: string; setCardName: (v: string) => void;
  exp: string; setExp: (v: string) => void;
  cvc: string; setCvc: (v: string) => void;
  error: string;
  onNext: () => void;
}

export default function PaymentStep({ pay, setPay, card, setCard, cardName, setCardName, exp, setExp, cvc, setCvc, error, onNext }: PaymentStepProps) {
  return (
    <div className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-2.5">
        {PAYMENTS.map((pm) => {
          const on = pay === pm.key;
          return (
            <button
              key={pm.key}
              type="button"
              onClick={() => setPay(pm.key)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-5 border p-4.5 text-left hover:border-primary",
                on ? "border-primary bg-secondary" : "border-border bg-transparent"
              )}
            >
              <span className="flex flex-col gap-1">
                <span className="text-sm text-foreground">{pm.label}</span>
                <span className="text-xs font-light text-muted-foreground">{pm.note}</span>
              </span>
              <span className={cn("size-2.75 rounded-full border border-primary", on ? "bg-primary" : "bg-transparent")} />
            </button>
          );
        })}
      </div>

      {pay === "card" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Card number" value={card} onChange={setCard} placeholder="0000 0000 0000 0000" span2 />
          <Field label="Name on card" value={cardName} onChange={setCardName} placeholder="Adebayo Okonkwo" span2 />
          <Field label="Expiry" value={exp} onChange={setExp} placeholder="MM / YY" />
          <Field label="CVC" value={cvc} onChange={setCvc} placeholder="123" />
        </div>
      )}

      <span className="max-w-[58ch] text-xs leading-relaxed font-light text-muted-foreground">
        Payments are processed by Paystack in Nigeria and by Flutterwave elsewhere. Card details never touch our
        servers.
      </span>

      <Button onClick={onNext} size="lg" className="w-fit">
        Review order
      </Button>
      {error && <span className="text-xs text-[#C08A6A]">{error}</span>}
    </div>
  );
}
