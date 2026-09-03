import Field from "@/components/field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import StepHeader from "./step-header";

interface ContactStepProps {
  name: string;
  setName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  note: string;
  setNote: (v: string) => void;
}

export default function ContactStep({ name, setName, phone, setPhone, email, setEmail, note, setNote }: ContactStepProps) {
  return (
    <div className="flex flex-col gap-4.5">
      <StepHeader n="04" title="Who shall we expect?" />
      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <Field label="Full name" value={name} onChange={setName} placeholder="Adebayo Okonkwo" />
        <Field label="Mobile" value={phone} onChange={setPhone} placeholder="+234 803 000 0000" type="tel" />
        <Field label="Email" value={email} onChange={setEmail} placeholder="you@example.com" type="email" span2 />
        <label className="col-span-2 flex flex-col gap-2">
          <Label>What are you having made? (optional)</Label>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="A navy three-piece for my brother's wedding in December"
          />
        </label>
      </div>
    </div>
  );
}
