import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export const useProjects = () => useContext(ProjectsContext);