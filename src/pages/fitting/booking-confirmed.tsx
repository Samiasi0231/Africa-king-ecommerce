import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BookingConfirmedProps {
  ref: string;
  confirmLine: string;
  email: string;
  phone: string;
  service: string;
  when: string;
  place: string;
  cutter: string;
  feeLabel: string;
}

export default function BookingConfirmed({ ref, confirmLine, email, phone, service, when, place, cutter, feeLabel }: BookingConfirmedProps) {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-18 lg:px-10 lg:py-24 lg:pb-32.5">
      <div className="flex flex-col gap-6.5">
        <span className="text-[10.5px] tracking-[0.3em] text-muted-foreground uppercase">Request {ref}</span>
        <h1 className="text-[clamp(34px,4vw,56px)] leading-[1.04] font-normal font-serif">
          The book is open.
          <br />
          We will confirm within the day.
        </h1>
        <p className="max-w-[54ch] text-[15px] leading-relaxed font-light text-[#4E4A42]">
          {confirmLine} A note is on its way to {email || "your email"}, and Segun will call {phone || "your mobile"}{" "}
          if anything about the slot needs moving.
        </p>
        <div className="flex flex-col gap-3 border-t border-border pt-6.5">
          <span className="text-[10.5px] tracking-[0.24em] text-muted-foreground uppercase">Before you come</span>
          <span className="text-[14.5px] leading-loose font-light text-[#4E4A42]">
            Bring the shoes you intend to wear with the garment. Wear a shirt you like the fit of. Ninety minutes, no
            rush — and if you are having something made for an occasion, bring the date.
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/dashboard">See it in your account</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/catalogue">Browse the collection</Link>
          </Button>
        </div>
      </div>
      <aside className="flex flex-col gap-4 bg-foreground p-8 text-primary-foreground">
        <span className="text-[10.5px] tracking-[0.26em] text-[#8B9AAF] uppercase">Requested</span>
        <span className="font-serif text-2xl leading-tight">{service}</span>
        <div className="flex flex-col gap-2.5 border-t border-primary-foreground/16 pt-4.5 text-sm font-light text-[#B6B0A4]">
          <span>{when}</span>
          <span>{place}</span>
          <span>{cutter}</span>
          <span>Fee — {feeLabel}</span>
        </div>
      </aside>
    </section>
  );
}
