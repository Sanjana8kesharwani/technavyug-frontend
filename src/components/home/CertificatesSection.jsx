const certificates = [
  {
    name: "Sanjana Kesharwani",
    course: "Full Stack Development",
    img: "https://images.unsplash.com/photo-1581091012184-7c1d1d6a7c4f",
  },
  {
    name: "Rahul Sharma",
    course: "Frontend Development",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    name: "Priya Singh",
    course: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
  },
  {
    name: "Aman Verma",
    course: "Backend Development",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-white-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          🎓 Certificates & Achievements
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.img}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:bg-black/60 transition duration-300"></div>

              {/* DEFAULT TEXT */}
              <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.course}</p>
              </div>

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>

                <p className="text-sm text-gray-300 mb-4"> {item.course} </p>

                <button className="px-4 py-2 bg-white text-black rounded-full text-sm hover:scale-105 transition">
                  {" "}
                  View Certificate{" "}
                </button>
              </div>

              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                {" "}
                ✔ Verified{" "}
              </div>

              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
