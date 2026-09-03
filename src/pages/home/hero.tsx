import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  { src: "/img/hero-1.png", alt: "Bespoke navy three-piece suit against a gold curtain" },
  { src: "/img/hero-2.png", alt: "Bespoke navy three-piece suit, studio portrait" },
  { src: "/img/hero-3.png", alt: "Bespoke navy suit against black velvet" },
];

export default function Hero() {
  const [hero, setHero] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHero((h) => (h + 1) % HERO_IMAGES.length), 5200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:min-h-[88vh] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-center gap-6 px-5 py-14 sm:gap-7 sm:px-8 sm:py-18 lg:gap-8.5 lg:px-0 lg:py-24 lg:pr-18 lg:pl-10">
          <span className="text-[10px] tracking-[0.28em] text-[#8B9AAF] uppercase sm:text-[10.5px] sm:tracking-[0.34em]">
            Bespoke tailoring · Est. Lagos
          </span>
          <h1 className="text-[clamp(38px,9vw,82px)] leading-[0.98] font-normal tracking-tight font-serif text-balance">
            Made for
            <br />
            Africa kings<span className="text-[#8B9AAF]">…</span>
          </h1>
          <p className="max-w-[40ch] text-[15px] leading-relaxed font-light font-jost text-[#B6B0A4] sm:text-base">
            Two fittings, one silhouette, cut for the way you carry yourself. Hand-finished in our Ikoyi atelier and
            delivered to your door — wherever the throne sits.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Button asChild>
              <Link to="/fitting">Book a fitting</Link>
            </Button>
            <Button asChild variant="outlineLight">
              <Link to="/catalogue">The collection</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[50vh] overflow-hidden bg-[#171B21] sm:min-h-[60vh]">
          {HERO_IMAGES.map((h, i) => (
            <img
              key={h.src}
              src={h.src}
              alt={h.alt}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-[center_30%] transition-opacity duration-[1400ms] ease-in-out",
                hero === i ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <div className="absolute right-7 bottom-7 flex gap-2">
            {HERO_IMAGES.map((h, i) => (
              <button
                key={h.src}
                type="button"
                aria-label={`Portrait ${i + 1}`}
                onClick={() => setHero(i)}
                className={cn("h-0.5 w-6.5 cursor-pointer border-0", hero === i ? "bg-primary-foreground" : "bg-primary-foreground/30")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
