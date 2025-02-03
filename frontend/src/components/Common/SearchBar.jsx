import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen(false);
    setSearchTerm("");
  };
  return (
    <div
      className={`flex w-full items-center justify-center transition-all duration-300 ${isOpen ? "absolute top-0 left-0 z-50 h-24 w-full bg-white" : "w-auto"}`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex w-full items-center justify-center"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg bg-gray-100 px-4 py-2 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="transform-translate-y-1/2 absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <FaSearch className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleSearchToggle}
              className="transform-translate-y-1/2 absolute top-2 -right-10 text-gray-600 hover:text-gray-800"
            >
              <IoCloseCircleOutline className="h-6 w-6" />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <FaSearch className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
