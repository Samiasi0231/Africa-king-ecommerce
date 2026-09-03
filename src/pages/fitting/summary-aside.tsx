import { Button } from "@/components/ui/button";

interface SummaryAsideProps {
  service: string;
  place: string;
  when: string;
  cutter: string;
  feeLabel: string;
  feeNote: string;
  error: string;
  onConfirm: () => void;
}

export default function SummaryAside({ service, place, when, cutter, feeLabel, feeNote, error, onConfirm }: SummaryAsideProps) {
  return (
    <aside className="flex flex-col gap-5 bg-foreground p-6 text-primary-foreground sm:p-8.5 lg:sticky lg:top-26">
      <span className="text-[10.5px] tracking-[0.26em] text-[#8B9AAF] uppercase">Your appointment</span>

      <div className="flex flex-col gap-3.5 border-b border-primary-foreground/16 pb-5.5">
        <SummaryRow label="Service" value={service} />
        <SummaryRow label="Where" value={place} />
        <SummaryRow label="When" value={when} />
        <SummaryRow label="Cutter" value={cutter} />
      </div>

      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[11px] tracking-[0.2em] text-[#B6B0A4] uppercase">Fee</span>
        <span className="font-serif text-2xl">{feeLabel}</span>
      </div>
      <span className="text-xs leading-relaxed font-light text-[#8B8579]">{feeNote}</span>

      <Button onClick={onConfirm} size="lg" className="w-full">
        Request this appointment
      </Button>
      {error && <span className="text-xs text-[#C08A6A]">{error}</span>}

      <div className="flex flex-col gap-1.5 border-t border-primary-foreground/16 pt-4.5 text-[11.5px] font-light text-[#8B8579]">
        <span>No payment taken today</span>
        <span>Cancel or move it up to 24 hours before</span>
        <span>Wear the shoes you intend to wear with it</span>
      </div>
    </aside>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] tracking-[0.2em] text-[#8B8579] uppercase">{label}</span>
      <span className="text-[14.5px] font-light">{value}</span>
    </div>
  );
}
