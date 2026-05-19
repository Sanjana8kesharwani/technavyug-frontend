import { useEffect, useState } from "react";

/* SHIMMER CARD */
const ShimmerVideo = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">
      <div className="h-56 bg-gray-200 animate-pulse"></div>

      <div className="p-3 space-y-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default function GalleryVideos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Gallery Videos</h2>

        <svg className="mx-auto mt-2" width="140" height="20">
          <path
            d="M10 8 Q70 0 130 8"
            stroke="#06b6d4"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <ShimmerVideo key={i} />
            ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          Videos coming soon...
        </div>
      )}
    </div>
  );
}
