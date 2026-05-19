import { useState, useEffect, useCallback } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import { fetchProjects, createProject, updateProjectApi, deleteProjectApi, duplicateProjectApi } from "../services/api";
import toast from "react-hot-toast";

export default function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadProjects = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchProjects("limit=200");
      setProjects(res.data?.projects || res.data || []);
    } catch (err) {
      console.error("Failed to load projects from backend:", err);
      toast.error("Failed to load projects from server");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadProjects(); }, [loadProjects]);

  const addProject = async (data) => {
    try {
      const fd = new FormData();
      fd.append("title", data.title || "");
      fd.append("category", data.category || "");
      fd.append("shortDescription", data.shortDescription || "");
      fd.append("fullDescription", data.fullDescription || "");
      if (data.startDate) fd.append("startDate", data.startDate);
      if (data.endDate) fd.append("endDate", data.endDate);
      if (data.status) fd.append("status", data.status);
      if (data.liveProjectUrl) fd.append("liveProjectUrl", data.liveProjectUrl);
      if (data.featured !== undefined) fd.append("featured", data.featured);
      if (data.visibility) fd.append("visibility", data.visibility);
      if (data.techStack) fd.append("techStack", JSON.stringify(Array.isArray(data.techStack) ? data.techStack : [data.techStack]));
      if (data.demoVideoLinks) fd.append("demoVideoLinks", JSON.stringify(Array.isArray(data.demoVideoLinks) ? data.demoVideoLinks : [data.demoVideoLinks]));
      if (data.thumbnailImage instanceof File) fd.append("thumbnailImage", data.thumbnailImage);
      if (data.galleryImages) {
        const imgs = Array.isArray(data.galleryImages) ? data.galleryImages : [data.galleryImages];
        imgs.forEach((f) => { if (f instanceof File) fd.append("galleryImages", f); });
      }

      const res = await createProject(fd);
      setProjects((prev) => [...prev, res.data]);
      return true;
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to create project");
      return false;
    }
  };

  const updateProject = async (id, updated) => {
    try {
      const fd = new FormData();
      Object.entries(updated).forEach(([k, v]) => {
        if (v instanceof File) fd.append(k, v);
        else if (Array.isArray(v)) fd.append(k, JSON.stringify(v));
        else if (v !== undefined && v !== null) fd.append(k, v);
      });
      const res = await updateProjectApi(id, fd);
      setProjects((prev) => prev.map((p) => ((p._id || p.id)?.toString() === id?.toString() ? res.data : p)));
      return true;
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update project");
      return false;
    }
  };

  const deleteProject = async (id) => {
    try {
      await deleteProjectApi(id);
      setProjects((prev) => prev.filter((p) => (p._id || p.id)?.toString() !== id?.toString()));
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to delete project");
    }
  };

  const duplicateProject = async (id) => {
    try {
      const res = await duplicateProjectApi(id);
      setProjects((prev) => [...prev, res.data]);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to duplicate project");
    }
  };

  const toggleFeatured = async (id) => {
    const p = projects.find((p) => (p._id || p.id)?.toString() === id?.toString());
    if (p) await updateProject(id, { featured: !p.featured });
  };

  const togglePublish = async (id) => {
    const p = projects.find((p) => (p._id || p.id)?.toString() === id?.toString());
    if (p) await updateProject(id, { published: !p.published });
  };

  return (
    <ProjectsContext.Provider value={{ projects, loading, addProject, updateProject, deleteProject, duplicateProject, toggleFeatured, togglePublish, loadProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}
