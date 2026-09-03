import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  cloth?: string;
  priceLabel: string;
  img: string;
  pos?: string;
  tag?: string;
  className?: string;
}

export default function ProductCard({ id, name, cloth, priceLabel, img, pos = "object-center", tag, className }: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className={cn("group flex flex-col gap-3.5 text-foreground", className)}>
      <div className="relative aspect-3/4 overflow-hidden bg-[#EFEAE0]">
        <img
          src={img}
          alt={name}
          className={cn("absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90", pos)}
        />
        {tag && <Badge className="absolute top-3.5 left-3.5">{tag}</Badge>}
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-serif text-lg">{name}</span>
        {cloth && <span className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">{cloth}</span>}
        <span className="mt-1 text-[13px] tracking-wide text-primary">{priceLabel}</span>
      </div>
    </Link>
  );
}
