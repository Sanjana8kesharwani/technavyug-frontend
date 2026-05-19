import { useState, useEffect } from "react";

/*  SHIMMER CARD */
const ShimmerCard = () => {
  return (
    <div className="min-w-[300px] bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-44 bg-gray-200 animate-pulse"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

const events = {
  upcoming: [],
  previous: [
    {
      title: "💻 Workshop session",
      date: "Jun 13, 2025",
      time: "03:30 PM Onwards",
      location: "Chennai",
      image: "/images/event1.jpg",
    },
    {
      title: "🤝 Networking meetup",
      date: "Jun 14, 2025",
      time: "02:30 PM - 06:00 PM",
      location: "Coimbatore",
      image: "/images/event2.jpg",
    },
  ],
};

export default function EventsSection() {
  const [tab, setTab] = useState("upcoming");
  const [loading, setLoading] = useState(true);

  //  simulate API loading (ONLY false here)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [tab]);

  //  FIX: handle tab change properly
  const handleTabChange = (newTab) => {
    setTab(newTab);
    setLoading(true);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Events</h2>

        {/* TABS */}
        <div className="flex gap-6 mb-8 border-b w-fit text-2xl">
          <button
            onClick={() => handleTabChange("upcoming")}
            className={`pb-2 ${
              tab === "upcoming"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400"
            }`}
          >
            Upcoming
          </button>

          <button
            onClick={() => handleTabChange("previous")}
            className={`pb-2 ${
              tab === "previous"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400"
            }`}
          >
            Previous
          </button>
        </div>

        {/*  LOADING STATE */}
        {loading ? (
          <div className="flex gap-6 overflow-x-auto pb-4">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <ShimmerCard key={i} />
              ))}
          </div>
        ) : events[tab].length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl font-semibold text-gray-700">
              No events found
            </p>
            <p className="text-gray-400 mt-2">Events will be available soon.</p>
          </div>
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-4">
            {events[tab].map((event, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-white rounded-xl shadow-md"
              >
                <img
                  src={event.image}
                  className="h-44 w-full object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">📅 {event.date}</p>
                  <p className="text-sm text-gray-500">📍 {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
