import { FaShoppingBag } from "react-icons/fa";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi";

const Features = () => {
  return (
    <section className="bg-white px-4 py-16 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full p-4">
            <FaShoppingBag className="text-xl" />
          </div>
          <h4 className="mb-2 tracking-tighter">Free Internation Shipping</h4>
          <p className="text-sm tracking-tighter text-gray-600">
            On all orders over $100
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full p-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h4 className="mb-2 tracking-tighter">45 Days Return</h4>
          <p className="text-sm tracking-tighter text-gray-600">
            Money Back Guarentee
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full p-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="mb-2 tracking-tighter">Secure Checkout</h4>
          <p className="text-sm tracking-tighter text-gray-600">
            100% Secured Checkout Process
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
