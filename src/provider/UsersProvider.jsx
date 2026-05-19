import { useState, useEffect, useCallback } from "react";
import { UsersContext } from "../context/UsersContext";
import { fetchUsers, createUser, updateUser as updateUserApi, deleteUserApi } from "../services/api";
import toast from "react-hot-toast";

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  // Load users from backend on mount
  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchUsers();
      setUsers(res.data?.users || res.data || []);
    } catch (err) {
      console.error("Failed to load users from backend:", err);
      toast.error("Failed to load users from server");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadUsers(); }, [loadUsers]);

  const addUser = async (user) => {
    try {
      const fd = new FormData();
      fd.append("fullName", user.name || user.fullName || "");
      fd.append("designation", user.designation || "");
      fd.append("email", user.email || "");
      fd.append("phoneNumber", user.phone || user.phoneNumber || "");
      fd.append("linkedinUrl", user.linkedin || user.linkedinUrl || "");
      if (user.photo instanceof File) fd.append("profilePhoto", user.photo);

      const res = await createUser(fd);
      setUsers((prev) => [...prev, res.data]);
      return true;
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to add user");
      return false;
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      await deleteUserApi(id);
      setUsers((prev) => prev.filter((u) => (u._id || u.id)?.toString() !== id?.toString()));
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to delete user");
    }
  };

  const updateUserHandler = async (id, updatedUser) => {
    try {
      const fd = new FormData();
      if (updatedUser.name || updatedUser.fullName) fd.append("fullName", updatedUser.name || updatedUser.fullName);
      if (updatedUser.designation) fd.append("designation", updatedUser.designation);
      if (updatedUser.email) fd.append("email", updatedUser.email);
      if (updatedUser.phone || updatedUser.phoneNumber) fd.append("phoneNumber", updatedUser.phone || updatedUser.phoneNumber);
      if (updatedUser.linkedin || updatedUser.linkedinUrl) fd.append("linkedinUrl", updatedUser.linkedin || updatedUser.linkedinUrl);
      if (updatedUser.photo instanceof File) fd.append("profilePhoto", updatedUser.photo);

      const res = await updateUserApi(id, fd);
      setUsers((prev) => prev.map((u) => ((u._id || u.id)?.toString() === id?.toString() ? res.data : u)));
      return true;
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update user");
      return false;
    }
  };

  return (
    <UsersContext.Provider value={{ users, loading, addUser, deleteUser: deleteUserHandler, updateUser: updateUserHandler, loadUsers }}>
      {children}
    </UsersContext.Provider>
  );
}