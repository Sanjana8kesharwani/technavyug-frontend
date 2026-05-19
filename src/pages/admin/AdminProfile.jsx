import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  Phone,
  UserCog,
  KeyRound,
  BadgeCheck,
} from "lucide-react";

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

export default function AdminProfile() {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("admin") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate(LOGIN_URL);
  };

  return (
    <div
      style={{
        background: "#c8d8e8",
        minHeight: "100vh",
        padding: "clamp(10px, 2vw, 20px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 30px)",
              fontWeight: "700",
              margin: 0,
              color: "#0f172a",
            }}
          >
            Admin Profile
          </h1>

          <p
            style={{
              marginTop: "6px",
              color: "#475569",
              fontSize: "clamp(14px, 2vw, 15px)",
            }}
          >
            Manage your account and security settings
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "12px 22px",
            borderRadius: "12px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "14px",
            whiteSpace: "nowrap",
            maxWidth: "100%",
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "clamp(18px, 4vw, 30px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          boxSizing: "border-box",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "42px",
              fontWeight: "700",
              flexShrink: 0,
            }}
          >
            {(admin.name || "AD").substring(0, 2).toUpperCase()}
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: "240px" }}>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(24px, 4vw, 30px)",
                color: "#0f172a",
                wordBreak: "break-word",
              }}
            >
              {admin.name || "Admin"}
            </h2>

            <p
              style={{
                marginTop: "6px",
                color: "#64748b",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
            >
              {admin.role || "Super Admin"} • Technavyug
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "14px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Active
              </span>

              <span
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Full Access
              </span>

              <span
                style={{
                  background: "#ede9fe",
                  color: "#6d28d9",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Secure Login
              </span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {/* Email */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "26px",
              boxShadow: "0 8px 24px rgba(255, 192, 203, 0.18)",
              border: "1px solid #f1f5f9",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                background: "#eff6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Mail size={30} color="#2563eb" />
            </div>

            <p
              style={{
                marginTop: "22px",
                marginBottom: "8px",
                color: "#64748b",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Email Address
            </p>

            <h3
              style={{
                margin: 0,
                color: "#0f172a",
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: "700",
                wordBreak: "break-word",
              }}
            >
              {admin.email || "admin@gmail.com"}
            </h3>

            <p
              style={{
                marginTop: "10px",
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              Primary admin communication email
            </p>
          </div>

          {/* Phone */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "26px",
              boxShadow: "0 8px 24px rgba(255, 192, 203, 0.18)",
              border: "1px solid #f1f5f9",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                background: "#eff6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Phone size={30} color="#2563eb" />
            </div>

            <p
              style={{
                marginTop: "22px",
                marginBottom: "8px",
                color: "#64748b",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Phone Number
            </p>

            <h3
              style={{
                margin: 0,
                color: "#0f172a",
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: "700",
              }}
            >
              +91 9876543210
            </h3>

            <p
              style={{
                marginTop: "10px",
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              Verified contact number
            </p>
          </div>

          {/* Role */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "26px",
              boxShadow: "0 8px 24px rgba(255, 192, 203, 0.18)",
              border: "1px solid #f1f5f9",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                background: "#eff6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <UserCog size={30} color="#2563eb" />
            </div>

            <p
              style={{
                marginTop: "22px",
                marginBottom: "8px",
                color: "#64748b",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Admin Role
            </p>

            <h3
              style={{
                margin: 0,
                color: "#0f172a",
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: "700",
              }}
            >
              {admin.role || "Super Admin"}
            </h3>

            <p
              style={{
                marginTop: "10px",
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              Full dashboard and settings access
            </p>
          </div>
        </div>

        {/* Security Section */}
        <div>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 28px)",
              marginBottom: "24px",
              color: "#0f172a",
              fontWeight: "700",
            }}
          >
            Security & Access
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Account Status */}
            <div
              style={{
                background: "#ffffff",
                padding: "28px",
                borderRadius: "24px",
                boxShadow: "0 8px 24px rgba(255, 192, 203, 0.18)",
                border: "1px solid #f1f5f9",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ShieldCheck size={32} color="#2563eb" />
              </div>

              <h3
                style={{
                  marginTop: "22px",
                  marginBottom: "10px",
                  color: "#0f172a",
                  fontSize: "22px",
                }}
              >
                Account Status
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                Your admin account is active and protected with secure
                authentication access.
              </p>

              <div
                style={{
                  marginTop: "18px",
                  display: "inline-block",
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Secure
              </div>
            </div>

            {/* Password */}
            <div
              style={{
                background: "#ffffff",
                padding: "28px",
                borderRadius: "24px",
                boxShadow: "0 8px 24px rgba(255, 192, 203, 0.18)",
                border: "1px solid #f1f5f9",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <KeyRound size={32} color="#2563eb" />
              </div>

              <h3
                style={{
                  marginTop: "22px",
                  marginBottom: "10px",
                  color: "#0f172a",
                  fontSize: "22px",
                }}
              >
                Password Strength
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                Strong password enabled with protected login and secure admin
                access permissions.
              </p>

              <div
                style={{
                  marginTop: "18px",
                  display: "inline-block",
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Strong
              </div>
            </div>

            {/* Authentication */}
            <div
              style={{
                background: "#ffffff",
                padding: "28px",
                borderRadius: "24px",
                boxShadow: "0 8px 24px rgba(255, 192, 203, 0.18)",
                border: "1px solid #f1f5f9",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BadgeCheck size={32} color="#2563eb" />
              </div>

              <h3
                style={{
                  marginTop: "22px",
                  marginBottom: "10px",
                  color: "#0f172a",
                  fontSize: "22px",
                }}
              >
                Authentication
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                Advanced secure authentication system is enabled for admin panel
                protection.
              </p>

              <div
                style={{
                  marginTop: "18px",
                  display: "inline-block",
                  background: "#ede9fe",
                  color: "#6d28d9",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Enabled
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
