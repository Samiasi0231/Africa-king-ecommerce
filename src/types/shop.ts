export type Currency = "NGN" | "USD" | "GBP";

export interface Rate {
  sym: string;
  label: string;
  f: number;
}

export interface BagLine {
  id: string;
  name: string;
  size: string;
  price: number;
  img: string;
}

export interface GroupedBagLine extends BagLine {
  qty: number;
}
