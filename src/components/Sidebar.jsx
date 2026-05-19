import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 overflow-y-auto
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 sm:p-5 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/Technavyug Logo.jpeg"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap">
              Tech
              <span className="text-cyan-500">navyug</span>
            </h1>
          </div>

          <button onClick={() => setOpen(false)} className="flex-shrink-0">
            <X />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-4 p-5 sm:p-6 text-base md:text-lg font-medium text-gray-700">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-600 transition break-words"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-600 transition break-words"
          >
            About
          </Link>

          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-600 transition break-words"
          >
            Projects
          </Link>

          <Link
            to="/achievements"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-600 transition break-words"
          >
            Achievements
          </Link>

          <Link
            to="/verify"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-600 transition break-words"
          >
            Verify
          </Link>

          <Link
            to="/Team"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-600 transition break-words"
          >
            Team
          </Link>

          <Link
            to="/terms"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 break-words"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/privacy-policy"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 break-words"
          >
            Privacy Policy
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 px-5 sm:px-6 pb-6 mt-2 text-gray-600 flex-wrap">
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/technavyug/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:text-blue-600 transition cursor-pointer"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8v5.8h-3s.1-9.4 0-10h3v1.4c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.6 1.4 3.6 4.4v5.7z" />
            </svg>
          </a>

          {/* WEBSITE */}
          <a
            href="https://www.technavyug.com/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 hover:text-blue-600 transition cursor-pointer"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18" />
              <path d="M12 3a15 15 0 0 1 0 18" />
              <path d="M12 3a15 15 0 0 0 0 18" />
            </svg>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://www.youtube.com/@technavyugofficial"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:text-red-600 transition cursor-pointer"
            >
              <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.7 2.5 12 2.5 12 2.5h0s-4.7 0-8.2.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.4-.9 2.4S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.9 2.4c.9.9 2.1.9 2.7 1 2 .2 7.9.3 7.9.3s4.7 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.5 14.5v-5l5 2.5-5 2.5z" />
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/technavyug/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:text-pink-500 transition cursor-pointer"
            >
              <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
