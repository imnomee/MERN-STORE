import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const FeaturedCollection = () => {
  return (
    <section className="px-4 py-10 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse items-center rounded-3xl bg-green-50 md:flex-row">
        <div className="p-8 text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">
            Comfort and Style
          </h2>
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Apparel made for everyday life
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in
            doloremque voluptate omnis officia. Aliquam, veniam omnis eveniet,
            ea esse autem ipsum illum rem vero dolore cupiditate explicabo error
            maiores, veritatis quos obcaecati earum molestiae iusto maxime
            voluptatum quo. Officia earum nam, at vel porro ea asperiores
            consectetur. Ducimus, temporibus.
          </p>
          <Link
            to="/collections/all"
            className="rounded-lg bg-black px-6 py-3 text-lg text-white hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={assets.bestSeller.images[0].url}
            alt={assets.bestSeller.images[0].altText || assets.bestSeller.name}
            className="h-auto w-full rounded-tl-3xl rounded-tr-3xl object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
