import { useCallback, useRef, useState } from "react";

export function useFlash(duration = 2600) {
  const [message, setMessage] = useState("");
  const timer = useRef<number | undefined>(undefined);

  const flash = useCallback(
    (msg: string) => {
      setMessage(msg);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setMessage(""), duration);
    },
    [duration]
  );

  return [message, flash] as const;
}
