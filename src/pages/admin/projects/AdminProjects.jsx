import { useState, useEffect } from "react";
import { useProjects } from "../../../provider/useProjects";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { Copy, Trash2, Star, Upload } from "lucide-react";

export default function AdminProjects() {
  const {
    projects,
    loading,
    deleteProject,
    duplicateProject,
    toggleFeatured,
    togglePublish,
  } = useProjects();

  const navigate = useNavigate();

  const [openMenuId, setOpenMenuId] = useState(null);

  // FILTER STATES
  const [statusFilter, setStatusFilter] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");

  const [featuredFilter, setFeaturedFilter] = useState("");

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".action-menu")) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // DELETE
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteProject(id);

      toast.success("Project deleted");
    }
  };

  // FILTER LOGIC
  const filteredProjects = (projects || []).filter((p) => {
    const statusMatch = !statusFilter || p?.status === statusFilter;

    const categoryMatch = !categoryFilter || p?.category === categoryFilter;

    const featuredMatch =
      featuredFilter === ""
        ? true
        : featuredFilter === "featured"
          ? p?.featured
          : !p?.featured;

    return statusMatch && categoryMatch && featuredMatch;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "clamp(10px, 2vw, 14px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* MAIN WRAPPER */}
      <div
        style={{
          background: "#c8d8e8",
          borderRadius: "clamp(18px, 3vw, 28px)",
          minHeight: "calc(100vh - 28px)",
          padding: "clamp(14px, 3vw, 20px)",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "22px",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 28px)",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "4px",
              }}
            >
              Projects
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "clamp(14px, 2vw, 15px)",
              }}
            >
              Manage projects and details
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/add-project")}
            style={{
              background: "#4f46e5",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              width: "fit-content",
            }}
          >
            + Add Project
          </button>
        </div>

        {/* FILTERS */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "18px",
            overflowX: "auto",
            paddingBottom: "4px",
          }}
        >
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={filterStyle}
          >
            <option value="">All Status</option>

            <option>Ongoing</option>

            <option>Completed</option>

            <option>On Hold</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={filterStyle}
          >
            <option value="">All Categories</option>

            <option>AI</option>

            <option>IoT</option>

            <option>Research</option>
          </select>

          <select
            value={featuredFilter}
            onChange={(e) => setFeaturedFilter(e.target.value)}
            style={filterStyle}
          >
            <option value="">All Projects</option>

            <option value="featured">Featured</option>

            <option value="normal">Normal</option>
          </select>
        </div>

        {/* TABLE BOX */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "clamp(10px, 2vw, 20px)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            overflowX: "auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <div style={{ display: "inline-block", width: "28px", height: "28px", border: "3px solid #ccc", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
              <p style={{ marginTop: "12px", color: "#64748b" }}>Loading projects...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : filteredProjects.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#777",
              }}
            >
              No projects found
            </p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "900px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#e2e8f0",
                  }}
                >
                  <th style={thStyle}>Title</th>

                  <th style={thStyle}>Category</th>

                  <th style={thStyle}>Status</th>

                  <th style={thStyle}>Featured</th>

                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredProjects.map((p, idx) => (
                  <tr
                    key={p._id || p.id || idx}
                    style={{
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <td style={tdStyle}>{p?.title || "—"}</td>

                    <td style={tdStyle}>{p?.category || "—"}</td>

                    {/* STATUS */}
                    <td style={tdStyle}>
                      {p?.status === "Completed" ? (
                        <span
                          style={{
                            background: "#dcfce7",
                            color: "#15803d",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Completed
                        </span>
                      ) : p?.status === "Ongoing" ? (
                        <span
                          style={{
                            background: "#dbeafe",
                            color: "#2563eb",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Ongoing
                        </span>
                      ) : (
                        <span
                          style={{
                            background: "#fee2e2",
                            color: "#dc2626",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Planned
                        </span>
                      )}
                    </td>

                    {/* FEATURED */}
                    <td style={tdStyle}>
                      {p?.featured ? (
                        <span
                          style={{
                            background: "#dcfce7",
                            color: "#15803d",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Featured
                        </span>
                      ) : (
                        <span
                          style={{
                            background: "#fee2e2",
                            color: "#dc2626",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Normal
                        </span>
                      )}
                    </td>

                    {/* ACTIONS */}
                    <td style={tdStyle}>
                      <div
                        className="action-menu"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          position: "relative",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          onClick={() =>
                            navigate(`/admin/edit-project/${p._id || p.id}`)
                          }
                          style={{
                            background: "#4f46e5",
                            color: "#fff",
                            border: "none",
                            textDecoration: "none",
                            padding: "10px 16px",
                            borderRadius: "10px",
                            fontSize: "14px",
                            fontWeight: "600",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            setOpenMenuId(openMenuId === (p._id || p.id) ? null : (p._id || p.id))
                          }
                          style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            fontSize: "22px",
                            fontWeight: "700",
                          }}
                        >
                          ⋮
                        </button>

                        {openMenuId === (p._id || p.id) && (
                          <div
                            style={{
                              position: "absolute",
                              top: "48px",
                              right: "0",
                              background: "#fff",
                              borderRadius: "14px",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                              width: "220px",
                              zIndex: 50,
                              overflow: "hidden",
                            }}
                          >
                            <button
                              onClick={() => {
                                duplicateProject(p._id || p.id);

                                toast.success("Project duplicated");

                                setOpenMenuId(null);
                              }}
                              style={menuButtonStyle}
                            >
                              <Copy size={17} />
                              Copy Project
                            </button>

                            <button
                              onClick={() => {
                                togglePublish(p._id || p.id);

                                setOpenMenuId(null);
                              }}
                              style={menuButtonStyle}
                            >
                              <Upload size={17} />
                              {p?.published ? "Unpublish" : "Publish"}
                            </button>

                            <button
                              onClick={() => {
                                toggleFeatured(p._id || p.id);

                                setOpenMenuId(null);
                              }}
                              style={menuButtonStyle}
                            >
                              <Star size={17} />
                              {p?.featured ? "Remove Featured" : "Mark Featured"}
                            </button>

                            <button
                              onClick={() => {
                                handleDelete(p._id || p.id);

                                setOpenMenuId(null);
                              }}
                              style={{
                                ...menuButtonStyle,
                                color: "#dc2626",
                              }}
                            >
                              <Trash2 size={17} />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

const filterStyle = {
  padding: "12px 18px",
  border: "1px solid #dbe2ea",
  borderRadius: "12px",
  outline: "none",
  fontSize: "14px",
  background: "#fff",
  minWidth: "170px",
  flexShrink: 0,
  boxSizing: "border-box",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  whiteSpace: "nowrap",
};

const tdStyle = {
  padding: "18px 16px",
  fontSize: "15px",
  color: "#0f172a",
  wordBreak: "break-word",
};

const menuButtonStyle = {
  width: "100%",
  border: "none",
  background: "#fff",
  padding: "13px 16px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  fontSize: "14px",
};
