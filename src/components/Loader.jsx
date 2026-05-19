const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-[999] px-4 overflow-hidden">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/20 animate-pulse flex-shrink-0">
          <img
            src="/Technavyug Logo.jpeg"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-white text-xs sm:text-sm tracking-wide break-words">
          Loading Technavyug...
        </p>
      </div>
    </div>
  );
};

export default Loader;
