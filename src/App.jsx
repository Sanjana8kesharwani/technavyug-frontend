import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Verify from "./pages/Verify";
import PrivacyPolicy from "./pages/PrivacyPolicies";
import TermsConditions from "./pages/TermsConditions";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import AchievementsPage from "./pages/AchievementsPage";
import AchievementDetails from "./pages/AchievementDetails";
import Team from "./pages/Team";
import EventsMedia from "./pages/EventsMedia";
import BlogDetails from "./components/BlogDetails";
import AdminLayout from "./layouts/AdminLayout";
import ForgotPassword from "./pages/admin/ForgotPassword";
import ResetPassword from "./pages/admin/ResetPassword";

// Admin imports
import AdminLogin from "./pages/admin/AdminLogin";
import AdminProfile from "./pages/admin/AdminProfile";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AddUser from "./pages/admin/users/AddUser";
//import GenerateCertificate from "./pages/admin/certificates/GenerateCertificate";
import Achievements from "./pages/admin/achievements/Achievements";
import Users from "./pages/admin/users/Users";
import UsersProvider from "./provider/UsersProvider";
import EditUser from "./pages/admin/users/EditUser";
import AddAchievement from "./pages/admin/achievements/AddAchievement";
import EditAchievement from "./pages/admin/achievements/EditAchievement";
import AchievementsProvider from "./provider/AchievementsProvider";

import ProjectsProvider from "./provider/ProjectsProvider";
import AdminProjects from "./pages/admin/projects/AdminProjects";
import AddProject from "./pages/admin/projects/AddProject";
import EditProject from "./pages/admin/projects/EditProject";

import Certificates from "./pages/admin/certificates/certificates";
import AddCertificate from "./pages/admin/certificates/AddCertificate";
import EditCertificate from "./pages/admin/certificates/EditCertificates";
import CertificatesProvider from "./provider/CertificatesProvider";

import Settings from "./pages/admin/settings/Settings";
import Termsconditions from "./pages/admin/settings/TermsConditions";
import Privacypolicy from "./pages/admin/settings/PrivacyPolicy";
import AuditLogs from "./pages/admin/settings/AuditLogs";

import CursorGlow from "./components/CursorGlow";
import { Toaster } from "react-hot-toast";

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;
const FORGOT_PASSWORD_URL = import.meta.env.VITE_FORGOT_PASSWORD_URL;
const RESET_PASSWORD_URL = import.meta.env.VITE_RESET_PASSWORD_URL;

function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <CertificatesProvider>
          <AchievementsProvider>
            <ProjectsProvider>
              {" "}
              {/* ADD THIS */}
              <CursorGlow />
              <Toaster
                position="top-right"
                toastOptions={{
                  style: {
                    background: "#1f2937",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.1)",
                  },
                }}
              />
              <Routes>
                {/* 🌍 Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route
                  path="/achievements/:id"
                  element={<AchievementDetails />}
                />
                <Route path="/team" element={<Team />} />
                <Route path="/events-media" element={<EventsMedia />} />
                <Route path="/blog/:id" element={<BlogDetails />} />

                {/* 🔐 Admin Login */}
                <Route path={`${LOGIN_URL}`} element={<AdminLogin />} />
                <Route
                  path={`${FORGOT_PASSWORD_URL}`}
                  element={<ForgotPassword />}
                />
                <Route
                  path={`${RESET_PASSWORD_URL}`}
                  element={<ResetPassword />}
                />

                {/* 🔐 Admin Protected Routes */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="profile" element={<AdminProfile />} />

                  <Route path="users" element={<Users />} />
                  <Route path="add-user" element={<AddUser />} />
                  <Route path="edit-user/:id" element={<EditUser />} />

                  <Route path="achievements" element={<Achievements />} />
                  <Route path="add-achievement" element={<AddAchievement />} />
                  <Route
                    path="edit-achievement/:id"
                    element={<EditAchievement />}
                  />

                  <Route path="projects" element={<AdminProjects />} />
                  <Route path="add-project" element={<AddProject />} />
                  <Route path="edit-project/:id" element={<EditProject />} />

                  <Route path="certificates" element={<Certificates />} />
                  <Route path="add-certificate" element={<AddCertificate />} />
                  <Route
                    path="edit-certificate/:id"
                    element={<EditCertificate />}
                  />

                  {/* <Route path="generate" element={<GenerateCertificate />} /> */}

                  <Route path="/admin/settings" element={<Settings />} />
                  <Route
                    path="/admin/settings/terms"
                    element={<Termsconditions />}
                  />
                  <Route
                    path="/admin/settings/privacy-policy"
                    element={<Privacypolicy />}
                  />
                  <Route
                    path="/admin/settings/audit-logs"
                    element={<AuditLogs />}
                  />
                </Route>
              </Routes>
            </ProjectsProvider>
          </AchievementsProvider>
        </CertificatesProvider>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;
