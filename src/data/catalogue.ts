import type { Product, ProductDetail, ColourDef, PriceBracket } from "@/types/product";

export const CATALOGUE: Product[] = [
  { id: "ijoba", name: "The Ìjọba Three-Piece", cat: "Suits", cloth: "Midnight wool · Peak lapel", price: 850000, img: "/img/prod-suit.png", pos: "object-center", colour: "navy", occ: ["Ceremony", "Business"], sizes: ["46", "48", "50", "52"], out: ["46"], ready: true, tag: "New", order: 1 },
  { id: "adenoir", name: "Adé Midnight Two-Piece", cat: "Suits", cloth: "Super 150s wool · Notch lapel", price: 720000, img: "/img/hero-2.png", pos: "object-center", colour: "navy", occ: ["Business", "Evening"], sizes: ["48", "50", "52"], out: [], ready: true, tag: "", order: 4 },
  { id: "velvet", name: "Reception Velvet Suit", cat: "Suits", cloth: "Cotton velvet · Shawl collar", price: 940000, img: "/img/hero-3.png", pos: "object-center", colour: "black", occ: ["Evening", "Ceremony"], sizes: ["48", "50"], out: ["50"], ready: false, tag: "Final pieces", order: 7 },
  { id: "ikoyi-jkt", name: "Ìkòyí Unstructured Jacket", cat: "Jackets", cloth: "Wool hopsack · Unlined", price: 380000, img: "/img/look-weekday.png", pos: "object-center", colour: "navy", occ: ["Weekday"], sizes: ["46", "48", "50", "52"], out: [], ready: true, tag: "", order: 3 },
  { id: "flannel-jkt", name: "Ashfield Flannel Jacket", cat: "Jackets", cloth: "Charcoal flannel · Patch pockets", price: 420000, img: "/img/cat-jackets.png", pos: "object-top", colour: "grey", occ: ["Weekday", "Business"], sizes: ["48", "50", "52"], out: ["52"], ready: true, tag: "", order: 8 },
  { id: "harmattan", name: "Harmattan Overcoat", cat: "Coats", cloth: "Camel cashmere · Double-breasted", price: 620000, img: "/img/prod-coat.png", pos: "object-center", colour: "camel", occ: ["Evening", "Business"], sizes: ["48", "50", "52"], out: [], ready: true, tag: "New", order: 2 },
  { id: "travel-coat", name: "Alexander Travel Coat", cat: "Coats", cloth: "Storm-finished wool · Raglan", price: 540000, img: "/img/cat-coats.png", pos: "object-center", colour: "grey", occ: ["Weekday"], sizes: ["48", "50"], out: [], ready: false, tag: "", order: 9 },
  { id: "poplin", name: "Ìkòyí Poplin Shirt", cat: "Shirts", cloth: "Egyptian cotton · Cutaway collar", price: 145000, img: "/img/prod-shirt.png", pos: "object-center", colour: "white", occ: ["Business", "Weekday"], sizes: ["15", "15.5", "16", "16.5", "17"], out: [], ready: true, tag: "", order: 5 },
  { id: "sea-island", name: "Sea Island Dress Shirt", cat: "Shirts", cloth: "Sea Island cotton · French cuff", price: 168000, img: "/img/ugc-4.png", pos: "object-center", colour: "white", occ: ["Evening", "Ceremony"], sizes: ["15.5", "16", "16.5"], out: ["15.5"], ready: true, tag: "", order: 10 },
  { id: "grenadine", name: "Grenadine Silk Tie", cat: "Ties", cloth: "Hand-rolled silk · 8cm", price: 68000, img: "/img/cat-ties.png", pos: "object-top", colour: "navy", occ: ["Business", "Ceremony"], sizes: ["One size"], out: [], ready: true, tag: "", order: 6 },
  { id: "knit-tie", name: "Navy Knit Tie", cat: "Ties", cloth: "Silk knit · Square end", price: 58000, img: "/img/ugc-2.png", pos: "object-center", colour: "navy", occ: ["Weekday"], sizes: ["One size"], out: [], ready: true, tag: "", order: 11 },
  { id: "saro", name: "Sàró Acetate Frame", cat: "Eyewear", cloth: "Hand-polished acetate · Tortoise", price: 210000, img: "/img/prod-eyewear.png", pos: "object-center", colour: "camel", occ: ["Weekday", "Business"], sizes: ["One size"], out: [], ready: true, tag: "New", order: 12 },
];

