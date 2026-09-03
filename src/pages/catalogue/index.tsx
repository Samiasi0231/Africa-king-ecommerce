import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import Toast from "@/components/toast";
import { useFlash } from "@/hooks/use-flash";
import { useShop } from "@/context/shop-context";
import { CATALOGUE, PRICE_BRACKETS } from "@/data/catalogue";
import type { Product } from "@/types/product";
import type { SortKey } from "./types";
import FilterSidebar from "./filter-sidebar";
import SortBar from "./sort-bar";
import ProductGrid from "./product-grid";
import BespokeBanner from "./bespoke-banner";

export default function Catalogue() {
  const { addToBag } = useShop();
  const [cat, setCat] = useState("All");
  const [occ, setOcc] = useState<string[]>([]);
  const [colours, setColours] = useState<string[]>([]);
  const [bracket, setBracket] = useState("any");
  const [readyOnly, setReadyOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [toast, flash] = useFlash();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggle = (list: string[], setList: (v: string[]) => void, val: string) => {
    setList(list.includes(val) ? list.filter((x) => x !== val) : list.concat([val]));
  };

  const clearAll = () => {
    setCat("All");
    setOcc([]);
    setColours([]);
    setBracket("any");
    setReadyOnly(false);
  };

  const activeBracket = PRICE_BRACKETS.find((b) => b.key === bracket) || PRICE_BRACKETS[0];

  const list = useMemo(() => {
    let items = CATALOGUE.filter(
      (p) =>
        (cat === "All" || p.cat === cat) &&
        (occ.length === 0 || occ.some((o) => p.occ.includes(o))) &&
        (colours.length === 0 || colours.includes(p.colour)) &&
        activeBracket.test(p) &&
        (!readyOnly || p.ready)
    );
    if (sort === "low") items = items.slice().sort((a, b) => a.price - b.price);
    else if (sort === "high") items = items.slice().sort((a, b) => b.price - a.price);
    else items = items.slice().sort((a, b) => a.order - b.order);
    return items;
  }, [cat, occ, colours, activeBracket, readyOnly, sort]);

  const addSize = (p: Product, size: string) => {
    addToBag({ id: p.id, name: p.name, size, price: p.price, img: p.img });
    flash(`${p.name} — size ${size} added`);
  };

  return (
    <div className="w-full">
      <section className="mx-auto flex max-w-7xl flex-col gap-3.5 px-5 pt-8 pb-6 sm:gap-4 sm:px-8 sm:pt-10 lg:gap-4.5 lg:px-10 lg:pt-11.5 lg:pb-8.5">
        <div className="flex gap-2.5 text-[10.5px] tracking-[0.2em] text-muted-foreground uppercase">
          <Link to="/" className="text-muted-foreground">House</Link>
          <span>/</span>
          <span className="text-foreground">The Collection</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6 sm:gap-10">
          <h1 className="text-[clamp(30px,7vw,62px)] leading-none font-normal font-serif">The Collection</h1>
          <p className="max-w-[46ch] text-sm leading-relaxed font-light text-[#5C584F]">
            Twelve pieces cut in the Ikoyi atelier and held in stock. Anything here can be remade to your
            measurements — book a fitting and we start from your pattern instead of ours.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 px-5 pb-16 sm:px-8 lg:grid-cols-[232px_minmax(0,1fr)] lg:gap-14 lg:px-10 lg:pb-30">
        {/* Mobile filter toggle */}
        <button
          type="button"
          onClick={() => setFiltersOpen((o) => !o)}
          className="flex w-fit cursor-pointer items-center gap-2 border border-foreground/24 px-4 py-2.5 text-[11px] tracking-[0.16em] text-foreground uppercase lg:hidden"
        >
          <SlidersHorizontal className="size-3.5" />
          Filters {filtersOpen ? "▲" : "▼"}
        </button>

        <div className={filtersOpen ? "block lg:block" : "hidden lg:block"}>
          <FilterSidebar
            cat={cat}
            setCat={setCat}
            occ={occ}
            toggleOcc={(v) => toggle(occ, setOcc, v)}
            colours={colours}
            toggleColour={(v) => toggle(colours, setColours, v)}
            bracket={bracket}
            setBracket={setBracket}
            readyOnly={readyOnly}
            setReadyOnly={setReadyOnly}
            onClearAll={clearAll}
          />
        </div>

        <div className="flex flex-col gap-6 lg:gap-7.5">
          <SortBar resultCount={list.length} sort={sort} onSortChange={setSort} />
          <ProductGrid items={list} onAddSize={addSize} onClearAll={clearAll} />
        </div>
      </section>

      <BespokeBanner />
      <Toast text={toast} viewBagLink />
    </div>
  );
}
