import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="hidden items-center space-x-4 md:flex">
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <MdOutlineAlternateEmail className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>
        <div className="flex-grow text-center text-sm">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="hidden text-sm md:block">
          <a href="tel:+923352765432" className="hover:text-gray-300">
            +92 (335) 2765432
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