export const CATEGORY_NAMES = ["All", "Suits", "Jackets", "Coats", "Shirts", "Ties", "Eyewear"] as const;
export const OCCASION_NAMES = ["Business", "Ceremony", "Evening", "Weekday"] as const;

export const COLOUR_DEFS: ColourDef[] = [
  { key: "navy", label: "Navy", swatch: "bg-[#25314A]" },
  { key: "black", label: "Black", swatch: "bg-[#15181C]" },
  { key: "grey", label: "Grey", swatch: "bg-[#6E7278]" },
  { key: "camel", label: "Camel", swatch: "bg-[#B08A5E]" },
  { key: "white", label: "White", swatch: "bg-[#F2EFE8]" },
];

export const PRICE_BRACKETS: PriceBracket[] = [
  { key: "any", label: "All prices", test: () => true },
  { key: "u200", label: "Under ₦200,000", test: (p) => p.price < 200000 },
  { key: "200-600", label: "₦200,000 – ₦600,000", test: (p) => p.price >= 200000 && p.price <= 600000 },
  { key: "o600", label: "Above ₦600,000", test: (p) => p.price > 600000 },
];

// Full detail content — only the Ìjọba piece had a dedicated Product page in
// the original design. Other catalogue items fall back to generic content
// built from their catalogue entry (see pages/product).
export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  ijoba: {
    mtm: 1180000,
    gallery: [
      { img: "/img/prod-suit.png", pos: "object-center", alt: "Full length, front" },
      { img: "/img/hero-2.png", pos: "object-center", alt: "Studio portrait" },
      { img: "/img/hero-3.png", pos: "object-center", alt: "Against black velvet" },
      { img: "/img/cat-jackets.png", pos: "object-top", alt: "Lapel and cuff detail" },
    ],
    low: ["52"],
    blurb: "Our house suit. Milled in Biella, cut with a clean shoulder and a waistcoat that sits close enough to wear without the jacket. Trousers finished with a 4cm turn-up as standard.",
    subtitle: "Midnight wool · Peak lapel · Half-canvassed",
    panels: [
      { key: "cloth", title: "Cloth & construction", body: "Super 130s midnight wool milled in Biella, 280g — weighted for air-conditioning and evening air rather than Lagos noon. Half-canvassed chest, Milanese buttonhole, working cuffs, Bemberg lining in ink. Waistcoat fully lined with an adjustable back strap." },
      { key: "fit", title: "Fit", body: "Clean natural shoulder, moderate suppression through the waist, single 32cm vent. Trouser cut with a mid rise, slim-straight leg and a 4cm turn-up. Model is 186cm wearing a 50." },
      { key: "care", title: "Care", body: "Brush after each wear, hang on a broad wooden hanger, and dry clean sparingly — twice a year is plenty. Steam rather than press. We service every Adé garment free of charge in Ikoyi." },
      { key: "ship", title: "Shipping & returns", body: "Dispatched from Ikoyi within 48 hours, delivered in 2–4 days to Lagos and 4–7 days internationally, duties paid. Unworn stock pieces may be returned within 30 days. Made-to-measure commissions are final." },
    ],
    related: ["poplin", "grenadine", "saro"],
  },
};

export function findProduct(id: string | undefined): Product | undefined {
  return CATALOGUE.find((p) => p.id === id);
}
