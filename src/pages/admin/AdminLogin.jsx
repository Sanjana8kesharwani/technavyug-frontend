import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { loginAdmin } from "../../services/api";

const FORGOT_PASSWORD_URL = import.meta.env.VITE_FORGOT_PASSWORD_URL;

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/admin/dashboard" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginAdmin({ email, password });
      localStorage.setItem("token", res.token);
      if (res.data) localStorage.setItem("admin", JSON.stringify(res.data));
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #06B6D4 0%, #0891B2 45%, #0E7490 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        overflow: "hidden",
        position: "relative",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* BACKGROUND SHAPES */}

      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          top: "-250px",
          right: "-180px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          bottom: "-180px",
          left: "-120px",
        }}
      />

      {/* MAIN CARD */}

      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          minHeight: "auto",
          background: "#fff",
          borderRadius: "28px",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            flex: 1,
            minWidth: "320px",
            background: "#fff",
            padding: "clamp(30px, 5vw, 70px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          <div style={{ marginBottom: "35px" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "90px",
                marginBottom: "20px",
                filter: "brightness(0)",
                maxWidth: "100%",
              }}
            />

            <p
              style={{
                color: "#777",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              Welcome to
            </p>

            <h1
              style={{
                fontSize: "clamp(34px, 7vw, 56px)",
                margin: 0,
                color: "#2d3748",
                fontWeight: "800",
                lineHeight: "1.1",
                wordBreak: "break-word",
              }}
            >
              Technavyug
            </h1>
          </div>

          {/* FORM */}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#555",
                  fontWeight: "600",
                }}
              >
                Username
              </label>

              <input
                type="email"
                placeholder="admin@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#555",
                  fontWeight: "600",
                }}
              >
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* REMEMBER */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                <input type="checkbox" />
                Remember me
              </label>

              <span
                onClick={() => navigate(`${FORGOT_PASSWORD_URL}`)}
                style={{
                  color: "#0891B2",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Forgot Password?
              </span>
            </div>

            {/* ERROR */}

            {error && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  marginBottom: "15px",
                }}
              >
                {error}
              </p>
            )}

            {/* BUTTON */}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 12px 25px rgba(8,145,178,0.25)",
                opacity: loading ? 0.7 : 1,
              }}
              disabled={loading}
            >
              {loading ? "LOGGING IN..." : "LOGIN"}
            </button>

            <p
              style={{
                marginTop: "25px",
                color: "#777",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              © 2026 Technavyug. All Rights Reserved
            </p>
          </form>
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            flex: 1,
            minWidth: "320px",
            background:
              "linear-gradient(135deg, #06B6D4 0%, #0891B2 45%, #0E7490 100%)",
            color: "#fff",
            position: "relative",
            padding: "clamp(30px, 5vw, 70px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* CIRCLES */}

          <div
            style={{
              position: "absolute",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              top: "-100px",
              left: "-80px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              bottom: "40px",
              right: "-60px",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 42px)",
              marginBottom: "20px",
              zIndex: 2,
              lineHeight: "1.2",
            }}
          >
            About Technavyug
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.88)",
              marginBottom: "35px",
              zIndex: 2,
              fontSize: "16px",
            }}
          >
            Technavyug is a modern platform focused on empowering students and
            developers with future-ready technology skills, projects, and
            innovation-driven learning experiences.
          </p>

          <div style={{ zIndex: 2 }}>
            <h3
              style={{
                marginBottom: "18px",
                fontSize: "24px",
              }}
            >
              Features
            </h3>

            {[
              "Modern Admin Dashboard",
              "Certificate Management System",
              "Project & User Management",
              "Responsive and Secure Platform",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "18px",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    minWidth: "10px",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* BOTTOM DESIGN */}

          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
            }}
          >
            <svg
              viewBox="0 0 1440 320"
              style={{
                width: "100%",
                display: "block",
              }}
            >
              <path
                fill="rgba(255,255,255,0.15)"
                d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px 18px",
  borderRadius: "10px",
  border: "1px solid #E2E8F0",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
  background: "#F8FAFC",
};
