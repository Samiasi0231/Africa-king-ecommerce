import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Toast from "@/components/toast";
import CartLineItem from "./cart-line-item";
import OrderSummary from "./order-summary";
import FittingPromo from "./fitting-promo";
import EmptyCart from "./empty-cart";
import { useFlash } from "@/hooks/use-flash";
import { useShop } from "@/context/shop-context";

export default function Cart() {
  const { money, groupedBag, bagCount, clearBag } = useShop();
  const [toast, flash] = useFlash(2400);

  const subtotal = groupedBag.reduce((sum, g) => sum + g.price * g.qty, 0);

  return (
    <div className="w-full">
      <section className="mx-auto flex max-w-7xl flex-col gap-3.5 px-5 pt-8 pb-6 sm:px-8 lg:px-10 lg:pt-11.5 lg:pb-7.5">
        <div className="flex gap-2.5 text-[10.5px] tracking-[0.2em] text-muted-foreground uppercase">
          <Link to="/" className="text-muted-foreground">House</Link>
          <span>/</span>
          <span className="text-foreground">Your bag</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-7.5">
          <h1 className="text-[clamp(34px,4.2vw,58px)] leading-none font-normal font-serif">Your bag</h1>
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            {bagCount === 1 ? "One piece" : `${bagCount} pieces`}
          </span>
        </div>
      </section>

      {bagCount > 0 ? (
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:px-10 lg:pb-27.5">
          <div className="flex flex-col">
            <div className="flex justify-between border-b border-foreground/24 pb-3.5 text-[10.5px] tracking-[0.2em] text-muted-foreground uppercase">
              <span>Piece</span>
              <span>Total</span>
            </div>

            {groupedBag.map((g) => (
              <CartLineItem key={g.id + g.size} item={g} onFlash={flash} />
            ))}

            <div className="flex flex-wrap items-center justify-between gap-6 pt-7">
              <Link to="/catalogue" className="text-[11px] tracking-[0.2em] uppercase">← Continue shopping</Link>
              <Button
                variant="link"
                onClick={() => {
                  clearBag();
                  flash("Bag emptied");
                }}
                className="text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground"
              >
                Empty bag
              </Button>
            </div>

            <FittingPromo money={money} />
          </div>

          <OrderSummary subtotal={subtotal} money={money} />
        </section>
      ) : (
        <EmptyCart money={money} />
      )}

      <Toast text={toast} />
    </div>
  );
}
