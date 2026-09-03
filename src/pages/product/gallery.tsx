import { cn } from "@/lib/utils";
import type { GalleryShot } from "@/types/product";

interface GalleryProps {
  gallery: GalleryShot[];
  shot: number;
  onSelect: (i: number) => void;
  tag?: string;
  productName: string;
}

export default function Gallery({ gallery, shot, onSelect, tag, productName }: GalleryProps) {
  const active = gallery[shot] || gallery[0];

  return (
    <>
      {/* Main image: first on mobile, middle column at lg */}
      <div className="relative order-1 aspect-4/5 overflow-hidden bg-[#EFEAE0] lg:order-2">
        <img src={active.img} alt={productName} className={cn("absolute inset-0 h-full w-full object-cover", active.pos)} />
        {tag && (
          <span className="absolute top-4.5 left-4.5 bg-[#0B0D10]/72 px-3 py-1.5 text-[9px] tracking-[0.18em] text-primary-foreground uppercase">
            {tag}
          </span>
        )}
      </div>

      {/* Thumbnails: horizontal scroll strip below image on mobile, sticky side column at lg */}
      <div className="order-2 flex gap-2.5 overflow-x-auto pb-1 lg:order-1 lg:sticky lg:top-27 lg:flex-col lg:overflow-visible lg:pb-0">
        {gallery.map((g, i) => (
          <button
            key={g.img + i}
            type="button"
            onClick={() => onSelect(i)}
            className={cn(
              "relative aspect-3/4 w-16 shrink-0 cursor-pointer overflow-hidden border bg-[#EFEAE0] p-0 lg:w-auto",
              shot === i ? "border-primary" : "border-border"
            )}
          >
            <img
              src={g.img}
              alt={g.alt}
              className={cn("absolute inset-0 h-full w-full object-cover", g.pos, shot === i ? "opacity-100" : "opacity-72")}
            />
          </button>
        ))}
      </div>
    </>
  );
}
