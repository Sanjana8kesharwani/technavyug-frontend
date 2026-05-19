import { useState, useEffect } from "react";
import { Users, Award, LayoutGrid, Trophy } from "lucide-react";
import { fetchDashboard } from "../../services/api";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const COLORS = ["#34d399", "#fb923c", "#ef4444", "#3b82f6"];

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProjects: 0,
    totalCertificates: 0,
    totalAchievements: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetchDashboard();
        if (res.data?.cards) setStats(res.data.cards);
      } catch { /* ignore */ }
      finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const statCards = [
    { label: "Total Users", value: String(stats?.totalUsers || 0), gradient: "linear-gradient(135deg, rgba(76,175,80,0.75), rgba(102,187,106,0.75))", icon: <Users size={20} color="#fff" /> },
    { label: "Total Projects", value: String(stats?.totalProjects || 0), gradient: "linear-gradient(135deg, rgba(255,167,38,0.75), rgba(251,140,0,0.75))", icon: <LayoutGrid size={20} color="#fff" /> },
    { label: "Total Certificates", value: String(stats?.totalCertificates || 0), gradient: "linear-gradient(135deg, rgba(239,83,80,0.75), rgba(229,57,53,0.75))", icon: <Award size={20} color="#fff" /> },
    { label: "Total Achievements", value: String(stats?.totalAchievements || 0), gradient: "linear-gradient(135deg, rgba(66,165,245,0.75), rgba(30,136,229,0.75))", icon: <Trophy size={20} color="#fff" /> },
  ];

  const analyticsData = [
    { name: "Users", value: stats?.totalUsers || 0 },
    { name: "Projects", value: stats?.totalProjects || 0 },
    { name: "Certificates", value: stats?.totalCertificates || 0 },
    { name: "Achievements", value: stats?.totalAchievements || 0 },
  ];

  const recentUploads = [
    { text: "New user registered", time: "Recently", icon: <Users size={16} color="#6b7280" /> },
    { text: "Certificate generated", time: "Recently", icon: <Award size={16} color="#6b7280" /> },
    { text: "Project uploaded", time: "Recently", icon: <LayoutGrid size={16} color="#6b7280" /> },
    { text: "Achievement added", time: "Recently", icon: <Trophy size={16} color="#6b7280" /> },
  ];
  if (loading) {
    return (
      <div
        style={{
          flex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #c8d8e8 0%, #d8cce8 50%, #b8ccd8 100%)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block", width: "40px", height: "40px", border: "4px solid #ccc", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
          <p style={{ marginTop: "16px", color: "#1a1a2e", fontWeight: "600", fontSize: "16px" }}>Loading Dashboard Analytics...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
        overflowY: "auto",
        padding: "24px",
        boxSizing: "border-box",
        background:
          "linear-gradient(135deg, #c8d8e8 0%, #d8cce8 50%, #b8ccd8 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* HEADER */}

      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "clamp(26px, 4vw, 32px)",
            fontWeight: "800",
            color: "#1a1a2e",
            margin: 0,
          }}
        >
          Dashboard
        </h1>
      </div>

      {/* STAT CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "22px",
        }}
      >
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{
              background: card.gradient,
              borderRadius: "20px",
              padding: "20px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              minHeight: "125px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                right: "-25px",
                bottom: "-25px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {card.label}
              </span>

              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </div>
            </div>

            <div
              style={{
                fontSize: "42px",
                fontWeight: "700",
              }}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>

      {/* TOP SECTION */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* SYSTEM OVERVIEW */}

        <div
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "18px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1a1a2e",
                margin: 0,
              }}
            >
              System Overview
            </h2>

            <span
              style={{
                color: "#10b981",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              View details
            </span>
          </div>

          {[
            {
              label: "Users Active",
              value: 75,
              color: "#8b5cf6",
            },
            {
              label: "Projects Done",
              value: 60,
              color: "#34d399",
            },
            {
              label: "Certificates Issued",
              value: 40,
              color: "#f472b6",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "#4b5563",
                    fontWeight: "600",
                  }}
                >
                  {item.label}
                </span>

                <span
                  style={{
                    fontSize: "13px",
                    color: "#111827",
                    fontWeight: "700",
                  }}
                >
                  {item.value}%
                </span>
              </div>

              <div
                style={{
                  height: "8px",
                  background: "#f3f4f6",
                  borderRadius: "999px",
                }}
              >
                <div
                  style={{
                    width: `${item.value}%`,
                    height: "100%",
                    background: item.color,
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL OVERVIEW */}

        <div
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#1a1a2e",
              marginBottom: "24px",
            }}
          >
            Total Overview
          </h2>

          {analyticsData.map((item, index) => (
            <div
              key={item.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: COLORS[index],
                  }}
                />

                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                >
                  {item.name}
                </span>
              </div>

              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MIDDLE SECTION */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* RECENT UPLOADS */}

        <div
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "18px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1a1a2e",
                margin: 0,
              }}
            >
              Recent Uploads
            </h2>

            <span
              style={{
                color: "#10b981",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              View all
            </span>
          </div>

          {recentUploads.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 0",
                borderBottom:
                  i !== recentUploads.length - 1 ? "1px solid #f3f4f6" : "none",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  minWidth: "42px",
                  borderRadius: "12px",
                  background: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>

              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  {item.text}
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                  }}
                >
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* QUICK STATS */}

        <div
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#1a1a2e",
              marginBottom: "22px",
            }}
          >
            Quick Stats
          </h2>

          {[
            {
              label: "Active Users",
              value: "75%",
              color: "#8b5cf6",
            },
            {
              label: "Completed Projects",
              value: "60%",
              color: "#34d399",
            },
            {
              label: "Certificates Issued",
              value: "40%",
              color: "#f472b6",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    fontWeight: "600",
                  }}
                >
                  {item.label}
                </span>

                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  {item.value}
                </span>
              </div>

              <div
                style={{
                  height: "8px",
                  background: "#f3f4f6",
                  borderRadius: "999px",
                }}
              >
                <div
                  style={{
                    width: item.value,
                    height: "100%",
                    background: item.color,
                    borderRadius: "999px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL WIDTH ANALYTICS */}

      <div
        style={{
          background: "#fff",
          borderRadius: "22px",
          padding: "24px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#1a1a2e",
            marginBottom: "20px",
          }}
        >
          System Analytics
        </h2>

        <div style={{ width: "100%", overflowX: "auto" }}>
          <div style={{ minWidth: "500px" }}>
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {analyticsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
