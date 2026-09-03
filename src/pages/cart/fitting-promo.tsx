import { Link } from "react-router-dom";
import AtelierPlaceholder from "@/components/atelier-placeholder";

export default function FittingPromo({ money }: { money: (n: number) => string }) {
  return (
    <div className="mt-8 flex flex-col gap-4 bg-secondary p-5 sm:flex-row sm:gap-6 sm:p-7.5 lg:mt-11">
      <div className="relative aspect-square w-24 shrink-0 overflow-hidden bg-[#E4DDCF]">
        <AtelierPlaceholder note="atelier 1:1" />
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="font-serif text-lg">Add a fitting to this order</span>
        <p className="m-0 max-w-[52ch] text-[13.5px] leading-relaxed font-light text-[#5C584F]">
          Ninety minutes with a cutter in Ikoyi, London or New York. We record your measurements so every future
          piece arrives already yours — no charge on orders above {money(500000)}.
        </p>
        <Link to="/fitting" className="text-[10.5px] tracking-[0.18em] uppercase">Reserve a slot →</Link>
      </div>
    </div>
  );
}
