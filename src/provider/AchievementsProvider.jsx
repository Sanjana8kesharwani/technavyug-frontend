import { useState, useEffect, useCallback } from "react";
import { AchievementsContext } from "../context/AchievementsContext";
import { fetchAchievements, createAchievement, updateAchievementApi, deleteAchievementApi } from "../services/api";
import toast from "react-hot-toast";

export default function AchievementsProvider({ children }) {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAchievements = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchAchievements();
      setAchievements(res.data || []);
    } catch (err) {
      console.error("Failed to load achievements from backend:", err);
      toast.error("Failed to load achievements from server");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadAchievements(); }, [loadAchievements]);

  const addAchievement = async (item) => {
    try {
      const fd = new FormData();
      fd.append("title", item.title || "");
      fd.append("type", item.type || "");
      fd.append("description", item.description || "");
      fd.append("issuingAuthority", item.issuingAuthority || "");
      if (item.featured !== undefined) fd.append("featured", item.featured);
      if (item.badgeImage instanceof File) fd.append("badgeImage", item.badgeImage);

      const res = await createAchievement(fd);
      setAchievements((prev) => [...prev, res.data]);
      return true;
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to add achievement");
      return false;
    }
  };

  const deleteAchievement = async (id) => {
    try {
      await deleteAchievementApi(id);
      setAchievements((prev) => prev.filter((a) => (a._id || a.id)?.toString() !== id?.toString()));
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to delete achievement");
    }
  };

  const updateAchievement = async (id, updated) => {
    try {
      const fd = new FormData();
      Object.entries(updated).forEach(([k, v]) => {
        if (v instanceof File) fd.append(k, v);
        else if (v !== undefined && v !== null) fd.append(k, v);
      });
      const res = await updateAchievementApi(id, fd);
      setAchievements((prev) => prev.map((a) => ((a._id || a.id)?.toString() === id?.toString() ? res.data : a)));
      return true;
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update achievement");
      return false;
    }
  };

  const toggleFeatured = async (id) => {
    const item = achievements.find((a) => (a._id || a.id)?.toString() === id?.toString());
    if (!item) return;
    await updateAchievement(id, { featured: !item.featured });
  };

  return (
    <AchievementsContext.Provider value={{ achievements, loading, addAchievement, deleteAchievement, updateAchievement, toggleFeatured, loadAchievements }}>
      {children}
    </AchievementsContext.Provider>
  );
}
