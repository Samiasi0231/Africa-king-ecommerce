import { Link } from "react-router-dom";
import ProductCard from "@/components/product-card";
import { useShop } from "@/context/shop-context";
import type { Product } from "@/types/product";

export default function RelatedProducts({ items }: { items: Product[] }) {
  const { money } = useShop();
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-25">
      <div className="flex items-end justify-between gap-6 pb-9">
        <h2 className="text-[clamp(26px,2.8vw,38px)] font-normal font-serif">Complete the look</h2>
        <Link to="/catalogue" className="text-[11px] tracking-[0.2em] uppercase">All pieces →</Link>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
        {items.map((r) => (
          <ProductCard key={r.id} id={r.id} name={r.name} cloth={r.cloth} img={r.img} pos={r.pos} priceLabel={money(r.price)} />
        ))}
      </div>
    </section>
  );
}
