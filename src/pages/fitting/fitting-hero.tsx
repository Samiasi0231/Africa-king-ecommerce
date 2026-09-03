import AtelierPlaceholder from "@/components/atelier-placeholder";

const STATS = [
  ["90 min", "First session"],
  ["2", "Fittings"],
  ["4 wks", "To delivery"],
];

export default function FittingHero() {
  return (
    <section className="relative bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center gap-5 px-5 py-14 sm:gap-6 sm:px-8 sm:py-18 lg:gap-6 lg:px-0 lg:py-22.5 lg:pr-18 lg:pl-10">
          <span className="text-[10.5px] tracking-[0.32em] text-[#8B9AAF] uppercase">
            Made to measure · By appointment
          </span>
          <h1 className="text-[clamp(32px,7vw,64px)] leading-none font-normal font-serif">
            Sit for your
            <br />
            measurements.
          </h1>
          <p className="max-w-[46ch] text-[15px] leading-relaxed font-jost  font-light text-[#B6B0A4] sm:text-[15.5px]">
            Ninety minutes with a master cutter. Cloth chosen, posture read,
            silhouette agreed — then two fittings and four weeks. The record we
            take stays with the house, so every piece after this one begins
            already yours.
          </p>
          <div className="grid grid-cols-3 justify-start gap-4 pt-2 sm:gap-8">
            {STATS.map(([n, l]) => (
              <div key={l} className="flex flex-col gap-1.5">
                <span className="font-serif text-xl sm:text-2xl">{n}</span>
                <span className="text-[9px] tracking-[0.16em] text-[#8B9AAF] uppercase sm:text-[10px] sm:tracking-[0.2em]">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[280px] overflow-hidden bg-[#171B21] sm:h-[360px] lg:h-auto lg:min-h-[480px]">
          <AtelierPlaceholder />
        </div>
      </div>
    </section>
  );
}
