import { IoCloseCircleOutline } from "react-icons/io5";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 flex h-full w-3/4 transform flex-col bg-white shadow-lg transition-transform duration-300 sm:w-1/2 md:w-2/4 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoCloseCircleOutline className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <h2 className="mb-4 text-xl font-semibold">Your Cart</h2>
        <CartContents />
      </div>
      <div className="sticky bottom-0 bg-white p-4">
        <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition-all hover:bg-gray-800">
          Checkout
        </button>
        <p className="mt-2 text-center text-sm tracking-tighter text-gray-500">
          Shipping, taxes, and discount codes are calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
