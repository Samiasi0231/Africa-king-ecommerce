import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AtelierPlaceholder from "@/components/atelier-placeholder";

const STEPS = [
  ["01", "Consultation"],
  ["02", "Two fittings"],
  ["03", "Delivery"],
];

export default function BespokeSection() {
  return (
    <section id="bespoke" className="bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[300px] overflow-hidden bg-[#171B21] sm:h-[380px] lg:h-auto lg:min-h-[520px]">
          <AtelierPlaceholder />
        </div>
        <div className="flex flex-col justify-center gap-6 px-5 py-12 sm:gap-7 sm:px-8 sm:py-16 lg:gap-7.5 lg:px-0 lg:py-24 lg:pr-10 lg:pl-19">
          <span className="text-[10.5px] tracking-[0.3em] text-[#8B9AAF] uppercase">
            Made to measure
          </span>
          <h2 className="text-[clamp(28px,6vw,52px)] leading-[1.04] font-normal font-serif">
            Sit for your
            <br />
            measurements.
          </h2>
          <p className="max-w-[42ch] text-[15px] leading-relaxed font-jost font-light text-[#B6B0A4]">
            Ninety minutes with a master cutter — in Ikoyi, or by house call in
            London and New York. Cloth chosen, posture read, silhouette agreed.
            First fitting in four weeks.
          </p>
          <div className="grid grid-cols-3 justify-start gap-5 pt-1.5 sm:gap-8.5">
            {STEPS.map(([num, label]) => (
              <div key={label} className="flex flex-col gap-1.5">
                <span className="font-serif text-[27px]">{num}</span>
                <span className="text-[10.5px] tracking-[0.18em] text-[#8B9AAF] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3.5 pt-2.5">
            <Button asChild>
              <Link to="/fitting">Request an appointment</Link>
            </Button>
            <Button asChild variant="outlineLight">
              <a href="#">How it works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
