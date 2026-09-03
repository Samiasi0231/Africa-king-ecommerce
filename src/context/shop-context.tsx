import { createContext, useContext, useEffect, useState, useCallback, useMemo, type ReactNode } from "react";
import type { Currency, Rate, BagLine, GroupedBagLine } from "@/types/shop";

const BAG_KEY = "ade.bag.v1";

export const RATES: Record<Currency, Rate> = {
  NGN: { sym: "₦", label: "NGN", f: 1 },
  USD: { sym: "$", label: "USD", f: 0.00135 },
  GBP: { sym: "£", label: "GBP", f: 0.00106 },
};

interface ShopContextValue {
  currency: Currency;
  rate: Rate;
  money: (n: number) => string;
  bag: BagLine[];
  bagCount: number;
  groupedBag: GroupedBagLine[];
  addToBag: (line: BagLine) => void;
  removeOneLine: (id: string, size: string) => void;
  removeAllOfLine: (id: string, size: string) => void;
  clearBag: () => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children, currency = "NGN" }: { children: ReactNode; currency?: Currency }) {
  const [bag, setBag] = useState<BagLine[]>(() => {
    try {
      const raw = localStorage.getItem(BAG_KEY);
      return raw ? (JSON.parse(raw) as BagLine[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(BAG_KEY, JSON.stringify(bag));
    } catch {
      /* ignore quota errors */
    }
  }, [bag]);

  const rate = RATES[currency] || RATES.NGN;

  const money = useCallback((n: number) => rate.sym + Math.round(n * rate.f).toLocaleString("en-US"), [rate]);

  const addToBag = useCallback((line: BagLine) => {
    setBag((b) => b.concat([line]));
  }, []);

  const removeOneLine = useCallback((id: string, size: string) => {
    setBag((b) => {
      const next = b.slice();
      for (let i = next.length - 1; i >= 0; i--) {
        if (next[i].id === id && next[i].size === size) {
          next.splice(i, 1);
          break;
        }
      }
      return next;
    });
  }, []);

  const removeAllOfLine = useCallback((id: string, size: string) => {
    setBag((b) => b.filter((x) => !(x.id === id && x.size === size)));
  }, []);

  const clearBag = useCallback(() => setBag([]), []);

  const groupedBag = useMemo<GroupedBagLine[]>(() => {
    const grouped: GroupedBagLine[] = [];
    bag.forEach((b) => {
      const hit = grouped.find((g) => g.id === b.id && g.size === b.size);
      if (hit) hit.qty += 1;
      else grouped.push({ ...b, qty: 1 });
    });
    return grouped;
  }, [bag]);

  const value: ShopContextValue = {
    currency,
    rate,
    money,
    bag,
    bagCount: bag.length,
    groupedBag,
    addToBag,
    removeOneLine,
    removeAllOfLine,
    clearBag,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopContextValue {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within a ShopProvider");
  return ctx;
}
