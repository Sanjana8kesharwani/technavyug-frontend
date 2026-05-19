import { useContext } from "react";
import { AchievementsContext } from "./AchievementsContext";

export const useAchievements = () => {
  return useContext(AchievementsContext);
};
