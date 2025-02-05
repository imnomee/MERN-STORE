import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const FeatureCollectionSection = () => {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row">
        <div className="relative flex-1">
          <img
            src={assets.dryfruit}
            alt="Dry Fruit"
            className="h-[700px] w-full rounded-lg object-cover"
          />
          <div className="bg-opacity-90 absolute bottom-8 left-8 bg-white p-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Dry Fruit Collection
            </h2>
            <Link
              to="/collection/all?type=dryfruit"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={assets.nimko}
            alt="Dry Fruit"
            className="h-[700px] w-full rounded-lg object-cover"
          />
          <div className="bg-opacity-90 absolute bottom-8 left-8 bg-white p-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Nimko Collection
            </h2>
            <Link
              to="/collection/all?type=nimko"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCollectionSection;
