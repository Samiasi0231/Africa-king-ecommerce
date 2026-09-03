import { Link } from "react-router-dom";
import { APPOINTMENTS } from "@/data/orders";

export default function AppointmentsTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-baseline justify-between gap-5 border-b border-foreground/24 pb-3.5">
        <span className="font-serif text-[26px]">Appointments</span>
        <Link to="/fitting" className="text-[10.5px] tracking-[0.18em] uppercase">Book a fitting →</Link>
      </div>
      {APPOINTMENTS.map((a) => (
        <div key={a.title} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b border-border py-5">
          <div className="flex flex-col gap-1.5">
            <span className="font-serif text-lg">{a.title}</span>
            <span className="text-[12.5px] tracking-wide text-muted-foreground">{a.when} · {a.place} · {a.who}</span>
            <span className={`text-xs tracking-[0.16em] uppercase ${a.upcoming ? "text-[#3F5C46]" : "text-[#9A948A]"}`}>{a.state}</span>
          </div>
          {a.upcoming && (
            <div className="flex flex-wrap justify-end gap-2">
              <button type="button" className="cursor-pointer border border-foreground/24 px-5 py-2.5 text-[10.5px] tracking-[0.18em] text-foreground uppercase hover:border-foreground">
                Reschedule
              </button>
              <button type="button" className="cursor-pointer px-1 py-2.5 text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground">
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
