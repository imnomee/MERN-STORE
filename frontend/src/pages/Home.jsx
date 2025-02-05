import Hero from "../components/Layout/Hero";

import FeatureCollectionSection from "../components/Products/FeatureCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureCollectionSection />
      <NewArrivals />
      <h2 className="mb-4 text-center text-3xl font-bold">Best Seller</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;
