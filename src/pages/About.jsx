import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white text-center px-6">
        <p className="text-sm tracking-widest text-cyan-600 font-semibold mb-3">
          ABOUT TECHNAVYUG
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
          Showcasing Skills.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            {" "}
            Verifying Achievements
          </span>
        </h1>

        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
          Technavyug is a platform designed to help students and developers
          present their projects, skills, and certifications in a clean and
          professional way while building trust through verification.
        </p>
      </section>

      {/* STATS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1000+", label: "Projects" },
            { value: "500+", label: "Verified Certificates" },
            { value: "95%", label: "User Satisfaction" },
            { value: "10+", label: "Technologies" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">{item.value}</h2>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-cyan-600 font-semibold mb-2">OUR VALUES</p>

          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            What drives everything we do
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Portfolio-First",
                desc: "We focus on helping users build strong and clean portfolios that reflect real skills.",
              },
              {
                title: "Verified Trust",
                desc: "Certificates and achievements are verified to ensure authenticity and credibility.",
              },
              {
                title: "Real-World Focus",
                desc: "We promote practical projects and real-world learning over theory.",
              },
              {
                title: "Continuous Growth",
                desc: "We continuously improve our platform to support developers at every stage.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl bg-white hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div>
            <p className="text-sm text-cyan-600 font-semibold mb-2">
              OUR STORY
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From an idea to a platform
            </h2>

            <p className="text-gray-500 mb-4">
              Technavyug started with a simple thought — students build amazing
              projects but often lack a proper platform to showcase them
              professionally.
            </p>

            <p className="text-gray-500 mb-4">
              We wanted to create a space where skills matter more than resumes.
              A place where real work speaks for itself.
            </p>

            <p className="text-gray-500">
              Today, Technavyug helps users build a strong digital identity and
              stand out in the tech world.
            </p>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="team"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
