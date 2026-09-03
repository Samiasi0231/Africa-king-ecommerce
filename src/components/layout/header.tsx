import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useShop } from "@/context/shop-context";
import { cn } from "@/lib/utils";

interface HeaderConfig {
  announcement: string | null;
  bespokeHref: string;
}

// Per-route header config, replacing the props each page used to pass in.
function useHeaderConfig(): HeaderConfig {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return {
      announcement: "Complimentary worldwide shipping on made-to-measure — Lagos · London · New York",
      bespokeHref: "/fitting",
    };
  }
  if (pathname === "/catalogue") {
    return {
      announcement: "Ready to wear, shipped worldwide — made to measure by appointment",
      bespokeHref: "/fitting",
    };
  }
  if (pathname.startsWith("/product")) {
    return {
      announcement: "Complimentary worldwide shipping — Lagos · London · New York",
      bespokeHref: "#bespoke-note",
    };
  }
  if (pathname === "/cart") {
    return {
      announcement: "Complimentary worldwide shipping · Duties included",
      bespokeHref: "/fitting",
    };
  }
  return { announcement: null, bespokeHref: "/fitting" };
}

const navLinkClass = "text-foreground/80 transition-colors hover:text-primary";
const mobileLinkClass = "border-b border-border py-3.5 text-sm tracking-[0.1em] text-foreground uppercase";

export default function Header({ accountLabel = "Account" }: { accountLabel?: string }) {
  const { bagCount } = useShop();
  const { announcement, bespokeHref } = useHeaderConfig();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on route change.
  const key = location.pathname;

  return (
    <>
      {announcement && (
        <div className="bg-foreground px-4 py-2.5 text-center text-[10px] font-light tracking-[0.16em] text-[#CFC8BA] uppercase sm:px-5 sm:text-[11px] sm:tracking-[0.22em]">
          {announcement}
        </div>
      )}

      <header key={key} className="sticky top-0 z-40 border-b border-border bg-background/94 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-10 lg:py-5">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="cursor-pointer text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          {/* Desktop left nav */}
          <nav className="hidden gap-6.5 text-[11.5px] tracking-[0.16em] uppercase lg:flex">
            <Link to="/catalogue" className={navLinkClass}>Suits</Link>
            <Link to="/catalogue" className={navLinkClass}>Shirts</Link>
            <Link to="/catalogue" className={navLinkClass}>Coats</Link>
            <Link to="/catalogue" className={navLinkClass}>Accessories</Link>
          </nav>

          <Link to="/" className="flex flex-col items-center gap-0.5 justify-self-center text-foreground">
            <span className="pl-[0.34em] font-serif text-xl leading-none tracking-[0.3em] sm:text-[26px] sm:tracking-[0.34em]">
              ADÉ
            </span>
            <span className="text-[7px] tracking-[0.36em] text-muted-foreground uppercase sm:text-[8.5px] sm:tracking-[0.42em]">
              ATELIER
            </span>
          </Link>

          {/* Desktop right nav */}
          <div className="hidden items-center justify-end gap-6.5 text-[11.5px] tracking-[0.16em] uppercase lg:flex">
            <Link to={bespokeHref} className={navLinkClass}>Bespoke</Link>
            <Link to="/" className={navLinkClass}>The House</Link>
            <Link to="/dashboard" className={navLinkClass}>{accountLabel}</Link>
            <Link to="/cart" className="flex items-center gap-1.5 text-primary transition-colors hover:text-foreground">
              <ShoppingBag className="size-3.5" />
              Bag ({bagCount})
            </Link>
          </div>

          {/* Mobile bag icon (always visible, right-aligned) */}
          <Link to="/cart" className="flex items-center gap-1.5 justify-self-end text-primary lg:hidden">
            <ShoppingBag className="size-5" />
            <span className="text-[11px]">({bagCount})</span>
          </Link>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <nav className="flex flex-col border-t border-border bg-background px-5 lg:hidden">
            <Link to="/catalogue" className={mobileLinkClass} onClick={() => setOpen(false)}>Suits</Link>
            <Link to="/catalogue" className={mobileLinkClass} onClick={() => setOpen(false)}>Shirts</Link>
            <Link to="/catalogue" className={mobileLinkClass} onClick={() => setOpen(false)}>Coats</Link>
            <Link to="/catalogue" className={mobileLinkClass} onClick={() => setOpen(false)}>Accessories</Link>
            <Link to={bespokeHref} className={mobileLinkClass} onClick={() => setOpen(false)}>Bespoke</Link>
            <Link to="/" className={mobileLinkClass} onClick={() => setOpen(false)}>The House</Link>
            <Link to="/dashboard" className={cn(mobileLinkClass, "border-b-0")} onClick={() => setOpen(false)}>
              {accountLabel}
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
