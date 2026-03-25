import Hero from '../components/home/Hero.jsx';
import DealsBanner from '../components/home/DealsBanner.jsx';
import CategoryGrid from '../components/home/CategoryGrid.jsx';
import WhyDiesel from '../components/home/WhyDiesel.jsx';
import ReviewsSection from '../components/home/ReviewsSection.jsx';
import LoyaltyTeaser from '../components/home/LoyaltyTeaser.jsx';
import HoursMap from '../components/home/HoursMap.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <DealsBanner />
      <CategoryGrid />
      <WhyDiesel />
      <ReviewsSection />
      <LoyaltyTeaser />
      <HoursMap />
    </>
  );
}
