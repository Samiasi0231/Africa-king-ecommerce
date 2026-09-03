import { cn } from "@/lib/utils";
import { ADDRESSES } from "@/data/orders";

export default function AddressesTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-baseline justify-between gap-5 border-b border-foreground/24 pb-3.5">
        <span className="font-serif text-[26px]">Addresses</span>
        <button type="button" className="cursor-pointer text-[10.5px] tracking-[0.18em] text-primary uppercase">
          Add address
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5.5">
        {ADDRESSES.map((ad) => (
          <div key={ad.tag} className={cn("flex flex-col gap-2.5 border p-6.5", ad.primary ? "border-primary" : "border-border")}>
            <span className={cn("text-[10px] tracking-[0.22em] uppercase", ad.primary ? "text-primary" : "text-muted-foreground")}>{ad.tag}</span>
            <span className="text-[14.5px] leading-relaxed font-light text-[#3A3833]">{ad.lines}</span>
            <div className="mt-1 flex gap-4.5">
              <button type="button" className="cursor-pointer text-[10.5px] tracking-[0.18em] text-primary uppercase">Edit</button>
              <button type="button" className="cursor-pointer text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
