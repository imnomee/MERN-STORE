import Hero from "../components/Layout/Hero";
import FeatureCollectionSection from "../components/Products/FeatureCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureCollectionSection />
      <NewArrivals />
    </div>
  );
};

export default Home;
