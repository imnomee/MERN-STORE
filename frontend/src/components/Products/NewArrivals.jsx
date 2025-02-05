import { assets } from "../../assets/assets";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -315 : 315;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooths" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="relative container mx-auto mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Fresh Arrivals:
          <br />
          Premium Dry Fruits & Crispy Nimko!
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          Discover the Latest Selection of Handpicked Dry Fruits and
          Irresistibly Crunchy Nimko – Freshness Guaranteed!
        </p>
        <div className="absolute right-0 bottom-[-50px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`rounded border ${canScrollLeft ? "bg-white text-black" : "cursor-not-allowed bg-gray-200 text-gray-400"}`}
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            disabled={!canScrollRight}
            className={`rounded border ${canScrollRight ? "bg-white text-black" : "cursor-not-allowed bg-gray-200 text-gray-400"}`}
            onClick={() => scroll("right")}
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
      <div
        className="relatives container mx-auto mt-16 flex space-x-6 overflow-x-scroll"
        ref={scrollRef}
      >
        {assets.newArrivals.map((item) => (
          <div
            key={item._id}
            className="relative min-w-[100%] sm:min-w-[50%] lg:min-w-[30%]"
          >
            <img
              src={item.images[0]?.url}
              alt={item.images[0]?.altText || item.name}
              className="h-[500px] w-full rounded-lg object-cover"
              draggable="false"
            />
            <div className="absolute right-0 bottom-0 left-0 rounded-b-lg p-4 text-white backdrop-blur-md">
              <Link to={`/product/${item._id}`} className="block">
                <h4 className="font-medium">{item.name}</h4>
                <p className="mt-1">$ {item.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
