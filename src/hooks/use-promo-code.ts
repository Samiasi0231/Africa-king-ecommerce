import { useState } from "react";

const CODES: Record<string, number> = { ADEKING: 0.1, IKOYI26: 0.05 };

export function usePromoCode(subtotal: number) {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState("");
  const [codeMsg, setCodeMsg] = useState("");
  const [codeOk, setCodeOk] = useState(false);

  const rate = CODES[applied] || 0;
  const discount = Math.round(subtotal * rate);

  const applyCode = () => {
    const key = (code || "").trim().toUpperCase();
    if (CODES[key]) {
      setApplied(key);
      setCodeMsg(`${key} applied — ${Math.round(CODES[key] * 100)}% house credit`);
      setCodeOk(true);
    } else {
      setApplied("");
      setCodeMsg(key ? "That code is not recognised" : "Enter a code first");
      setCodeOk(false);
    }
  };

  return { code, setCode, codeMsg, codeOk, discount, applyCode };
}
