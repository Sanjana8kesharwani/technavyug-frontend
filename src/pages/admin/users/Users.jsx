import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../context/useUsers";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Users() {
  const navigate = useNavigate();
  const { users, loading, deleteUser } = useUsers();

  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredUsers = users.filter((u) => {
    const name = u?.name || u?.fullName || "";
    return name.toLowerCase().includes((search || "").toLowerCase());
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const nameA = a?.name || a?.fullName || "";
    const nameB = b?.name || b?.fullName || "";
    return sortAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

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
          borderRadius: "clamp(18px, 3vw, 28px)",
          minHeight: "calc(100vh - 40px)",
          padding: "clamp(14px, 3vw, 20px)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "14px",
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
              Users
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "clamp(14px, 2vw, 16px)",
                margin: 0,
              }}
            >
              Manage all users
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <input
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                minWidth: "180px",
                boxSizing: "border-box",
              }}
            />

            <button
              onClick={() => navigate("/admin/add-user")}
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
                whiteSpace: "nowrap",
              }}
            >
              + Add User
            </button>
          </div>
        </div>

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
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "950px",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#e2e8f0",
                  textAlign: "left",
                }}
              >
                <th
                  style={{
                    padding: "12px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => setSortAsc(!sortAsc)}
                >
                  Name {sortAsc ? "↑" : "↓"}
                </th>

                <th
                  style={{
                    padding: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Designation
                </th>

                <th
                  style={{
                    padding: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Email
                </th>

                <th
                  style={{
                    padding: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Phone
                </th>

                <th
                  style={{
                    padding: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  LinkedIn
                </th>

                <th
                  style={{
                    padding: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" style={{ padding: "20px", textAlign: "center" }}>
                    <div style={{ display: "inline-block", width: "24px", height: "24px", border: "3px solid #ccc", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
                    <p style={{ marginTop: "10px", color: "#666" }}>Loading users...</p>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </td>
                </tr>
              ) : sortedUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ padding: "20px", textAlign: "center" }}>
                    No users found
                  </td>
                </tr>
              ) : (
                sortedUsers.map((user, i) => (
                  <tr
                    key={user._id || user.id || i}
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td
                      style={{
                        padding: "12px",
                        fontWeight: "500",
                        wordBreak: "break-word",
                      }}
                    >
                      {user?.name || user?.fullName || "—"}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        wordBreak: "break-word",
                      }}
                    >
                      {user?.designation || "—"}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        color: "#555",
                        wordBreak: "break-word",
                      }}
                    >
                      {user?.email || "—"}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        wordBreak: "break-word",
                      }}
                    >
                      {user?.phone || user?.phoneNumber || "—"}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        wordBreak: "break-word",
                      }}
                    >
                      {user?.linkedin || user?.linkedinUrl ? (
                        <a href={user.linkedin || user.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>

                    {/* ACTIONS */}
                    <td style={{ padding: "12px" }}>
                      <div className="action-box">
                        <button
                          onClick={() =>
                            navigate(`/admin/edit-user/${user._id || user.id}`)
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

                        <button
                          className="delete-btn"
                          onClick={() => {
                            if (
                              window.confirm("Are you sure you want to delete?")
                            ) {
                              deleteUser(user._id || user.id);
                              toast.success("User deleted successfully");
                            }
                          }}
                        >
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
        .action-box {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .delete-btn {
          opacity: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
        }

        .action-box:hover .delete-btn {
          opacity: 1;
        }
        `}
      </style>
    </div>
  );
}
