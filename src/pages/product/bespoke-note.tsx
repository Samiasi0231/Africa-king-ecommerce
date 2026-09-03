import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AtelierPlaceholder from "@/components/atelier-placeholder";

interface BespokeNoteProps {
  productName: string;
  mtmLabel: string;
}

export default function BespokeNote({ productName, mtmLabel }: BespokeNoteProps) {
  return (
    <section id="bespoke-note" className="bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center gap-5 px-5 py-12 sm:gap-6 sm:px-8 sm:py-16 lg:order-1 lg:gap-6.5 lg:px-0 lg:py-24 lg:pr-18 lg:pl-10">
          <span className="text-[10.5px] tracking-[0.3em] text-[#8B9AAF] uppercase">Or start from your own pattern</span>
          <h2 className="text-[clamp(26px,5.5vw,44px)] leading-[1.06] font-normal font-serif">
            This suit, cut
            <br />
            only for you.
          </h2>
          <p className="max-w-[42ch] text-[15px] leading-relaxed font-light text-[#B6B0A4]">
            {productName} is available made to measure by appointment — your cloth, your lapel, your trouser finish.
            Ninety minutes with a cutter, two fittings, four weeks. From {mtmLabel}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/fitting">Book a fitting</Link>
            </Button>
            <Button asChild variant="outlineLight">
              <Link to="/">How it works</Link>
            </Button>
          </div>
        </div>
        <div className="relative order-1 h-[280px] overflow-hidden bg-[#171B21] sm:h-[360px] lg:order-2 lg:h-auto lg:min-h-[460px]">
          <AtelierPlaceholder />
        </div>
      </div>
    </section>
  );
}
