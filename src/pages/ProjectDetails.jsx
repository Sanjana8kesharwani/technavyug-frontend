import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useProjects } from "../provider/useProjects";

function ShimmerHero() {
  return (
    <div className="w-full bg-blue-600 px-8 py-16 animate-pulse">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4">
          <div className="h-6 bg-blue-500 rounded-full w-36" />
          <div className="h-12 bg-blue-500 rounded w-3/4" />
          <div className="h-12 bg-blue-500 rounded w-2/3" />
        </div>
        <div className="w-full md:w-[420px] h-64 bg-blue-500 rounded-2xl" />
      </div>
    </div>
  );
}

function ShimmerBody() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-40 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects } = useProjects();
  const project = projects.find((p) => p._id === id || p.id === id);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (projects && projects.length > 0) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [id, projects]);

  if (loading) {
    return (
      <MainLayout>
        <div className="pt-16">
          <ShimmerHero />
          <ShimmerBody />
        </div>
      </MainLayout>
    );
  }

  if (!project) {
    return (
      <MainLayout>
        <div className="pt-20 text-center text-red-500">Project not found</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-16">
        {/* ── HERO SECTION ── */}
        <div className="bg-[#1B3765] text-white px-6 py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <span className="inline-block border border-white/50 text-white text-xs px-4 py-1.5 rounded-full mb-4 font-medium">
                {project.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                {project.title}
              </h1>

              <p className="text-blue-100 text-sm mb-6">{project.shortDescription}</p>

              {project.liveProjectUrl && (
                <a
                  href={project.liveProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 px-6 py-3 rounded-xl font-bold"
                >
                  View Live Project →
                </a>
              )}
            </div>

            <div className="w-full md:w-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.thumbnailImage}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── OVERVIEW SECTION ── */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 whitespace-pre-wrap">{project.fullDescription || project.shortDescription}</p>
        </div>

        {/* ── TECH STACK ── */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 py-6">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── GALLERY ── */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 py-6 pb-12">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.galleryImages.map((img, i) => (
                <img key={i} src={img} alt="Gallery" className="w-full h-32 object-cover rounded-lg shadow-sm" />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
