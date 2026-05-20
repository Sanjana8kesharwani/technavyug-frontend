import React, { useState, useEffect } from "react";
import { Search, Filter, Activity } from "lucide-react";
import { fetchAuditLogs } from "../../../services/api";

const AuditLogs = () => {
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchAuditLogs();
        const data = (res.data || []).map((log) => ({
          admin: log.adminId?.name || "Admin",
          action: log.action || "Updated",
          module: log.resource || "System",
          description:
            log.details?.message ||
            (log.details?.certificateId
              ? `Certificate ${log.details.certificateId} updated successfully`
              : "Activity performed"),
          ip: "—",
          date: new Date(log.createdAt).toLocaleString(),
        }));
        setLogs(data);
      } catch {
        // fallback sample data
        setLogs([
          {
            admin: "Admin",
            action: "Updated",
            module: "Projects",
            description: "Changed project status",
            ip: "—",
            date: new Date().toLocaleString(),
          },
        ]);
      }
    };
    load();
  }, []);

  const filteredLogs = logs.filter(
    (log) =>
      log.admin.toLowerCase().includes(search.toLowerCase()) ||
      log.module.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "14px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#c8d8ea",
          borderRadius: "28px",
          minHeight: "calc(100vh - 28px)",
          width: "100%",
          overflowX: "hidden",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <div
          style={{
            marginBottom: "22px",
            paddingLeft: "4px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "700",
              color: "#1e293b",
            }}
          >
            Audit Logs
          </h1>

          <p
            style={{
              marginTop: "8px",
              fontSize: "15px",
              color: "#64748b",
              fontWeight: "500",
            }}
          >
            Track all platform activities and admin actions
          </p>
        </div>

        {/* Main White Container */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "clamp(18px, 3vw, 28px)",
            padding: "clamp(18px, 3vw, 28px)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Top Controls */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            {/* Search */}
            <div
              style={{
                flex: 1,
                minWidth: "260px",
                position: "relative",
              }}
            >
              <Search
                size={18}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "16px",
                  transform: "translateY(-50%)",
                  color: "#64748b",
                }}
              />

              <input
                type="text"
                placeholder="Search audit logs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "14px",
                  border: "1px solid #dbe4ee",
                  paddingLeft: "46px",
                  paddingRight: "16px",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  background: "#fff",
                }}
              />
            </div>

            {/* Filter Button */}
            <button
              style={{
                height: "48px",
                padding: "0 18px",
                borderRadius: "14px",
                border: "1px solid #dbe4ee",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                color: "#334155",
              }}
            >
              <Filter size={18} />
              Filter
            </button>
          </div>

          {/* Table */}
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              borderRadius: "18px",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "950px",
                borderCollapse: "collapse",
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#eef2ff",
                  }}
                >
                  {[
                    "Admin",
                    "Action",
                    "Module",
                    "Description",
                    "IP Address",
                    "Date & Time",
                  ].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        padding: "18px",
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#334155",
                        fontWeight: "700",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredLogs.map((log, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <td
                      style={{
                        padding: "18px",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#0f172a",
                      }}
                    >
                      {log.admin}
                    </td>

                    <td
                      style={{
                        padding: "18px",
                      }}
                    >
                      <span
                        style={{
                          padding: "6px 14px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: "700",
                          background:
                            log.action === "Added"
                              ? "#dcfce7"
                              : log.action === "Deleted"
                                ? "#fee2e2"
                                : "#dbeafe",
                          color:
                            log.action === "Added"
                              ? "#166534"
                              : log.action === "Deleted"
                                ? "#991b1b"
                                : "#1d4ed8",
                        }}
                      >
                        {log.action}
                      </span>
                    </td>

                    <td
                      style={{
                        padding: "18px",
                        fontSize: "15px",
                        color: "#334155",
                        fontWeight: "600",
                      }}
                    >
                      {log.module}
                    </td>

                    <td
                      style={{
                        padding: "18px",
                        fontSize: "15px",
                        color: "#475569",
                        lineHeight: "24px",
                      }}
                    >
                      {log.description}
                    </td>

                    <td
                      style={{
                        padding: "18px",
                        fontSize: "14px",
                        color: "#64748b",
                      }}
                    >
                      {log.ip}
                    </td>

                    <td
                      style={{
                        padding: "18px",
                        fontSize: "14px",
                        color: "#64748b",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {log.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredLogs.length === 0 && (
            <div
              style={{
                padding: "60px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "#4f46e5",
                }}
              >
                <Activity size={32} />
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: "20px",
                  color: "#0f172a",
                  marginBottom: "8px",
                }}
              >
                No Audit Logs Found
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: "15px",
                }}
              >
                No matching activity logs available right now.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;
