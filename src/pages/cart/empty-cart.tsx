import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";

const SUGGESTIONS = [
  { name: "The Ìjọba Three-Piece", price: 850000, img: "/img/prod-suit.png", id: "ijoba" },
  { name: "Harmattan Overcoat", price: 620000, img: "/img/prod-coat.png", id: "harmattan" },
  { name: "Ìkòyí Poplin Shirt", price: 145000, img: "/img/prod-shirt.png", id: "poplin" },
  { name: "Sàró Acetate Frame", price: 210000, img: "/img/prod-eyewear.png", id: "saro" },
];

export default function EmptyCart({ money }: { money: (n: number) => string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-4 pb-16 sm:px-8 lg:px-10 lg:pt-5 lg:pb-27.5">
      <div className="flex flex-col items-center gap-4 border-y border-border px-5 py-14 text-center sm:gap-5 sm:py-18 lg:py-22.5">
        <span className="font-serif text-3xl">Nothing in the bag yet.</span>
        <p className="max-w-[46ch] text-[14.5px] leading-relaxed font-light text-[#5C584F]">
          Twelve pieces are held in stock in Ikoyi and dispatch within forty-eight hours. Or sit with a cutter and
          start from your own pattern.
        </p>
        <div className="mt-1.5 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/catalogue">Shop the collection</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/fitting">Book a fitting</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-7.5 pt-19">
        <h2 className="text-[clamp(24px,2.6vw,34px)] font-normal font-serif">Start here</h2>
        <div className="grid grid-cols-2 gap-5 sm:gap-6.5 lg:grid-cols-4">
          {SUGGESTIONS.map((s) => (
            <ProductCard key={s.id} id={s.id} name={s.name} img={s.img} priceLabel={money(s.price)} />
          ))}
        </div>
      </div>
    </section>
  );
}
