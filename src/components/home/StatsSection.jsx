const StatsSection = () => {
  return (
    <section className="bg-black text-white pt-16 pb-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">
          Empowering Digital Talent
        </h2>

        <div className="grid md:grid-cols-2 gap-10 relative">
          {/* LEFT */}
          <div>
            <h3 className="text-lg font-bold">Showcase Your Work Globally</h3>
            <p className="text-gray-400 mt-2">
              Present your projects and achievements to stand out
              professionally.
            </p>
          </div>

          {/* VERTICAL LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-white/20"></div>

          {/* RIGHT */}
          <div>
            <h3 className="text-lg font-bold text-blue-400">
              Instant Certificate Verification
            </h3>
            <p className="text-gray-400 mt-2">
              Ensure credibility with a quick and secure verification system.
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING CARD (FIXED POSITION) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 
w-[95%] md:w-[90%] max-w-[1200px] 
bg-blue-900 rounded-xl p-8 shadow-xl"
      >
        <div className="grid grid-cols-3 text-center">
          <div>
            <h2 className="text-2xl font-bold">10K+</h2>
            <p className="text-sm text-gray-300">Active Students</p>
          </div>

          <div className="border-l border-white/20">
            <h2 className="text-2xl font-bold">200+</h2>
            <p className="text-sm text-gray-300">Expert Courses</p>
          </div>

          <div className="border-l border-white/20">
            <h2 className="text-2xl font-bold">95%</h2>
            <p className="text-sm text-gray-300">Placement Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
