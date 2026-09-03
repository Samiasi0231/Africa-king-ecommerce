export const TABS = [
  { key: "overview", label: "Overview" },
  { key: "orders", label: "Orders" },
  { key: "measure", label: "Measurements" },
  { key: "appts", label: "Appointments" },
  { key: "addr", label: "Addresses" },
  { key: "saved", label: "Saved pieces" },
] as const;

export type ViewKey = (typeof TABS)[number]["key"] | "order";
