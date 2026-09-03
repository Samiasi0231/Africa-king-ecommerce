const STEPS = [
  ["01 — Consultation", "Cloth books, lapel and pocket choices, and twenty-odd measurements taken by hand. We photograph posture from three angles and note how you stand, not how you should."],
  ["02 — Two fittings", "A basted garment first — chalk on cloth, seams open. Then a near-finished fitting for balance and sleeve pitch. Most men need both; some need three, at no extra cost."],
  ["03 — Delivery", "Pressed, bagged and delivered by hand in Lagos or by courier abroad. Your pattern stays in the atelier — the next commission needs no fitting at all."],
];

export default function HowItWorks() {
  return (
    <section className="bg-secondary px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
        {STEPS.map(([title, body]) => (
          <div key={title} className="flex flex-col gap-3">
            <span className="font-serif text-xl">{title}</span>
            <p className="m-0 text-[13.5px] leading-relaxed font-light text-[#5C584F]">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
