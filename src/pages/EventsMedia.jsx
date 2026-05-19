import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import EventsSection from "../components/events/EventsSection";
import MediaGallery from "../components/events/MediaGallery";
import LatestNews from "../components/events/LatestNews";
import Blogs from "../components/events/Blogs";
import Newsletters from "../components/events/Newsletters";
import GalleryVideos from "../components/events/GalleryVideos";

export default function EventsMedia() {
  const tabs = [
    "Events",
    "Media Gallery",
    "Latest News & Updates",
    "Blogs",
    "Newsletters",
    "Gallery Videos",
  ];

  const words = ["Events", "Gallery", "Blogs", "News", "Videos"];

  const [activeTab, setActiveTab] = useState("Events");

  // TYPEWRITER STATES
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // DERIVED INDEX
  const map = {
    Events: 0,
    "Media Gallery": 1,
    Blogs: 2,
    "Latest News & Updates": 3,
    "Gallery Videos": 4,
    Newsletters: 3,
  };

  const index = map[activeTab] ?? 0;

  // TYPEWRITER EFFECT
  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <MainLayout>
      <div className="pt-16 md:pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-b from-blue-50 to-white text-center py-10 md:py-14 px-4 sm:px-6">
          <p className="text-xs font-bold tracking-widest text-cyan-600 uppercase mb-4">
            CONNECT, LEARN, SUCCEED
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Don't Miss Out <br />
            On <span className="text-black">Tech</span>
            <span className="text-cyan-500">navyug</span>{" "}
            <span
              key={activeTab}
              className="text-cyan-500 inline-block min-w-[90px]"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-gray-500 text-sm mt-4">
            Stay connected with events, blogs, and updates from Technavyug.
          </p>

          <button className="mt-6 bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition">
            Explore
          </button>
        </section>

        {/* TABS */}
        <div className="flex justify-center mt-8 px-8">
          <div className="bg-gray-100 rounded-full p-2 md:p-3 flex gap-2 md:gap-3 shadow overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-cyan-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          {activeTab === "Events" && <EventsSection key="events" />}

          {activeTab === "Media Gallery" && <MediaGallery key="gallery" />}

          {activeTab === "Blogs" && <Blogs />}

          {activeTab === "Latest News & Updates" && <LatestNews />}

          {activeTab === "Newsletters" && <Newsletters />}

          {activeTab === "Gallery Videos" && <GalleryVideos />}
        </div>
      </div>
    </MainLayout>
  );
}
