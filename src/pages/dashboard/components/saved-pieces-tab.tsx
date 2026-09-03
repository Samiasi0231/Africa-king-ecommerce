import { Link } from "react-router-dom";
import { SAVED } from "@/data/orders";

export default function SavedPiecesTab({ money }: { money: (n: number) => string }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-baseline justify-between gap-5 border-b border-foreground/24 pb-3.5">
        <span className="font-serif text-[26px]">Saved pieces</span>
        <Link to="/catalogue" className="text-[10.5px] tracking-[0.18em] uppercase">Browse all →</Link>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6.5">
        {SAVED.map((s) => (
          <div key={s.name} className="flex flex-col gap-3.5">
            <Link to="/catalogue" className="relative block aspect-3/4 overflow-hidden bg-[#EFEAE0]">
              <img src={s.img} alt={s.name} className={`absolute inset-0 h-full w-full object-cover ${s.pos}`} />
            </Link>
            <div className="flex flex-col gap-1">
              <Link to="/catalogue" className="font-serif text-[17px] text-foreground">{s.name}</Link>
              <span className="text-[12.5px] text-primary">{money(s.price)}</span>
              <span className={`text-[11.5px] font-light ${s.low ? "text-[#8C4A2F]" : "text-[#5C584F]"}`}>{s.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
