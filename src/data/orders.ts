import type { Order, Measurement, Appointment, Address, SavedItem } from "@/types/order";

export const ORDERS: Order[] = [
  {
    ref: "ADE-2641", date: "12 August 2026", title: "Ìjọba Three-Piece · Poplin Shirt", pieces: "2 pieces",
    status: "In transit", statusLine: "With DHL — arriving Monday 24 August", stage: 3, img: "/img/prod-suit.png",
    address: "14 Alexander Avenue, Ikoyi, Lagos, Nigeria", payment: "Card ending 4417 · Paystack",
    items: [
      { name: "The Ìjọba Three-Piece", size: "50", qty: 1, price: 850000, img: "/img/prod-suit.png", note: "Trousers finished with 4cm turn-up" },
      { name: "Ìkòyí Poplin Shirt", size: "16", qty: 2, price: 145000, img: "/img/prod-shirt.png", note: "Cutaway collar, no monogram" },
    ],
  },
  {
    ref: "ADE-2588", date: "2 July 2026", title: "Harmattan Overcoat", pieces: "1 piece",
    status: "Delivered", statusLine: "Delivered 7 July · alterations window closes 5 October", stage: 4, img: "/img/prod-coat.png",
    address: "42 Elgin Crescent, London W11, United Kingdom", payment: "PayPal",
    items: [
      { name: "Harmattan Overcoat", size: "50", qty: 1, price: 620000, img: "/img/prod-coat.png", note: "Sleeves shortened 1.5cm at the atelier" },
    ],
  },
  {
    ref: "ADE-2402", date: "19 March 2026", title: "Sàró Frame · Grenadine Tie", pieces: "2 pieces",
    status: "Delivered", statusLine: "Delivered 22 March", stage: 4, img: "/img/prod-eyewear.png",
    address: "14 Alexander Avenue, Ikoyi, Lagos, Nigeria", payment: "Card ending 4417 · Paystack",
    items: [
      { name: "Sàró Acetate Frame", size: "One size", qty: 1, price: 210000, img: "/img/prod-eyewear.png", note: "Fitted with clear lenses" },
      { name: "Grenadine Silk Tie", size: "One size", qty: 1, price: 68000, img: "/img/cat-ties.png", note: "" },
    ],
  },
];

export const STAGES = ["Placed", "Cut & finished", "Dispatched", "Delivered"];

export const MEASUREMENTS: Measurement[] = [
  { label: "Chest", value: "104" }, { label: "Waist", value: "92" }, { label: "Seat", value: "101" }, { label: "Shoulder", value: "46.5" },
  { label: "Sleeve L", value: "64" }, { label: "Sleeve R", value: "64.5" }, { label: "Jacket length", value: "75" }, { label: "Neck", value: "41" },
  { label: "Trouser waist", value: "90" }, { label: "Inseam", value: "81" }, { label: "Thigh", value: "60" }, { label: "Height", value: "186" },
];

export const APPOINTMENTS: Appointment[] = [
  { title: "Second fitting — Ìjọba commission", when: "Thu 3 September, 10:30", place: "Ikoyi atelier", who: "Segun, master cutter", state: "Confirmed", upcoming: true },
  { title: "First fitting — Ìjọba commission", when: "Thu 6 August, 09:00", place: "Ikoyi atelier", who: "Segun, master cutter", state: "Completed", upcoming: false },
  { title: "Measurement session", when: "Thu 14 May, 16:00", place: "Ikoyi atelier", who: "Segun, master cutter", state: "Completed", upcoming: false },
];

export const ADDRESSES: Address[] = [
  { tag: "Default · Lagos", lines: "Adebayo Okonkwo · 14 Alexander Avenue, Ikoyi, Lagos State, Nigeria · +234 803 000 0000", primary: true },
  { tag: "London", lines: "Adebayo Okonkwo · 42 Elgin Crescent, London W11 2JD, United Kingdom · +44 7700 000000", primary: false },
];

export const SAVED: SavedItem[] = [
  { name: "Reception Velvet Suit", price: 940000, img: "/img/hero-3.png", pos: "object-center", stock: "Final pieces — size 48 only", low: true },
  { name: "Alexander Travel Coat", price: 540000, img: "/img/cat-coats.png", pos: "object-center", stock: "Made to order — 4 weeks", low: false },
  { name: "Ashfield Flannel Jacket", price: 420000, img: "/img/cat-jackets.png", pos: "object-top", stock: "In stock", low: false },
];
