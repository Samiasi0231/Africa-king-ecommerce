import { Button } from "@/components/ui/button";
import Field from "@/components/field";
import { cn } from "@/lib/utils";

interface AccountStepProps {
  mode: "new" | "returning";
  setMode: (m: "new" | "returning") => void;
  email: string;
  setEmail: (v: string) => void;
  pass: string;
  setPass: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  error: string;
  onNext: () => void;
}

export default function AccountStep({ mode, setMode, email, setEmail, pass, setPass, phone, setPhone, error, onNext }: AccountStepProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-6.5 text-[11px] tracking-[0.16em] uppercase">
        <button
          type="button"
          onClick={() => setMode("new")}
          className={cn("cursor-pointer border-b pb-1.5", mode === "new" ? "border-primary text-foreground" : "border-transparent text-[#9A948A]")}
        >
          Create account
        </button>
        <button
          type="button"
          onClick={() => setMode("returning")}
          className={cn("cursor-pointer border-b pb-1.5", mode === "returning" ? "border-primary text-foreground" : "border-transparent text-[#9A948A]")}
        >
          Sign in
        </button>
      </div>
      <p className="m-0 max-w-[56ch] text-[13px] leading-relaxed font-light text-[#5C584F]">
        An account holds your measurements, order history and fitting appointments — every future piece starts from
        your pattern, not ours.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Email" value={email} onChange={setEmail} placeholder="you@example.com" type="email" span2 />
        <Field label="Password" value={pass} onChange={setPass} placeholder="••••••••" type="password" />
        <Field label="Mobile" value={phone} onChange={setPhone} placeholder="+234" type="tel" />
      </div>
      <Button onClick={onNext} size="lg" className="w-fit">
        Continue to delivery
      </Button>
      {error && <span className="text-xs text-[#C08A6A]">{error}</span>}
    </div>
  );
}
