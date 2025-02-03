import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <Link to="/" className="text-2xl font-extrabold">
            Gettit
          </Link>
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Children
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            FootWear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <FaRegUser className="h-5 w-5 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <FaShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 rounded-full bg-red-600 px-1 text-xs text-white">
              4
            </span>
          </button>
          <SearchBar />
          <button className="md:hidden" onClick={toggleNavDrawer}>
            <BsFillMenuButtonWideFill className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      <div
        className={`fixed top-0 left-0 z-50 h-full w-3/4 transform bg-white shadow-lg transition-all duration-300 sm:w-1/2 md:w-1/3 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoCloseCircleOutline className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 border-b border-gray-600 py-2 text-xl font-semibold">
            Menu
          </h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Children
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Footwear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
