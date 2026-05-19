import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useAchievements } from "../context/useAchievements";
import { useNavigate } from "react-router-dom";

const DOMAIN_CHIPS = ["All", "AI", "Web Dev", "IoT"];

const SIDEBAR_CATEGORIES = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Full Stack Web Development",
  "Frontend Development",
  "Backend Development",
  "IoT Systems",
  "Embedded Systems",
  "Cloud Computing",
  "Cybersecurity",
  "Data Science",
  "Mobile App Development",
  "Blockchain",
  "Research & Publication",
];

function getInitials(name) {
  if (!name) return "AD";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Achievements() {
  const { achievements, loading: contextLoading } = useAchievements();
  const [search, setSearch] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (contextLoading !== undefined) {
      setLoading(contextLoading);
    } else if (achievements && achievements.length > 0) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [achievements, contextLoading]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filtered = (achievements || []).filter((item) => {
    const title = item?.title || "";
    const type = item?.type || "";
    const batch = item?.batch || "";

    const matchSearch =
      title.toLowerCase().includes((search || "").toLowerCase()) ||
      type.toLowerCase().includes((search || "").toLowerCase());

    const matchDomain = activeDomain === "All" || type === activeDomain;

    const matchBatch = selectedBatch === "All" || batch === selectedBatch;

    const matchCat =
      selectedCategories.length === 0 ||
      selectedCategories.some((c) => type === c);

    return matchSearch && matchDomain && matchBatch && matchCat;
  });

  return (
    <MainLayout>
      <div className="pt-28 px-6 max-w-7xl mx-auto pb-12">
        {/*  TOP CARD */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mb-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Explore <span className="text-cyan-500">Achievements</span>
            </h1>
            <p className="text-gray-400 mt-1.5 text-sm">
              Internship highlights & student success stories
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search achievers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-[240px_1fr] gap-6">
          {/* SIDEBAR */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h2 className="font-bold text-sm text-gray-800 mb-4">Filters</h2>

            {/* Batch */}
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-2">Batch</p>
              <div className="flex flex-wrap gap-2">
                {["All", "2022", "2023", "2024"].map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBatch(b)}
                    className={`px-3 py-1 rounded-full text-xs border ${
                      selectedBatch === b
                        ? "bg-cyan-500 text-white border-cyan-500"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <p className="text-xs text-gray-400 mb-2">Categories</p>
              <div className="max-h-64 overflow-y-auto space-y-2">
                {SIDEBAR_CATEGORIES.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-cyan-500"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Clear */}
            {(selectedCategories.length > 0 || selectedBatch !== "All") && (
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedBatch("All");
                }}
                className="mt-4 w-full py-2 text-xs rounded-lg border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-500"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* DOMAIN CHIPS */}
            <div className="flex gap-2 flex-wrap mb-4">
              {DOMAIN_CHIPS.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDomain(d)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold border ${
                    activeDomain === d
                      ? "bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-200"
                      : "border-gray-200 text-gray-500 hover:text-cyan-500 hover:border-cyan-300"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* COUNT */}
            {!loading && (
              <p className="text-sm text-gray-400 mb-4">
                Showing{" "}
                <span className="text-cyan-500 font-semibold">
                  {filtered.length}
                </span>{" "}
                achievements
              </p>
            )}

            {/* GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {loading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="bg-white p-4 rounded-2xl animate-pulse"
                      >
                        <div className="h-44 bg-gray-200 rounded mb-4" />
                        <div className="h-4 bg-gray-200 rounded mb-2" />
                        <div className="h-3 bg-gray-200 rounded mb-2" />
                        <div className="h-8 bg-gray-200 rounded" />
                      </div>
                    ))
                : filtered.map((item, idx) => (
                    <div
                      key={item._id || item.id || idx}
                      onClick={() => navigate(`/achievements/${item._id || item.id}`)}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
                    >
                      {/* IMAGE + BADGES */}
                      <div className="relative">
                        <img
                          src={item?.badgeImage || "https://placehold.co/600x400"}
                          alt={item?.title || "Achievement"}
                          className="w-full h-44 object-cover"
                        />

                        <span className="absolute top-2 left-2 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-semibold text-cyan-600 rounded-full border border-cyan-200">
                          {item?.type || "General"}
                        </span>

                        {item?.batch ? (
                          <span className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 text-[10px] rounded-full">
                            Batch '{String(item.batch).slice(2)}
                          </span>
                        ) : null}
                      </div>

                      {/* BODY */}
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-300 text-white text-xs font-bold flex items-center justify-center">
                            {getInitials(item?.title)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {item?.title || "—"}
                            </p>
                            <p className="text-xs text-cyan-500">{item?.issuingAuthority || item?.organization || "—"}</p>
                          </div>
                        </div>

                        <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                          {item?.description || "—"}
                        </p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/achievements/${item._id || item.id}`);
                          }}
                          className="w-full py-2 bg-cyan-500 text-white rounded-xl text-xs font-semibold hover:bg-cyan-600 transition"
                        >
                          View Achievement
                        </button>
                      </div>
                    </div>
                  ))}
            </div>

            {/* EMPTY */}
            {!loading && filtered.length === 0 && (
              <div className="text-center py-16">
                <h2 className="text-gray-500 font-semibold">
                  No Achievements Found
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Try changing filters or search
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
