import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

// 🔹 Shimmer Card (same layout)
function ShimmerCard() {
  return (
    <div className="relative bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm animate-pulse">
      {/* Cyan border shimmer */}
      <div className="absolute bottom-0 right-0 w-[70px] h-[70px] border-b-[6px] border-r-[6px] border-gray-200 rounded-br-2xl"></div>

      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200"></div>

      <div className="h-3 bg-gray-200 rounded w-24 mx-auto mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-28 mx-auto mb-3"></div>

      <div className="w-8 h-8 mx-auto rounded-full bg-gray-200"></div>
    </div>
  );
}

// 🔹 Data
const team = [
  {
    name: "Rahul N",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ezhilarasan S",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sai Ranganathan",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Nikunj Panchal",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Stalin Jacob J",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Akila S",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Hari Jayanth",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    name: "Premkumar C N",
    role: "Associate Vice President",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
];

export default function Team() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <div className="pt-28 px-6 max-w-7xl mx-auto pb-16">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
            OUR TEAM
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Meet Our <span className="text-cyan-500">Team</span>
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            The people driving innovation and growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, i) => <ShimmerCard key={i} />)
            : team.map((member, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition group"
                >
                  {/* ✅ LONG cyan border (match design) */}
                  <div className="absolute bottom-0 right-0 w-[85px] h-[120px] border-b-[6px] border-r-[6px] border-cyan-500 rounded-br-2xl"></div>

                  {/* Image */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-bold text-cyan-600">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-xs text-gray-500 mt-1 mb-3">
                    {member.role}
                  </p>

                  {/* LinkedIn */}
                  <div className="w-8 h-8 mx-auto rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-cyan-100 transition">
                    <span className="text-xs font-bold text-cyan-600">in</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </MainLayout>
  );
}
