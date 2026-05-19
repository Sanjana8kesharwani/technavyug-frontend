import React, { useEffect, useState } from "react";

/* SHIMMER */
const ShimmerNews = () => {
  return (
    <div className="space-y-8">
      {Array(3)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-[100px_1fr_auto] gap-5 items-start border-b pb-6"
          >
            <div className="w-[100px] h-[130px] bg-gray-200 rounded animate-pulse"></div>

            <div className="space-y-3">
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
            </div>

            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default function LatestNews() {
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(2);

  const newsData = [
    {
      id: 1,
      title: "Tamil Nadu opens applications for space tech fund",
      desc: "TN opens applications for Tamil Nadu Space Tech Fund with ₹10 crore allocation...",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      date: "22 Jan 2026",
    },
    {
      id: 2,
      title: "Women-led startup dot the Cauvery delta",
      desc: "Strong ecosystem support has led to women entrepreneurs rising...",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      date: "22 Jan 2026",
    },
    {
      id: 3,
      title: "Startup Seed Fund announced",
      desc: "Government invites startups for funding support across sectors...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      date: "22 Jan 2026",
    },
    {
      id: 4,
      title: "AI innovation growing rapidly in India",
      desc: "AI startups are seeing massive funding and rapid growth...",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      date: "22 Jan 2026",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Latest News & Updates
        </h2>

        <svg
          className="mx-auto mt-2"
          width="160"
          height="20"
          viewBox="0 0 160 20"
        >
          <path
            d="M10 8 Q80 0 150 8"
            stroke="#06b6d4"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* CONTENT */}
      {loading ? (
        <ShimmerNews />
      ) : (
        <>
          <div className="space-y-8">
            {newsData.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[100px_1fr_auto] gap-5 items-start border-b pb-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100px] h-[130px] object-cover rounded"
                />
                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">
                    {item.desc}
                    <span className="text-blue-600 ml-1 cursor-pointer">
                      Read More...
                    </span>
                  </p>
                </div>

                {/* DATE */}
                <div className="text-sm text-gray-400 whitespace-nowrap">
                  {item.date}
                </div>
              </div>
            ))}
          </div>

          {/* VIEW MORE BUTTON */}
          {visibleCount < newsData.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 2)}
                className="px-6 py-2 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition"
              >
                View More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
