import { useNavigate } from "react-router-dom";
import { ShieldCheck, FileText, ClipboardList } from "lucide-react";

const settingsCards = [
  {
    title: "Terms & Conditions",
    description: "Manage platform rules, terms and conditions for all users.",
    icon: <FileText size={24} />,
    path: "/admin/settings/terms",
  },
  {
    title: "Privacy Policy",
    description:
      "Update and manage company privacy and data protection policies.",
    icon: <ShieldCheck size={24} />,
    path: "/admin/settings/privacy-policy",
  },
  {
    title: "Audit Logs",
    description: "Track all admin activities, updates and system changes.",
    icon: <ClipboardList size={24} />,
    path: "/admin/settings/audit-logs",
  },
];

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        flex: 1,
        background: "#c8d8ea",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        padding: "clamp(12px, 3vw, 24px)",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <div
        style={{
          marginBottom: "clamp(16px, 3vw, 22px)",
          paddingLeft: "4px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(28px, 4vw, 30px)",
            fontWeight: "700",
            color: "#1e293b",
          }}
        >
          Settings
        </h1>

        <p
          style={{
            marginTop: "8px",
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#64748b",
            fontWeight: "500",
          }}
        >
          Manage all platform settings
        </p>
      </div>

      {/* Main White Container */}
      <div
        style={{
          background: "#f8fafc",
          borderRadius: "clamp(18px, 3vw, 28px)",
          padding: "clamp(14px, 3vw, 22px)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(14px, 2vw, 20px)",
          }}
        >
          {settingsCards.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                background: "#ffffff",
                borderRadius: "clamp(16px, 2vw, 22px)",
                padding: "clamp(16px, 3vw, 24px)",
                cursor: "pointer",
                border: "1px solid #e2e8f0",
                transition: "0.3s ease",
                width: "100%",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(12px, 2vw, 18px)",
                  flexWrap: "wrap",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "clamp(46px, 6vw, 58px)",
                    height: "clamp(46px, 6vw, 58px)",
                    minWidth: "clamp(46px, 6vw, 58px)",
                    borderRadius: "clamp(12px, 2vw, 16px)",
                    background: "#e0e7ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#4f46e5",
                  }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    minWidth: "min(220px, 100%)",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "clamp(16px, 2vw, 20px)",
                      fontWeight: "700",
                      color: "#0f172a",
                      marginBottom: "10px",
                      lineHeight: "clamp(24px, 3vw, 34px)",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color: "#64748b",
                      fontSize: "clamp(13px, 1.8vw, 18px)",
                      lineHeight: "clamp(22px, 3vw, 30px)",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
