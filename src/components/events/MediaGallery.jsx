import React, { useEffect, useState } from "react";

/*  SHIMMER CARD */
const ShimmerCard = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
      <div className="h-64 bg-gray-200 animate-pulse"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

const galleryData = [
  {
    id: 1,
    title:
      "Hon’ble Chief Minister hands over Sanction Letters to beneficiaries...",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a",
  },
  {
    id: 2,
    title:
      "Hon’ble Chief Minister inaugurates Tamil Nadu Global Startup Summit 2025",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    id: 3,
    title: "MoU Signing Between HCL Foundation & StartupTN",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
  },
  {
    id: 4,
    title: "Startup Chennai – LaunchPad",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
];

export default function MediaGallery() {
  const [loading, setLoading] = useState(true);

  // simulate API
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Media Gallery</h2>

        <svg
          className="mx-auto mt-2"
          width="160"
          height="20"
          viewBox="0 0 160 20"
          fill="none"
        >
          <path
            d="M10 8 Q80 0 150 8"
            stroke="#06b6d4"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          ></path>
        </svg>
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <ShimmerCard key={i} />
            ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                <p className="text-sm md:text-base font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
