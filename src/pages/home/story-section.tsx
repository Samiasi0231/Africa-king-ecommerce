export default function StorySection() {
  return (
    <section id="story" className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-16 text-center sm:gap-7 sm:px-8 sm:py-24 lg:gap-8.5 lg:px-10 lg:py-32.5">
      <span className="text-[10.5px] tracking-[0.3em] text-muted-foreground uppercase">The House</span>
      <p className="max-w-[30ch] text-[clamp(24px,2.9vw,38px)] leading-[1.38] font-serif text-balance">
        Adé means crown. We cut for the men who wear one without announcing it.
      </p>
      <p className="max-w-[62ch] text-[15px] leading-loose font-light text-[#5C584F]">
        Founded in Lagos by a third-generation cutter, the house works in Italian and West African cloth — aso-oke
        woven to our width, wool milled in Biella. Every garment is patterned by hand, basted, and finished by one
        tailor from first cut to final press. Nothing leaves the atelier that the cutter has not worn on his own arm.
      </p>
      <a href="#" className="border-b border-primary pb-1 text-[11px] tracking-[0.2em] uppercase">
        Read our craft →
      </a>
    </section>
  );
}
