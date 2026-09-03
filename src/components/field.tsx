import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  span2?: boolean;
}

export default function Field({ label, value, onChange, placeholder, type = "text", span2 = false }: FieldProps) {
  return (
    <label className={cn("flex flex-col gap-2", span2 && "col-span-2")}>
      <Label>{label}</Label>
      <Input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </label>
  );
}
