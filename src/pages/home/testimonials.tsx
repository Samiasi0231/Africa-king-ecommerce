const TESTIMONIALS = [
  { quote: "The shoulder sits like it grew there. I have not worn another jacket since March.", author: "Tunde A. · Lagos" },
  { quote: "They took my measurements in a hotel room in London and it still arrived perfect.", author: "Kwame O. · London" },
  { quote: "Wore the Coronation set to my father's eightieth. Every uncle asked for the address.", author: "Ebuka N. · New York" },
];

export default function Testimonials() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.author}
            className={`m-0 flex flex-col gap-4 p-8 sm:gap-5 sm:p-12 lg:p-16.5 ${
              i < 2 ? "border-b border-border lg:border-r lg:border-b-0" : ""
            }`}
          >
            <span className="text-xs tracking-[0.3em] text-primary">★★★★★</span>
            <blockquote className="m-0 font-serif text-lg leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase">{t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
