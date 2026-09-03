import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "@/context/shop-context";
import { SHIPPING, PAYMENTS } from "@/data/checkout";
import StepShell from "./step-shell";
import AccountStep from "./account-step";
import DeliveryStep from "./delivery-step";
import PaymentStep from "./payment-step";
import ReviewStep from "./review-step";
import CheckoutSummary from "./checkout-summary";
import OrderConfirmed from "./order-confirmed";

export default function Checkout() {
  const { money, rate, groupedBag, bagCount } = useShop();

  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<"new" | "returning">("new");
  const [ship, setShip] = useState("lagos");
  const [pay, setPay] = useState("card");
  const [terms, setTerms] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [err, setErr] = useState("");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [addr, setAddr] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [card, setCard] = useState("");
  const [cardName, setCardName] = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");

  const subtotal = groupedBag.reduce((s, g) => s + g.price * g.qty, 0);
  const shipOpt = SHIPPING.find((s) => s.key === ship) || SHIPPING[0];
  const payOpt = PAYMENTS.find((p) => p.key === pay) || PAYMENTS[0];

  const stepColour = (n: number) => (step === n ? "text-foreground" : step > n ? "text-primary" : "text-[#B9B3A8]");

  const next1 = () => {
    if (!email || !email.includes("@")) return setErr("Enter a valid email address");
    setErr("");
    setStep(2);
  };
  const next2 = () => {
    if (!first || !last || !addr || !city) return setErr("Complete the delivery address");
    setErr("");
    setStep(3);
  };
  const next3 = () => {
    if (pay === "card" && (!card || !exp || !cvc)) return setErr("Complete the card details");
    setErr("");
    setStep(4);
  };
  const placeOrder = () => {
    if (groupedBag.length === 0) return setErr("Your bag is empty");
    if (!terms) return setErr("Accept the house terms to continue");
    setPlaced(true);
  };

  const sumAccount = `${email || "your account"} · ${mode === "returning" ? "signing in" : "new account"}`;
  const sumDelivery = [first + " " + last, addr, city + (region ? `, ${region}` : ""), country, shipOpt.label].filter(Boolean).join(" · ");
  const sumPayment = payOpt.label + (pay === "card" && card ? ` ending ${String(card).slice(-4)}` : "");
  const orderNo = `ADE-${2600 + Math.min(99, bagCount * 7 + 41)}`;

  return (
    <div className="w-full">
      <header className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4 sm:gap-6 sm:px-8 sm:py-5.5 lg:px-10">
          <Link to="/cart" className="text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase">← Back to bag</Link>
          <Link to="/" className="flex flex-col items-center gap-0.5 text-foreground">
            <span className="pl-[0.34em] font-serif text-2xl tracking-[0.34em]">ADÉ</span>
            <span className="text-[8px] tracking-[0.42em] text-muted-foreground uppercase">ATELIER</span>
          </Link>
          <span className="hidden justify-self-end text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase sm:block">Secure checkout</span>
        </div>
      </header>

      {!placed ? (
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-5 pt-9 pb-16 sm:px-8 sm:pt-11 lg:grid-cols-[minmax(0,1fr)_388px] lg:gap-18 lg:px-10 lg:pt-13 lg:pb-30">
          <div className="flex flex-col gap-8.5">
            <div className="flex flex-col gap-4">
              <h1 className="text-[clamp(30px,3.4vw,44px)] leading-none font-normal font-serif">Checkout</h1>
              <div className="flex flex-wrap gap-3 text-[9.5px] tracking-[0.14em] uppercase sm:gap-5.5 sm:text-[10.5px] sm:tracking-[0.2em]">
                <span className={stepColour(1)}>01 Account</span>
                <span className="text-[#C9C3B8]">·</span>
                <span className={stepColour(2)}>02 Delivery</span>
                <span className="text-[#C9C3B8]">·</span>
                <span className={stepColour(3)}>03 Payment</span>
                <span className="text-[#C9C3B8]">·</span>
                <span className={stepColour(4)}>04 Review</span>
              </div>
            </div>

            <StepShell n="01" title="Your account" active={step === 1} done={step > 1} onEdit={() => setStep(1)} summary={<span className="text-[13.5px] font-light text-[#5C584F]">{sumAccount}</span>}>
              <AccountStep mode={mode} setMode={setMode} email={email} setEmail={setEmail} pass={pass} setPass={setPass} phone={phone} setPhone={setPhone} error={err} onNext={next1} />
            </StepShell>

            <StepShell n="02" title="Delivery" active={step === 2} done={step > 2} onEdit={() => setStep(2)} summary={<span className="text-[13.5px] leading-relaxed font-light text-[#5C584F]">{sumDelivery}</span>}>
              <DeliveryStep
                first={first} setFirst={setFirst} last={last} setLast={setLast} addr={addr} setAddr={setAddr}
                city={city} setCity={setCity} region={region} setRegion={setRegion} country={country} setCountry={setCountry}
                ship={ship} setShip={setShip} money={money} error={err} onNext={next2}
              />
            </StepShell>

            <StepShell n="03" title="Payment" active={step === 3} done={step > 3} onEdit={() => setStep(3)} summary={<span className="text-[13.5px] font-light text-[#5C584F]">{sumPayment}</span>}>
              <PaymentStep pay={pay} setPay={setPay} card={card} setCard={setCard} cardName={cardName} setCardName={setCardName} exp={exp} setExp={setExp} cvc={cvc} setCvc={setCvc} error={err} onNext={next3} />
            </StepShell>

            <StepShell n="04" title="Review & pay" active={step === 4} done={false}>
              <ReviewStep
                sumDelivery={sumDelivery}
                sumPayment={sumPayment}
                sumAccount={sumAccount}
                terms={terms}
                onToggleTerms={() => {
                  setTerms((t) => !t);
                  setErr("");
                }}
                error={err}
                total={money(subtotal)}
                onPlaceOrder={placeOrder}
              />
            </StepShell>
          </div>

          <CheckoutSummary
            groupedBag={groupedBag}
            bagCount={bagCount}
            money={money}
            subtotal={subtotal}
            shipLabel={shipOpt.cost === 0 ? "Complimentary" : money(shipOpt.cost)}
          />
        </section>
      ) : (
        <OrderConfirmed
          orderNo={orderNo}
          email={email}
          etaDays={shipOpt.eta}
          shipLabel={shipOpt.label}
          sumPayment={sumPayment}
          groupedBag={groupedBag}
          money={money}
          subtotal={subtotal}
        />
      )}

      <footer className="bg-foreground px-5 py-6 text-[#6E6A62] sm:px-8 lg:px-10 lg:py-7.5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 text-[10.5px] tracking-[0.14em] uppercase">
          <span>© 2026 Adé Atelier</span>
          <span>Card · Apple Pay · Google Pay · PayPal · Prices in {rate.label}</span>
        </div>
      </footer>
    </div>
  );
}
