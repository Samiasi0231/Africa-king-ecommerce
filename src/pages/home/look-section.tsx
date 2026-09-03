import { Link } from "react-router-dom";
import { useShop } from "@/context/shop-context";

const LOOKS = [
  { title: "The Coronation", img: "/img/look-coronation.png", desc: "Ìjọba three-piece · Poplin shirt · Ivory silk tie", price: 850000 },
  { title: "Harmattan Evening", img: "/img/look-harmattan.png", desc: "Camel overcoat · Charcoal jacket · Sàró frame", price: 620000 },
  { title: "Lagos Weekday", img: "/img/look-weekday.png", desc: "Unstructured jacket · Open collar · Knit tie", price: 380000 },
];

export default function LookSection() {
  const { money } = useShop();
  return (
    <section className="bg-secondary py-14 sm:py-20 lg:py-27.5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-6 pb-11">
          <div className="flex flex-col gap-3">
            <span className="text-[10.5px] tracking-[0.3em] text-muted-foreground uppercase">Styled by the atelier</span>
            <h2 className="text-[clamp(30px,3.2vw,44px)] leading-none font-normal font-serif">The Look</h2>
          </div>
          <p className="max-w-[34ch] text-sm leading-relaxed font-light text-[#5C584F]">
            Three complete answers — suit, shirt, tie and frame, chosen together. Take the set or take the parts.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7.5">
          {LOOKS.map((l) => (
            <div key={l.title} className="flex flex-col gap-4.5">
              <div className="relative aspect-4/3 overflow-hidden bg-[#E4DDCF]">
                <img src={l.img} alt={l.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <span className="font-serif text-xl">{l.title}</span>
              <span className="text-xs leading-loose font-light text-[#5C584F]">{l.desc}</span>
              <Link to="/catalogue" className="text-[11px] tracking-[0.2em] text-primary uppercase">
                Shop the look — from {money(l.price)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
