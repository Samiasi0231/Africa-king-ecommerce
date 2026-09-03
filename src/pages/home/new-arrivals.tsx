import { Link } from "react-router-dom";
import ProductCard from "@/components/product-card";
import { useShop } from "@/context/shop-context";

const NEW_ARRIVALS = [
  { name: "The Ìjọba Three-Piece", cloth: "Midnight wool · Peak lapel", img: "/img/prod-suit.png", price: 850000, id: "ijoba" },
  { name: "Harmattan Overcoat", cloth: "Camel cashmere · Double-breasted", img: "/img/prod-coat.png", price: 620000, id: "harmattan" },
  { name: "Ìkòyí Poplin Shirt", cloth: "Egyptian cotton · Cutaway collar", img: "/img/prod-shirt.png", price: 145000, id: "poplin" },
  { name: "Sàró Acetate Frame", cloth: "Hand-polished · Tortoise", img: "/img/prod-eyewear.png", price: 210000, id: "saro" },
];

export default function NewArrivals() {
  const { money } = useShop();
  return (
    <section id="new" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-25">
      <div className="flex items-end justify-between gap-6 pb-10">
        <h2 className="text-[clamp(30px,3.2vw,44px)] leading-none font-normal font-serif">New to the house</h2>
        <Link to="/catalogue" className="text-[11px] tracking-[0.2em] uppercase">View all →</Link>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
        {NEW_ARRIVALS.map((p) => (
          <ProductCard key={p.id} id={p.id} name={p.name} cloth={p.cloth} img={p.img} priceLabel={money(p.price)} />
        ))}
      </div>
    </section>
  );
}
