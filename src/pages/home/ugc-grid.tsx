const UGC = ["ugc-1", "ugc-2", "ugc-3", "ugc-4", "ugc-5", "ugc-6"];

export default function UgcGrid() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-24">
      <div className="mx-auto flex max-w-7xl items-baseline justify-between gap-6 px-5 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
        <h2 className="text-[clamp(26px,2.6vw,34px)] font-normal font-serif">Worn well</h2>
        <a href="#" className="text-[11px] tracking-[0.2em] uppercase">@adeatelier →</a>
      </div>
      <div className="grid grid-cols-3 gap-0.5 sm:grid-cols-6">
        {UGC.map((n) => (
          <div key={n} className="relative aspect-square overflow-hidden bg-[#E8E1D4]">
            <img src={`/img/${n}.png`} alt="Worn in Lagos" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
