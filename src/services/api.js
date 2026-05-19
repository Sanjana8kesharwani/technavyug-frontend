// services/api.js — Centralized API helper for backend communication
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// ─── helpers ────────────────────────────────────────────────
const getToken = () => localStorage.getItem('token');

const headers = (isJson = true) => {
  const h = {};
  if (isJson) h['Content-Type'] = 'application/json';
  const token = getToken();
  if (token) h['Authorization'] = `Bearer ${token}`;
  return h;
};

const handleRes = async (res) => {
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
};

// ─── AUTH ───────────────────────────────────────────────────
export const loginAdmin = (body) =>
  fetch(`${API_BASE}/auth/login`, { method: 'POST', headers: headers(), body: JSON.stringify(body) }).then(handleRes);

export const registerAdmin = (body) =>
  fetch(`${API_BASE}/auth/register`, { method: 'POST', headers: headers(), body: JSON.stringify(body) }).then(handleRes);

export const getMe = () =>
  fetch(`${API_BASE}/auth/me`, { headers: headers() }).then(handleRes);

export const forgotPasswordApi = (body) =>
  fetch(`${API_BASE}/auth/forgot-password`, { method: 'POST', headers: headers(), body: JSON.stringify(body) }).then(handleRes);

export const resetPasswordApi = (token, body) =>
  fetch(`${API_BASE}/auth/reset-password/${token}`, { method: 'PUT', headers: headers(), body: JSON.stringify(body) }).then(handleRes);

// ─── USERS ──────────────────────────────────────────────────
export const fetchUsers = (search = '') =>
  fetch(`${API_BASE}/users?limit=200${search ? `&search=${search}` : ''}`, { headers: headers() }).then(handleRes);

export const fetchUser = (id) =>
  fetch(`${API_BASE}/users/${id}`, { headers: headers() }).then(handleRes);

export const createUser = (formData) =>
  fetch(`${API_BASE}/users`, { method: 'POST', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const updateUser = (id, formData) =>
  fetch(`${API_BASE}/users/${id}`, { method: 'PUT', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const deleteUserApi = (id) =>
  fetch(`${API_BASE}/users/${id}`, { method: 'DELETE', headers: headers() }).then(handleRes);

// ─── ACHIEVEMENTS ───────────────────────────────────────────
export const fetchAchievements = (search = '') =>
  fetch(`${API_BASE}/achievements${search ? `?search=${search}` : ''}`, { headers: headers() }).then(handleRes);

export const fetchAchievement = (id) =>
  fetch(`${API_BASE}/achievements/${id}`, { headers: headers() }).then(handleRes);

export const createAchievement = (formData) =>
  fetch(`${API_BASE}/achievements`, { method: 'POST', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const updateAchievementApi = (id, formData) =>
  fetch(`${API_BASE}/achievements/${id}`, { method: 'PUT', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const deleteAchievementApi = (id) =>
  fetch(`${API_BASE}/achievements/${id}`, { method: 'DELETE', headers: headers() }).then(handleRes);

// ─── PROJECTS ───────────────────────────────────────────────
export const fetchProjects = (params = '') =>
  fetch(`${API_BASE}/projects${params ? `?${params}` : ''}`, { headers: headers() }).then(handleRes);

export const fetchProject = (id) =>
  fetch(`${API_BASE}/projects/${id}`, { headers: headers() }).then(handleRes);

export const createProject = (formData) =>
  fetch(`${API_BASE}/projects`, { method: 'POST', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const updateProjectApi = (id, formData) =>
  fetch(`${API_BASE}/projects/${id}`, { method: 'PUT', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const deleteProjectApi = (id) =>
  fetch(`${API_BASE}/projects/${id}`, { method: 'DELETE', headers: headers() }).then(handleRes);

export const duplicateProjectApi = (id) =>
  fetch(`${API_BASE}/projects/${id}/duplicate`, { method: 'POST', headers: headers() }).then(handleRes);

// ─── CERTIFICATES ───────────────────────────────────────────
export const fetchCertificates = (search = '') =>
  fetch(`${API_BASE}/certificates${search ? `?search=${search}` : ''}`, { headers: headers() }).then(handleRes);

export const fetchCertificate = (id) =>
  fetch(`${API_BASE}/certificates/${id}`, { headers: headers() }).then(handleRes);

export const createCertificate = (formData) =>
  fetch(`${API_BASE}/certificates`, { method: 'POST', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const updateCertificateApi = (id, formData) =>
  fetch(`${API_BASE}/certificates/${id}`, { method: 'PUT', headers: { Authorization: `Bearer ${getToken()}` }, body: formData }).then(handleRes);

export const deleteCertificateApi = (id) =>
  fetch(`${API_BASE}/certificates/${id}`, { method: 'DELETE', headers: headers() }).then(handleRes);

export const verifyCertificateApi = (certId) =>
  fetch(`${API_BASE}/certificates/verify/${certId}`).then(handleRes);

// ─── DASHBOARD ──────────────────────────────────────────────
export const fetchDashboard = () =>
  fetch(`${API_BASE}/dashboard`, { headers: headers() }).then(handleRes);

// ─── AUDIT LOGS ─────────────────────────────────────────────
export const fetchAuditLogs = (search = '') =>
  fetch(`${API_BASE}/audit-logs${search ? `?search=${search}` : ''}`, { headers: headers() }).then(handleRes);
