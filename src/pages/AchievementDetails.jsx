import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useAchievements } from "../context/useAchievements";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// 🔹 SHIMMER
function Shimmer() {
  return (
    <div className="animate-pulse pt-16">
      <div className="bg-blue-600 px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-4">
            <div className="h-6 bg-blue-400 w-24 rounded"></div>
            <div className="h-10 bg-blue-400 w-3/4 rounded"></div>
            <div className="h-4 bg-blue-400 w-full rounded"></div>
            <div className="h-4 bg-blue-400 w-5/6 rounded"></div>
            <div className="h-10 bg-blue-400 w-40 rounded mt-4"></div>
          </div>
          <div className="w-full md:w-[420px] h-64 bg-blue-400 rounded-2xl"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-6 bg-gray-300 w-40 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AchievementDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { achievements } = useAchievements();

  const user = achievements.find((a) => String(a._id) === id || String(a.id) === id);

useEffect(() => {
  let timer;

  if (achievements && achievements.length > 0) {
    timer = setTimeout(() => {
      setLoading(false);
    }, 0);
  } else {
    timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return () => clearTimeout(timer);
}, [id, achievements]);

  if (loading) {
    return (
      <MainLayout>
        <Shimmer />
      </MainLayout>
    );
  }

  if (!user) {
    return (
      <MainLayout>
        <div className="text-center mt-20 text-red-500">Achievement not found</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-16">
        {/* HERO */}
        <div className="bg-[#1B3765] text-white px-6 py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <span className="inline-block border border-white/50 text-xs px-4 py-1.5 rounded-full mb-4">
                {user.type}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                {user.title}
              </h1>

              <p className="text-blue-100 text-sm mb-6 max-w-lg">{user.issuingAuthority}</p>

              {/* SOCIAL BUTTONS */}
              <div className="flex gap-4 flex-wrap">
                {user.linkedin && (
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-xl font-medium hover:scale-105 transition"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                )}

                {user.github && (
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="w-full md:w-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={user.badgeImage}
                className="w-full h-64 object-cover"
                alt={user.title}
              />
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* OVERVIEW */}
          {user.description && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 whitespace-pre-wrap">{user.description}</p>
            </div>
          )}

          {user.highlights?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Key Achievements</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {user.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {user.skills?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {user.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {user.projects?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {user.projects.map((p, i) => (
                  <div key={i} className="rounded-xl shadow overflow-hidden">
                    <img
                      src={p.image}
                      className="w-full h-40 object-cover"
                      alt={p.title}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-gray-600">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {user.certificates?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Certificates</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {user.certificates.map((c, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow">
                    <img
                      src={c.image}
                      className="w-full h-40 object-cover"
                      alt={c.title}
                    />
                    <div className="p-3 text-sm">{c.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
