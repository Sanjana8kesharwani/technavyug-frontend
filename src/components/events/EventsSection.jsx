import { useState, useEffect } from "react";

/* SHIMMER CARD */
const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-44 bg-gray-200 animate-pulse"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

/*  DATA */
const events = {
  upcoming: [],
  previous: [
    {
      title: "Workshop Session",
      date: "Jun 13, 2025",
      time: "03:30 PM",
      location: "Chennai",
      image: "/images/event1.jpg",
    },
    {
      title: "Networking Meetup",
      date: "Jun 14, 2025",
      time: "02:30 PM",
      location: "Coimbatore",
      image: "/images/event2.jpg",
    },
  ],
};

export default function EventsSection() {
  const [tab, setTab] = useState("upcoming");
  const [loading, setLoading] = useState(true);

  /*  CLEAN LOADING */
  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  /* TAB CHANGE HANDLER */
  const handleTabChange = (newTab) => {
    setTab(newTab);
    setLoading(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* SIDEBAR */}
      <div className="w-full lg:w-72 bg-gray-50 p-4 rounded-xl shadow-sm">
        <h3 className="text-sm font-semibold mb-4">Filters</h3>

        <input
          placeholder="Enter Event"
          className="w-full px-3 py-2 border rounded mb-3 text-sm"
        />

        <select className="w-full px-3 py-2 border rounded mb-4 text-sm">
          <option>Zone</option>
          <option>Indore</option>
          <option>Delhi</option>
        </select>

        {/* DATE */}
        <div className="bg-blue-700 text-white px-3 py-2 rounded text-sm">
          Date
        </div>

        <div className="border p-3 rounded-b text-sm">
          <p className="text-xs text-blue-600 text-right mb-2">Next 7 days</p>

          <div className="grid grid-cols-7 text-center gap-1 text-xs">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`p-1 rounded ${
                  i === 27
                    ? "bg-orange-400 text-white"
                    : "hover:bg-gray-200 cursor-pointer"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-3">
            <button className="text-gray-400 text-xs">Clear</button>
            <button className="bg-blue-700 text-white px-3 py-1 rounded text-xs">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Events</h2>

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

        {/*  TABS */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => handleTabChange("upcoming")}
            className={`px-6 py-2 rounded ${
              tab === "upcoming" ? "bg-blue-700 text-white" : "text-gray-500"
            }`}
          >
            Upcoming
          </button>

          <button
            onClick={() => handleTabChange("previous")}
            className={`px-6 py-2 rounded ${
              tab === "previous" ? "bg-blue-700 text-white" : "text-gray-500"
            }`}
          >
            Previous
          </button>
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        ) : events[tab].length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg font-semibold">No events found</p>
            <p className="text-gray-400">Events will be available soon</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {events[tab].map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={event.image}
                  alt="event"
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">{event.title}</h3>

                  <p className="text-sm text-gray-500">
                    📅 {event.date} • {event.time}
                  </p>

                  <p className="text-sm text-gray-500">📍 {event.location}</p>

                  <span className="text-blue-600 text-sm mt-2 inline-block">
                    Free
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
