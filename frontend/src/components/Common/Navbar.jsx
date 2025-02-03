import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
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
        <button className="relative hover:text-black">
          <FaShoppingBag className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 rounded-full bg-red-600 px-1 text-xs text-white">
            4
          </span>
        </button>
        <SearchBar />
        <button className="md:hidden">
          <BsFillMenuButtonWideFill className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
