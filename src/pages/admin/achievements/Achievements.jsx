import { useNavigate } from "react-router-dom";
import { useAchievements } from "../../../context/useAchievements";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Achievements() {
  const navigate = useNavigate();
  const { achievements, loading, deleteAchievement, toggleFeatured } = useAchievements();

  const [search, setSearch] = useState("");

  const filtered = (achievements || []).filter((a) =>
    (a?.title || "").toLowerCase().includes((search || "").toLowerCase()),
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "clamp(10px, 2vw, 20px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          background: "#c8d8e8",
          borderRadius: "clamp(14px, 2vw, 18px)",
          minHeight: "calc(100vh - 40px)",
          padding: "clamp(14px, 2vw, 20px)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 30px)",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "6px",
              }}
            >
              Achievements
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "clamp(14px, 2vw, 16px)",
                margin: 0,
              }}
            >
              Manage all achievements
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/add-achievement")}
            style={{
              background: "#4f46e5",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              width: "fit-content",
              whiteSpace: "nowrap",
            }}
          >
            + Add Achievement
          </button>
        </div>

        {/* SEARCH */}
        <input
          placeholder="Search achievement..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginBottom: "15px",
            padding: "10px",
            width: "100%",
            maxWidth: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        {/* TABLE */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "clamp(14px, 2vw, 20px)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            overflowX: "auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <div style={{ display: "inline-block", width: "28px", height: "28px", border: "3px solid #ccc", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
              <p style={{ marginTop: "12px", color: "#64748b" }}>Loading achievements...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#777",
              }}
            >
              No achievements found
            </div>
          ) : (
            <table
              style={{
                width: "100%",
                minWidth: "700px",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#e2e8f0",
                    textAlign: "left",
                  }}
                >
                  <th style={{ padding: "12px" }}>Title</th>

                  <th style={{ padding: "12px" }}>Type</th>

                  <th style={{ padding: "12px" }}>Organization</th>

                  <th style={{ padding: "12px" }}>Featured</th>

                  <th style={{ padding: "12px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((a, idx) => (
                  <tr
                    key={a._id || a.id || idx}
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td
                      style={{
                        padding: "12px",
                        wordBreak: "break-word",
                      }}
                    >
                      {a?.title || "—"}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        wordBreak: "break-word",
                      }}
                    >
                      {a?.type || "—"}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        wordBreak: "break-word",
                      }}
                    >
                      {a?.organization || a?.issuingAuthority || "—"}
                    </td>

                    <td style={{ padding: "12px" }}>
                      <input
                        type="checkbox"
                        checked={!!a?.featured}
                        onChange={() => toggleFeatured(a._id || a.id)}
                      />
                    </td>

                    {/* ACTIONS */}
                    <td style={{ padding: "12px" }}>
                      <div className="action-box">
                        {/* EDIT */}
                        <button
                          onClick={() =>
                            navigate(`/admin/edit-achievement/${a._id || a.id}`)
                          }
                          style={{
                            background: "#4f46e5",
                            color: "#fff",
                            border: "none",
                            padding: "10px 16px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Edit
                        </button>

                        {/* DELETE */}
                        <button
                          className="delete-btn"
                          onClick={() => {
                            if (
                              window.confirm("Are you sure you want to delete?")
                            ) {
                              deleteAchievement(a._id || a.id);

                              toast.success("Achievement deleted successfully");
                            }
                          }}
                        >
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* SAME CSS AS USERS */}
      <style>
        {`
        .action-box {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .delete-btn {
          opacity: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
          transition: 0.2s;
        }

        .action-box:hover .delete-btn {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .delete-btn {
            opacity: 1;
          }
        }
      `}
      </style>
    </div>
  );
}
