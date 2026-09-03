import { Link } from "react-router-dom";

interface ToastProps {
  text: string;
  viewBagLink?: boolean;
}

export default function Toast({ text, viewBagLink = false }: ToastProps) {
  if (!text) return null;
  return (
    <div className="fixed bottom-6 left-1/2 z-60 flex -translate-x-1/2 items-center gap-5 bg-foreground px-6 py-4 text-[11px] tracking-[0.16em] text-primary-foreground uppercase">
      <span>{text}</span>
      {viewBagLink && (
        <Link to="/cart" className="border-b border-[#8B9AAF]/50 pb-0.5 text-[#8B9AAF]">
          View bag
        </Link>
      )}
    </div>
  );
}
