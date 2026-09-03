interface AtelierPlaceholderProps {
  note?: string;
}

export default function AtelierPlaceholder({
  note = "atelier photo needed — Black master cutter, 50s, shirtsleeves and waistcoat, chalking navy cloth on the measuring table; warm side light, dark workshop",
}: AtelierPlaceholderProps) {
  return (
    <div className="absolute inset-0 flex items-end bg-[repeating-linear-gradient(38deg,#1A1F26,#1A1F26_9px,#161A20_9px,#161A20_18px)] p-7">
      <span className="max-w-[34ch] font-mono text-[10px] leading-relaxed tracking-wide text-[#7E8898] uppercase">
        {note}
      </span>
    </div>
  );
}
