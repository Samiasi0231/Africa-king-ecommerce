export interface ServiceOption {
  key: string;
  label: string;
  note: string;
  meta: string;
}

export const SERVICES: ServiceOption[] = [
  { key: "measure", label: "Measurement session", note: "First time with the house — twenty-odd measurements, cloth chosen, pattern started.", meta: "90 minutes" },
  { key: "fitting", label: "Fitting on a commission", note: "A basted or near-finished garment already in progress.", meta: "45 minutes" },
  { key: "consult", label: "Cloth consultation", note: "Sit with the books before committing — no measurements taken.", meta: "30 minutes" },
  { key: "alter", label: "Alteration & service", note: "Adjustments to an Adé piece you already own, complimentary for ninety days.", meta: "30 minutes" },
];

export interface PlaceOption {
  key: string;
  label: string;
  note: string;
  fee: number;
  cutter: string;
}

export const PLACES: PlaceOption[] = [
  { key: "ikoyi", label: "Ikoyi atelier — Lagos", note: "14 Alexander Avenue · Tue to Sat", fee: 0, cutter: "Segun, master cutter" },
  { key: "london", label: "London trunk show", note: "Mayfair · 8–12 September only", fee: 0, cutter: "Segun, travelling cutter" },
  { key: "newyork", label: "New York trunk show", note: "Tribeca · 2–5 October only", fee: 0, cutter: "Kunle, senior cutter" },
  { key: "house", label: "House call", note: "Your home or office, anywhere in Lagos", fee: 45000, cutter: "Segun, master cutter" },
];

export const SLOT_TIMES = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DOW_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MON_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export interface DayInfo {
  idx: number;
  dow: string;
  num: string;
  mon: string;
  full: string;
  closed: boolean;
}

export function buildDays(): DayInfo[] {
  const base = new Date(2026, 7, 24);
  const out: DayInfo[] = [];
  let i = 0;
  while (out.length < 12) {
    const d = new Date(base.getTime() + i * 86400000);
    i++;
    if (d.getDay() === 0) continue;
    out.push({
      idx: out.length,
      dow: DOW[d.getDay()],
      num: String(d.getDate()),
      mon: MON[d.getMonth()],
      full: `${DOW_FULL[d.getDay()]} ${d.getDate()} ${MON_FULL[d.getMonth()]}`,
      closed: d.getDay() === 1,
    });
  }
  return out;
}
