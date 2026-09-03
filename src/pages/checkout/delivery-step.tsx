import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Field from "@/components/field";
import { cn } from "@/lib/utils";
import { SHIPPING, COUNTRIES } from "@/data/checkout";

interface DeliveryStepProps {
  first: string; setFirst: (v: string) => void;
  last: string; setLast: (v: string) => void;
  addr: string; setAddr: (v: string) => void;
  city: string; setCity: (v: string) => void;
  region: string; setRegion: (v: string) => void;
  country: string; setCountry: (v: string) => void;
  ship: string; setShip: (v: string) => void;
  money: (n: number) => string;
  error: string;
  onNext: () => void;
}

export default function DeliveryStep({
  first, setFirst, last, setLast, addr, setAddr, city, setCity, region, setRegion, country, setCountry,
  ship, setShip, money, error, onNext,
}: DeliveryStepProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First name" value={first} onChange={setFirst} placeholder="Adebayo" />
        <Field label="Surname" value={last} onChange={setLast} placeholder="Okonkwo" />
        <Field label="Street address" value={addr} onChange={setAddr} placeholder="14 Alexander Avenue" span2 />
        <Field label="City" value={city} onChange={setCity} placeholder="Lagos" />
        <Field label="State / region" value={region} onChange={setRegion} placeholder="Lagos State" />
        <label className="col-span-2 flex flex-col gap-2">
          <Label>Country</Label>
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </label>
      </div>

      <div className="flex flex-col gap-2.5">
        <Label>Delivery method</Label>
        {SHIPPING.map((s) => {
          const on = ship === s.key;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setShip(s.key)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-5 border p-4.5 text-left hover:border-primary",
                on ? "border-primary bg-secondary" : "border-border bg-transparent"
              )}
            >
              <span className="flex flex-col gap-1">
                <span className="text-sm text-foreground">{s.label}</span>
                <span className="text-xs font-light text-muted-foreground">{s.note}</span>
              </span>
              <span className="text-[13px] text-primary">{s.cost === 0 ? "Complimentary" : money(s.cost)}</span>
            </button>
          );
        })}
      </div>

      <Button onClick={onNext} size="lg" className="w-fit">
        Continue to payment
      </Button>
      {error && <span className="text-xs text-[#C08A6A]">{error}</span>}
    </div>
  );
}
