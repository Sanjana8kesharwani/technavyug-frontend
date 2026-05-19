// 


const PartnersSection = () => {
  return (
    <section className="w-full bg-[#f5f7fb] flex items-center justify-center px-6 py-20 md:py-24 -mt-32">
      <div className="max-w-4xl text-center">
        
        <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
          Technavyug
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Something Exciting is Coming
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
          We are preparing impactful collaborations, innovative
          programs, and exciting opportunities for students,
          developers, and institutions across India.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition duration-300 w-full sm:w-auto">
            Stay Tuned
          </button>

          <button className="px-8 py-3 border border-gray-300 hover:border-cyan-500 hover:text-cyan-600 text-gray-700 rounded-full transition duration-300 w-full sm:w-auto">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;