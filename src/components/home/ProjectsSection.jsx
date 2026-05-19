const projects = [
  {
    title: "Portfolio Website",
    tech: "React • Tailwind • Node",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "E-commerce App",
    tech: "React • Redux • Node",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Admin Dashboard",
    tech: "React • Chart.js • Node",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

const ProjectsSection = () => {
  return (
    <section className="pt-40 pb-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-16 text-black-400">
          Featured Projects
        </h2>

        {/* SCROLL WRAPPER */}
        <div className="relative">
          <div className="flex gap-10 w-max animate-scroll">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden min-w-[300px]"
              >
                {/* IMAGE */}
                <img
                  src={project.img}
                  className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4">{project.tech}</p>
                </div>

                {/* GLOW BORDER */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
