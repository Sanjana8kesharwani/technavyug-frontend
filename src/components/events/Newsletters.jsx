import { useEffect, useState } from "react";
import { newsletterData } from "../../data/newsletterData";

/* SHIMMER */
const ShimmerCard = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow bg-white">
      <div className="h-64 bg-gray-200 animate-pulse"></div>
      <div className="p-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mx-auto"></div>
      </div>
    </div>
  );
};

export default function Newsletters() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Newsletters</h2>

        <svg className="mx-auto mt-2" width="140" height="20">
          <path
            d="M10 8 Q70 0 130 8"
            stroke="#06b6d4"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <ShimmerCard key={i} />
            ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newsletterData.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer group"
              onClick={() => window.open(item.pdf, "_blank")}
            >
              <div className="overflow-hidden rounded-lg shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <p className="text-center text-sm mt-2 text-gray-700">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
