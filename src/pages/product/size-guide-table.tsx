const SIZE_TABLE = [
  { size: "46", chest: 96, waist: 84, shoulder: 44, sleeve: 63 },
  { size: "48", chest: 100, waist: 88, shoulder: 45, sleeve: 64 },
  { size: "50", chest: 104, waist: 92, shoulder: 46, sleeve: 65 },
  { size: "52", chest: 108, waist: 96, shoulder: 47, sleeve: 65.5 },
];

export default function SizeGuideTable() {
  return (
    <section id="fit" className="bg-secondary px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-5.5">
          <span className="text-[10.5px] tracking-[0.3em] text-muted-foreground uppercase">Fit &amp; sizing</span>
          <h2 className="text-[clamp(26px,2.8vw,38px)] leading-[1.1] font-normal font-serif">
            Measured flat, in centimetres.
          </h2>
          <p className="max-w-[44ch] text-sm leading-relaxed font-light text-[#5C584F]">
            Our stock sizes follow the Italian drop-6 pattern. If you sit between two sizes, take the larger and let
            the atelier take it in — every stock piece includes free alterations for ninety days.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13px] text-[#3A3833]">
            <thead>
              <tr>
                {["Size", "Chest", "Waist", "Shoulder", "Sleeve"].map((h) => (
                  <th
                    key={h}
                    className="border-b border-foreground/24 px-3 py-3.5 text-left text-[10.5px] font-normal tracking-[0.2em] text-muted-foreground uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIZE_TABLE.map((row, i) => (
                <tr key={row.size}>
                  {[row.size, row.chest, row.waist, row.shoulder, row.sleeve].map((v, j) => (
                    <td key={j} className={`px-3 py-3.5 ${i < SIZE_TABLE.length - 1 ? "border-b border-border" : ""}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
