import { useMemo, useState } from "react";
import { useShop } from "@/context/shop-context";
import { SERVICES, PLACES, SLOT_TIMES, buildDays } from "@/data/fitting";
import FittingHero from "./fitting-hero";
import ServiceStep from "./service-step";
import PlaceStep from "./place-step";
import DateStep from "./date-step";
import ContactStep from "./contact-step";
import SummaryAside from "./summary-aside";
import HowItWorks from "./howIt-works";
import BookingConfirmed from "./booking-confirmed";

export default function Fitting() {
  const { money } = useShop();
  const days = useMemo(buildDays, []);

  const [service, setService] = useState("measure");
  const [place, setPlace] = useState("ikoyi");
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [booked, setBooked] = useState(false);
  const [err, setErr] = useState("");

  const sv = SERVICES.find((s) => s.key === service) || SERVICES[0];
  const pl = PLACES.find((p) => p.key === place) || PLACES[0];
  const current = days[day] || days[0];
  const isSlotTaken = (i: number) => (day + i) % 4 === 0;

  const dateHint =
    pl.key === "london"
      ? "London slots run 8–12 September only."
      : pl.key === "newyork"
      ? "New York slots run 2–5 October only."
      : "The atelier is closed on Sundays and Mondays.";

  const confirm = () => {
    if (!slot) return setErr("Choose a time first");
    if (!name) return setErr("Tell us who to expect");
    if (!email || !email.includes("@")) return setErr("Enter a valid email address");
    setErr("");
    setBooked(true);
  };

  const ref = `FIT-${900 + day * 7 + SLOT_TIMES.indexOf(slot) + 3}`;
  const feeLabel = pl.fee === 0 ? "No charge" : money(pl.fee);

  if (booked) {
    return (
      <div className="w-full">
        <BookingConfirmed
          ref={ref}
          confirmLine={`${sv.label} on ${current.full} at ${slot || "—"}, ${pl.label}.`}
          email={email}
          phone={phone}
          service={sv.label}
          when={`${current.full}, ${slot}`}
          place={pl.label}
          cutter={pl.cutter}
          feeLabel={feeLabel}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <FittingHero />

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-18 lg:px-10 lg:pt-19 lg:pb-30">
        <div className="flex flex-col gap-9 lg:gap-11.5">
          <ServiceStep service={service} onSelect={setService} />
          <PlaceStep
            place={place}
            onSelect={(key) => {
              setPlace(key);
              setSlot("");
            }}
          />
          <DateStep
            days={days}
            day={day}
            slot={slot}
            dateHint={dateHint}
            onSelectDay={(i) => {
              setDay(i);
              setSlot("");
              setErr("");
            }}
            onSelectSlot={(t) => {
              setSlot(t);
              setErr("");
            }}
            onClosedDay={() => setErr("The atelier is closed that day")}
            onTakenSlot={() => setErr("That slot is taken — try another")}
            isSlotTaken={isSlotTaken}
          />
          <ContactStep
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            note={note}
            setNote={setNote}
          />
        </div>

        <SummaryAside
          service={sv.label}
          place={pl.label}
          when={slot ? `${current.full}, ${slot}` : `${current.full} — choose a time`}
          cutter={pl.cutter}
          feeLabel={feeLabel}
          feeNote={
            pl.fee === 0
              ? "Fittings and measurement sessions are complimentary. We ask only that you keep the slot."
              : "The house-call fee is credited in full against your first commission."
          }
          error={err}
          onConfirm={confirm}
        />
      </section>

      <HowItWorks />
    </div>
  );
}
