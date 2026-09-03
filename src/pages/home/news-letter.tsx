import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="bg-secondary px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-26">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-5.5 text-center">
        <h2 className="text-[clamp(26px,2.8vw,36px)] font-normal font-serif">Letters from the atelier</h2>
        <p className="max-w-[48ch] text-sm leading-relaxed font-light text-[#5C584F]">
          New cloth, private trunk shows, and the occasional note on how to fold a pocket square. Twice a month,
          never more.
        </p>
        {subscribed ? (
          <p className="mt-3 font-serif text-xl text-primary">Welcome to the house. Check your inbox.</p>
        ) : (
          <div className="mt-2.5 flex w-full max-w-[460px] border-b border-foreground/30">
            <Input type="email" placeholder="Your email address" className="border-0" />
            <Button variant="ghost" size="sm" onClick={() => setSubscribed(true)} className="shrink-0">
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
