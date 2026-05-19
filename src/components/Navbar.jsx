import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({ setOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-2 sm:px-0 overflow-x-hidden">
      <div
        className={`pointer-events-auto w-[96%] lg:w-[94%] xl:w-[92%] max-w-[1400px] rounded-full px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 flex items-center justify-between transition-all duration-300 gap-3
        ${
          scrolled
            ? "bg-white shadow-lg border border-gray-200"
            : "bg-white/70 backdrop-blur-xl border border-white/30"
        }`}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button onClick={() => setOpen(true)} className="flex-shrink-0">
            <Menu className="text-gray-800 w-6 h-6" />
          </button>

          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
              <img
                src="/Technavyug Logo.jpeg"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-sm sm:text-base md:text-xl font-semibold text-black whitespace-nowrap">
              Tech
              <span className="text-cyan-500">navyug</span>
            </h1>
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="hidden xl:flex gap-8 text-base font-medium text-gray-700 whitespace-nowrap">
          <Link
            to="/"
            className="hover:text-cyan-500 transition whitespace-nowrap"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-cyan-500 transition whitespace-nowrap"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-cyan-500 transition whitespace-nowrap"
          >
            Projects
          </Link>

          <Link
            to="/achievements"
            className="hover:text-cyan-500 transition whitespace-nowrap"
          >
            Achievements
          </Link>

          <Link
            to="/events-media"
            className="hover:text-cyan-500 transition whitespace-nowrap"
          >
            Events & Media
          </Link>

          <Link
            to="/verify"
            className="hover:text-cyan-500 transition whitespace-nowrap"
          >
            Verify
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-500 transition whitespace-nowrap"
          >
            Contact
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* <Link to="/admin" className="px-4 py-2 rounded-full border border-blue-300 text-gray-700 hover:bg-cyan-100 transition text-sm">Login</Link> */}

          <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 sm:px-4 md:px-5 py-2 rounded-full hover:scale-105 transition shadow-md text-xs sm:text-sm whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
