import { Link } from "react-router-dom";

const CATEGORIES = [
  { label: "Suits", img: "/img/prod-suit.png", pos: "object-center", featured: true },
  { label: "Shirts", img: "/img/prod-shirt.png", pos: "object-center" },
  { label: "Ties", img: "/img/cat-ties.png", pos: "object-top" },
  { label: "Coats", img: "/img/cat-coats.png", pos: "object-center" },
  { label: "Jackets", img: "/img/cat-jackets.png", pos: "object-top" },
  { label: "Eyewear", img: "/img/prod-eyewear.png", pos: "object-center" },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-5 pt-14 pb-8 sm:px-8 sm:pt-20 lg:px-10 lg:pt-29 lg:pb-10">
      <div className="flex items-end justify-between gap-6 border-b border-border pb-8.5">
        <h2 className="text-[clamp(30px,3.2vw,44px)] leading-none font-normal font-serif">The Wardrobe</h2>
        <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Six disciplines</span>
      </div>
      <div className="mt-0.5 grid grid-cols-2 gap-0.5 sm:grid-cols-3">
        {CATEGORIES.map((c) => (
          <Link
            key={c.label}
            to="/catalogue"
            className="group relative block aspect-4/5 min-w-0 overflow-hidden bg-[#171B21] text-primary-foreground hover:opacity-93"
          >
            <img src={c.img} alt={c.label} className={`absolute inset-0 h-full w-full object-cover ${c.pos}`} />
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#0B0D10]/80 via-[#0B0D10]/18 to-transparent p-6.5">
              <span className="font-serif text-[27px]">{c.label}</span>
              {c.featured && (
                <span className="mt-2 text-[10.5px] tracking-[0.2em] text-[#C6CEDA] uppercase">Made to measure →</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
