export interface ShippingOption {
  key: string;
  label: string;
  note: string;
  cost: number;
  eta: string;
}

export const SHIPPING: ShippingOption[] = [
  { key: "lagos", label: "Lagos courier — same day", note: "Ordered before 2pm, delivered by evening", cost: 0, eta: "Same day" },
  { key: "nigeria", label: "Nigeria — 2 to 4 days", note: "Insured courier, signature on delivery", cost: 0, eta: "2–4 days" },
  { key: "world", label: "International — 4 to 7 days", note: "DHL Express, duties and taxes included", cost: 0, eta: "4–7 days" },
];

export interface PaymentOption {
  key: string;
  label: string;
  note: string;
}

export const PAYMENTS: PaymentOption[] = [
  { key: "card", label: "Card", note: "Paystack in Nigeria · Flutterwave elsewhere" },
  { key: "apple", label: "Apple Pay", note: "Confirm with Face ID" },
  { key: "google", label: "Google Pay", note: "Pay with a saved Google card" },
  { key: "paypal", label: "PayPal", note: "For orders placed outside Nigeria" },
];

export const COUNTRIES = ["Nigeria", "United Kingdom", "United States", "Ghana", "South Africa", "United Arab Emirates"];
