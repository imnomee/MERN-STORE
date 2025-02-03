import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 lg:px-0">
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Newsletter</h3>
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
              className="rounded-r-md bg-black px-6 py-3 text-sm text-white transition-all hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                Men&apos;s Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                Women&apos;s Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                Children&apos;s Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                Foot Wear
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="transition-all hover:text-gray-600">
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Follow Us</h3>
          <div className="mb-6 flex items-center space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-gray-400"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-gray-400"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-gray-400"
            >
              <MdOutlineAlternateEmail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="text-gray-500">Call Us</p>
        <p>
          <IoCallOutline className="mr-2 inline-block h-5 w-5" />
          +92 (335) 2765432
        </p>
      </div>
      <div className="container mx-auto mt-12 border-t border-e-gray-200 px-4 pt-6 lg:px-0">
        <p className="text-center text-sm tracking-tighter text-gray-500">
          &copy; 2025, Gettit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

import { IoCallOutline } from "react-icons/io5";

export default Footer;
