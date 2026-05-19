import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useUsers } from "../context/useUsers";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

// Shimmer for Profile
function ShimmerProfile() {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 animate-pulse">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-lg">
        <div className="w-36 h-36 mx-auto rounded-full bg-gray-400 mb-4" />
        <div className="h-8 bg-gray-400 w-1/3 mx-auto rounded mb-2" />
        <div className="h-4 bg-gray-400 w-1/4 mx-auto rounded mb-6" />
        <div className="flex justify-center gap-10 mt-6">
          <div className="h-10 w-20 bg-gray-400 rounded" />
          <div className="h-10 w-20 bg-gray-400 rounded" />
        </div>
      </div>
    </div>
  );
}

const Profile = () => {
  const { id } = useParams();
  const { users } = useUsers();
  const [loading, setLoading] = useState(true);

  const user = users.find((u) => String(u._id) === id || String(u.id) === id);

  useEffect(() => {
    if (users && users.length > 0) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [id, users]);

  if (loading) {
    return (
      <MainLayout>
        <ShimmerProfile />
      </MainLayout>
    );
  }

  if (!user)
    return (
      <MainLayout>
        <div className="text-center mt-20 text-white">User not found</div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto mt-10 px-4 text-white pb-12">
        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-lg">
          <img
            src={user.profilePhoto || "https://via.placeholder.com/150"}
            alt={user.fullName}
            className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-white/20"
          />

          <h1 className="text-3xl font-bold"> {user.fullName} </h1>
          <p className="text-gray-400 mt-1"> {user.designation} </p>
          <p className="text-gray-300 mt-2 max-w-xl mx-auto"> {user.email} </p>

          {user.linkedinUrl && (
            <a
              href={user.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
          )}

          {/*  Stats (Placeholders if fields missing in backend) */}
          <div className="flex justify-center gap-10 mt-8">
            <div>
              <p className="text-2xl font-bold">{user.projects?.length || 0}</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-bold">{user.certificates?.length || 0}</p>
              <p className="text-gray-400 text-sm">Certificates</p>
            </div>
          </div>
        </div>

        {/*  Skills */}
        {user.skills && user.skills.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {user.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/*  Projects */}
        {user.projects && user.projects.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {user.projects.map((project, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {project.description || "Project description here..."}
                  </p>
                  {project.tech && (
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {project.tech.map((t, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-500 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  Certificates */}
        {user.certificates && user.certificates.length > 0 && (
          <div className="mt-10 mb-10">
            <h2 className="text-xl font-semibold mb-4">Certificates</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {user.certificates.map((cert, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/10 border border-white/20 text-gray-300 hover:scale-105 hover:shadow-lg transition cursor-pointer"
                >
                  📜 {cert}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Profile;
