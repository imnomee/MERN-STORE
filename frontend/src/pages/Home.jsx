import { assets } from "../assets/assets";
import Hero from "../components/Layout/Hero";

import FeatureCollectionSection from "../components/Products/FeatureCollectionSection";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import Features from "../components/Products/Features";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductsGrid from "../components/Products/ProductsGrid";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureCollectionSection />
      <NewArrivals />
      <h2 className="mb-4 text-center text-3xl font-bold">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Top Wears for Women
        </h2>
        <ProductsGrid products={assets.topCollection} />
      </div>
      <FeaturedCollection />
      <Features />
    </div>
  );
};

export default Home;
