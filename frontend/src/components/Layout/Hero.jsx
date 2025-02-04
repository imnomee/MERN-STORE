import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={assets.hero}
        alt="Hero Image"
        className="h-[400px] w-full object-cover md:h-[600px] lg:h-[750px]"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black opacity-60">
        <div className="p-6 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold tracking-tight uppercase md:text-7xl">
            Healthy Snacking,
            <br />
            Made
            <br />
            Affordable!
          </h1>
          <p className="mb-6 text-sm tracking-tighter md:text-xl">
            High-Quality Dry Fruits at the Best Prices
            <br />
            Perfect for Every Day!
          </p>
          <Link
            to="#"
            className="rounded-sm bg-white px-6 py-2 text-xl text-gray-950 transition hover:bg-orange-500 hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
