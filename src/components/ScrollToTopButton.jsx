import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg transition flex items-center justify-center"
    >
      <LuArrowUp size={18} className="sm:w-5 sm:h-5" />
    </button>
  );
}
