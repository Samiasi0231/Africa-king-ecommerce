export interface Product {
  id: string;
  name: string;
  cat: string;
  cloth: string;
  price: number;
  img: string;
  pos: string;
  colour: string;
  occ: string[];
  sizes: string[];
  out: string[];
  ready: boolean;
  tag: string;
  order: number;
}

export interface GalleryShot {
  img: string;
  pos: string;
  alt: string;
}

export interface Panel {
  key: string;
  title: string;
  body: string;
}

export interface ProductDetail {
  mtm: number;
  gallery: GalleryShot[];
  low: string[];
  blurb: string;
  subtitle: string;
  panels: Panel[];
  related: string[];
}

export interface ColourDef {
  key: string;
  label: string;
  swatch: string;
}

export interface PriceBracket {
  key: string;
  label: string;
  test: (p: Product) => boolean;
}
