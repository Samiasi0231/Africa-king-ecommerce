import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BespokeBanner() {
  return (
    <section className="bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="relative h-[280px] overflow-hidden bg-[#171B21] sm:h-[360px] lg:h-auto lg:min-h-[420px]">
          <img
            src="/img/hero-1.png"
            alt="Navy three-piece suit, atelier portrait"
            className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-5 py-12 sm:gap-6 sm:px-8 sm:py-16 lg:gap-6.5 lg:px-0 lg:py-22 lg:pr-10 lg:pl-18">
          <span className="text-[10.5px] tracking-[0.3em] text-[#8B9AAF] uppercase">By appointment</span>
          <h2 className="text-[clamp(26px,5.5vw,44px)] leading-[1.06] font-normal font-serif">
            None of these are
            <br />
            your measurements.
          </h2>
          <p className="max-w-[42ch] text-[15px] leading-relaxed font-light text-[#B6B0A4]">
            Stock pieces fit most men well. A pattern cut to you fits one man perfectly. Ninety minutes in Ikoyi, or
            a house call in London and New York.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/fitting">Book a fitting</Link>
            </Button>
            <Button asChild variant="outlineLight">
              <Link to="/">Size &amp; fit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
