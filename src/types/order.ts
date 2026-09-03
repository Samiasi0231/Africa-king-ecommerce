export interface OrderItem {
  name: string;
  size: string;
  qty: number;
  price: number;
  img: string;
  note: string;
}

export interface Order {
  ref: string;
  date: string;
  title: string;
  pieces: string;
  status: string;
  statusLine: string;
  stage: number;
  img: string;
  address: string;
  payment: string;
  items: OrderItem[];
}

export interface Measurement {
  label: string;
  value: string;
}

export interface Appointment {
  title: string;
  when: string;
  place: string;
  who: string;
  state: string;
  upcoming: boolean;
}

export interface Address {
  tag: string;
  lines: string;
  primary: boolean;
}

export interface SavedItem {
  name: string;
  price: number;
  img: string;
  pos: string;
  stock: string;
  low: boolean;
}
