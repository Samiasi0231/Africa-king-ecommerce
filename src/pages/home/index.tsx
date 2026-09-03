import Hero from "./hero";
import CategoryGrid from "./category-grid";
import NewArrivals from "./new-arrivals";
import LookSection from "./look-section";
import BespokeSection from "./bespoke-section";
import StorySection from "./story-section";
import Testimonials from "./testimonials";
import UgcGrid from "./ugc-grid";
import Newsletter from "./news-letter";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CategoryGrid />
      <NewArrivals />
      <LookSection />
      <BespokeSection />
      <StorySection />
      <Testimonials />
      <UgcGrid />
      <Newsletter />
    </div>
  );
}
