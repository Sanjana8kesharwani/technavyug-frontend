const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        {" "}
        <source src="/hero.mp4" type="video/mp4" />{" "}
      </video>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          {" "}
          Showcase your <span className="text-blue-400">future</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl">
          {" "}
          Showcase your work, verify certificates and grow your identity.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-600 rounded-lg">
            {" "}
            Explore{" "}
          </button>

          <button className="px-6 py-3 border border-white/40 rounded-lg">
            {" "}
            Verify{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
