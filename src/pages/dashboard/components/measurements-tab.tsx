import { Link } from "react-router-dom";
import { MEASUREMENTS } from "@/data/orders";

export default function MeasurementsTab() {
  return (
    <div className="flex flex-col gap-6.5">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/24 pb-4">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-[26px]">Your measurements</span>
          <span className="text-[11.5px] tracking-[0.14em] text-muted-foreground uppercase">Taken 14 May 2026 · Ikoyi atelier · by Segun</span>
        </div>
        <Link to="/fitting" className="bg-primary px-6 py-3 text-[10.5px] tracking-[0.18em] text-primary-foreground uppercase hover:bg-foreground">
          Book a re-measure
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-0.5 sm:grid-cols-4">
        {MEASUREMENTS.map((m) => (
          <div key={m.label} className="flex flex-col gap-1.5 bg-secondary px-5 py-5.5">
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{m.label}</span>
            <span className="font-serif text-2xl">{m.value} cm</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2.5 bg-foreground p-7.5 text-[#B6B0A4]">
        <span className="text-[10.5px] tracking-[0.26em] text-[#8B9AAF] uppercase">Cutter's notes</span>
        <p className="m-0 max-w-[70ch] text-sm leading-relaxed font-light">
          Right shoulder sits 1cm lower than the left — jackets patterned with a compensating shoulder. Prefers a
          4cm turn-up and a slightly extended trouser rise. Sleeve head kept clean, no roping.
        </p>
      </div>
    </div>
  );
}
