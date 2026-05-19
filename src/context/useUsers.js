import { useContext } from "react";
import { UsersContext } from "./UsersContext";

export const useUsers = () => {
  return useContext(UsersContext);
};
