import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Newsletter
          </h3>
          <p className="mb-4 text-gray-500">
            Be the first to hear about new products, exclusive events, and
            online offers
          </p>
          <p className="mb-6 text-sm font-medium text-gray-600">
            Sign up and get 10% off of your first order.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full rounded-l-md border-t border-b border-l border-gray-300 p-3 text-sm transition-all focus:ring-2 focus:ring-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-r-md bg-black px-6 py-3 text-sm text-white transition-all hover:bg-orange-500"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                Nuts
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                Seeds
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                Dry Fruits
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                Exotic and Premium
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-orange-500">
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Follow Us
          </h3>
          <div className="mb-6 flex items-center space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-orange-500"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-orange-500"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-orange-500"
            >
              <MdOutlineAlternateEmail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <IoCallOutline className="mr-2 inline-block h-5 w-5" />
            +92 (312) 5441515
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-col justify-between border-t border-e-gray-200 px-4 pt-6 md:flex-row lg:px-0">
        <p className="text-center text-sm tracking-tighter text-gray-500 md:w-3/4">
          &copy; 2025 - Jaan Dry Fruits. All Rights Reserved.
        </p>
        <p className="text-center text-xs md:w-1/4 md:text-right">
          Powered by:{" "}
          <a
            href="https://nrportfolio.site"
            target="_blank"
            rel="noopener noreferer"
          >
            Nomee
          </a>
        </p>
      </div>
    </footer>
  );
};

import { IoCallOutline } from "react-icons/io5";

export default Footer;
