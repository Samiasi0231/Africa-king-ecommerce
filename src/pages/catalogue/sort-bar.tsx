import { Select } from "@/components/ui/select";
import { CATALOGUE } from "@/data/catalogue";
import type { SortKey } from "../catalogue/types";

interface SortBarProps {
  resultCount: number;
  sort: SortKey;
  onSortChange: (v: SortKey) => void;
}

export default function SortBar({ resultCount, sort, onSortChange }: SortBarProps) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-border pb-4">
      <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {resultCount === CATALOGUE.length ? `${CATALOGUE.length} pieces` : `${resultCount} of ${CATALOGUE.length} pieces`}
      </span>
      <div className="flex items-center gap-2.5">
        <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Sort</span>
        <Select value={sort} onChange={(e) => onSortChange(e.target.value as SortKey)}>
          <option value="featured">Featured</option>
          <option value="low">Price — low to high</option>
          <option value="high">Price — high to low</option>
          <option value="new">Newest</option>
        </Select>
      </div>
    </div>
  );
}
