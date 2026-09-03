import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReviewStepProps {
  sumDelivery: string;
  sumPayment: string;
  sumAccount: string;
  terms: boolean;
  onToggleTerms: () => void;
  error: string;
  total: string;
  onPlaceOrder: () => void;
}

export default function ReviewStep({ sumDelivery, sumPayment, sumAccount, terms, onToggleTerms, error, total, onPlaceOrder }: ReviewStepProps) {
  return (
    <div className="flex flex-col gap-5.5">
      <div className="grid grid-cols-1 gap-5 bg-secondary p-5 sm:grid-cols-2 sm:gap-6.5 sm:p-6.5">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">Delivering to</span>
          <span className="text-[13.5px] leading-relaxed font-light text-[#3A3833]">{sumDelivery}</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">Paying with</span>
          <span className="text-[13.5px] leading-relaxed font-light text-[#3A3833]">{sumPayment}</span>
          <span className="text-[13px] font-light text-[#5C584F]">{sumAccount}</span>
        </div>
      </div>
      <label className="flex cursor-pointer items-start gap-2.75">
        <button
          type="button"
          onClick={onToggleTerms}
          aria-label="Accept terms"
          className={cn("mt-0.5 size-3.5 shrink-0 cursor-pointer border border-primary p-0", terms ? "bg-primary" : "bg-transparent")}
        />
        <span className="text-[13px] leading-relaxed font-light text-[#5C584F]">
          I accept the house terms. Stock pieces may be returned unworn within thirty days; alterations are
          complimentary for ninety.
        </span>
      </label>
      <Button onClick={onPlaceOrder} variant="dark" size="lg" className="w-fit px-10 py-4.5 text-[11.5px]">
        Pay {total}
      </Button>
      {error && <span className="text-xs text-[#C08A6A]">{error}</span>}
    </div>
  );
}
