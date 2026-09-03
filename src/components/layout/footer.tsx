import { Link, useLocation } from "react-router-dom";
import { useShop } from "@/context/shop-context";

type FooterVariant = "full" | "compact" | "locations";

// "full"      — big multi-column footer (Home, Catalogue, Cart)
// "compact"   — single copyright + currency line (Product, Dashboard)
// "locations" — copyright + city list, no currency (Fitting)
function useFooterVariant(): FooterVariant {
  const { pathname } = useLocation();
  if (pathname.startsWith("/product")) return "compact";
  if (pathname === "/dashboard") return "compact";
  if (pathname === "/fitting") return "locations";
  return "full";
}

const footerLinkClass = "text-[#B6B0A4] transition-colors hover:text-primary-foreground";

export default function Footer() {
  const { rate } = useShop();
  const variant = useFooterVariant();

  if (variant === "locations") {
    return (
      <footer className="bg-foreground px-5 py-6 text-[#6E6A62] sm:px-10 sm:py-8.5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-[10.5px] tracking-[0.14em] uppercase">
          <span>© 2026 Adé Atelier</span>
          <span>Ikoyi · London · New York</span>
        </div>
      </footer>
    );
  }

  if (variant === "compact") {
    return (
      <footer className="bg-foreground px-5 py-6 text-[#6E6A62] sm:px-10 sm:py-8.5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-[10.5px] tracking-[0.14em] uppercase">
          <span>© 2026 Adé Atelier</span>
          <span>Prices in {rate.label}</span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-foreground px-5 pt-12 pb-8 text-[#B6B0A4] sm:px-10 sm:pt-19.5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 pb-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-14 lg:pb-14">
        <div className="flex flex-col gap-4.5">
          <span className="pl-[0.34em] font-serif text-[23px] tracking-[0.34em] text-primary-foreground">ADÉ</span>
          <p className="max-w-[34ch] text-[13px] leading-[1.8] font-light">
            Made for Africa kings. Cut in Ikoyi, Lagos — 14 Alexander Avenue. By appointment.
          </p>
        </div>

        <FooterColumn
          title="Shop"
          links={[
            ["All pieces", "/catalogue"],
            ["Suits", "/catalogue"],
            ["Shirts", "/catalogue"],
            ["Coats & Jackets", "/catalogue"],
            ["Eyewear", "/catalogue"],
          ]}
        />
        <FooterColumn
          title="Service"
          links={[
            ["Book a fitting", "/fitting"],
            ["Size & fit", "#"],
            ["Shipping", "#"],
            ["Alterations", "#"],
          ]}
        />
        <FooterColumn
          title="House"
          links={[
            ["Our craft", "/"],
            ["The Journal", "#"],
            ["Trunk shows", "#"],
            ["Instagram", "#"],
          ]}
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-primary-foreground/14 pt-6 text-[10.5px] tracking-[0.14em] text-[#6E6A62] uppercase">
        <span>© 2026 Adé Atelier</span>
        <span>Shipping to Nigeria · Prices in {rate.label}</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="flex flex-col gap-3.5 text-xs">
      <span className="mb-1 text-[10px] tracking-[0.24em] text-[#6E6A62] uppercase">{title}</span>
      {links.map(([label, href]) =>
        href.startsWith("/") ? (
          <Link key={label} to={href} className={footerLinkClass}>
            {label}
          </Link>
        ) : (
          <a key={label} href={href} className={footerLinkClass}>
            {label}
          </a>
        )
      )}
    </div>
  );
}
