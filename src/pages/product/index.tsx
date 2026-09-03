import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Toast from "@/components/toast";
import { useFlash } from "@/hooks/use-flash";
import { useShop } from "@/context/shop-context";
import { findProduct, PRODUCT_DETAILS, CATALOGUE } from "@/data/catalogue";
import Gallery from "./gallery";
import PurchasePanel from "./purchase-panel";
import AccordionPanels from "./accordion-panels";
import SizeGuideTable from "./size-guide-table";
import BespokeNote from "./bespoke-note";
import RelatedProducts from "./related-products";

export default function Product() {
  const { id } = useParams();
  const { money, addToBag } = useShop();
  const product = findProduct(id) || CATALOGUE[0];
  const detail = PRODUCT_DETAILS[product.id] || {
    mtm: Math.round(product.price * 1.35),
    gallery: [{ img: product.img, pos: product.pos, alt: product.name }],
    low: [],
    blurb: `Cut in the Ikoyi atelier from ${product.cloth.toLowerCase()}. Available ready to wear in the sizes below, or made to your own measurements by appointment.`,
    subtitle: product.cloth,
    panels: [
      { key: "cloth", title: "Cloth & construction", body: `${product.cloth}. Finished by hand in our Ikoyi workshop.` },
      { key: "fit", title: "Fit", body: "True to size — if you sit between two sizes, take the larger and let the atelier take it in." },
      { key: "care", title: "Care", body: "Brush after wear and dry clean sparingly. We service every Adé garment free of charge in Ikoyi." },
      { key: "ship", title: "Shipping & returns", body: "Dispatched from Ikoyi within 48 hours. Unworn stock pieces may be returned within 30 days." },
    ],
    related: CATALOGUE.filter((p) => p.id !== product.id).slice(0, 3).map((p) => p.id),
  };

  const [shot, setShot] = useState(0);
  const [size, setSize] = useState("");
  const [saved, setSaved] = useState(false);
  const [toast, flash] = useFlash();

  const gone = size && (product.out || []).includes(size);
  const low = size && (detail.low || []).includes(size);

  let stockNote = "Sizes held in stock — 48 hour dispatch";
  let stockColour = "text-[#5C584F]";
  if (size && !gone && low) {
    stockNote = `Last one in size ${size}`;
    stockColour = "text-[#8C4A2F]";
  } else if (size && !gone) {
    stockNote = "In stock — dispatched within 48 hours";
    stockColour = "text-[#3F5C46]";
  }

  const handleAdd = () => {
    if (!size) {
      flash("Choose a size first");
      return;
    }
    addToBag({ id: product.id, name: product.name, size, price: product.price, img: detail.gallery[0].img });
    flash(`${product.name} — size ${size} added`);
  };

  const related = (detail.related || [])
    .map((rid) => findProduct(rid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="w-full">
      <section className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 pt-5 text-[10px] tracking-[0.16em] text-muted-foreground uppercase sm:px-8 sm:text-[10.5px] sm:tracking-[0.2em] lg:px-10 lg:pt-7.5">
        <Link to="/" className="text-muted-foreground">House</Link>
        <span>/</span>
        <Link to="/catalogue" className="text-muted-foreground">Collection</Link>
        <span>/</span>
        <Link to="/catalogue" className="text-muted-foreground">{product.cat}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 px-5 pt-6 pb-14 sm:px-8 sm:pt-7 lg:grid-cols-[92px_minmax(0,1fr)_minmax(390px,430px)] lg:gap-x-13.5 lg:gap-y-5.5 lg:px-10 lg:pt-8.5 lg:pb-25">
        <Gallery gallery={detail.gallery} shot={shot} onSelect={setShot} tag={product.tag} productName={product.name} />

        <div className="order-3 lg:order-3 lg:sticky lg:top-27">
          <PurchasePanel
            product={product}
            subtitle={detail.subtitle}
            blurb={detail.blurb}
            priceLabel={money(product.price)}
            size={size}
            onSelectSize={setSize}
            onSoldOutClick={(s) => flash(`Size ${s} is sold out — made to measure is open`)}
            stockNote={stockNote}
            stockColour={stockColour}
            saved={saved}
            onToggleSaved={() => setSaved((s) => !s)}
            onAddToBag={handleAdd}
            addLabel={size ? `Add to bag — ${money(product.price)}` : "Select a size"}
          />
          <AccordionPanels panels={detail.panels} />
        </div>
      </section>

      <SizeGuideTable />
      <BespokeNote productName={product.name} mtmLabel={money(detail.mtm)} />
      <RelatedProducts items={related} />

      <Toast text={toast} viewBagLink />
    </div>
  );
}
