import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LockKeyhole, ArrowLeft, ShieldCheck } from "lucide-react";
import { resetPasswordApi } from "../../services/api";

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Invalid or missing reset token");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await resetPasswordApi(token, { newPassword });
      alert("Password reset successful");
      navigate(LOGIN_URL);
    } catch (err) {
      alert(err.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #06b6d4 0%, #0891b2 35%, #0f172a 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Circles */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          top: "-150px",
          right: "-120px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          bottom: "-120px",
          left: "-100px",
        }}
      />

      {/* Main Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "1050px",
          minHeight: "620px",
          display: "flex",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
          background: "#fff",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: 1,
            background: "#f8fafc",
            padding: "60px 55px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Back Button */}
          <button
            onClick={() =>
              navigate(
                "/secure-gateway/admin-vault/verify-auth-9xK7mP2qR8vT5wY3zL4nB6jH8uN0pQ",
              )
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#0f172a",
              marginBottom: "35px",
              fontWeight: "600",
              fontSize: "15px",
              width: "fit-content",
            }}
          >
            <ArrowLeft size={18} />
            Back to Login
          </button>

          {/* Logo */}
          <div
            style={{
              width: "82px",
              height: "82px",
              borderRadius: "22px",
              background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "28px",
              boxShadow: "0 10px 25px rgba(6,182,212,0.35)",
            }}
          >
            <LockKeyhole size={42} color="#fff" />
          </div>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Create a secure password
          </p>

          <h1
            style={{
              fontSize: "54px",
              fontWeight: "800",
              color: "#0f172a",
              lineHeight: "1.1",
              marginBottom: "18px",
            }}
          >
            Reset
            <br />
            Password
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "38px",
              maxWidth: "420px",
            }}
          >
            Create a new strong password to protect your admin account and keep
            your access secure.
          </p>

          {/* Form */}
          <form onSubmit={handleResetPassword}>

            {/* New Password */}
            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontWeight: "700",
                  color: "#334155",
                }}
              >
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "62px",
                  padding: "0 18px",
                  borderRadius: "16px",
                  border: "1px solid #dbe2ea",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  background: "#fff",
                }}
              />
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontWeight: "700",
                  color: "#334155",
                }}
              >
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "62px",
                  padding: "0 18px",
                  borderRadius: "16px",
                  border: "1px solid #dbe2ea",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  background: "#fff",
                }}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                height: "60px",
                border: "none",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 12px 24px rgba(6,182,212,0.30)",
              }}
            >
              Reset Password
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            background:
              "linear-gradient(135deg, #06b6d4 0%, #0891b2 45%, #0f172a 100%)",
            color: "#fff",
            padding: "70px 55px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Overlay circles */}
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              top: "-60px",
              left: "-60px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              bottom: "30px",
              right: "-40px",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h1
              style={{
                fontSize: "52px",
                fontWeight: "800",
                marginBottom: "22px",
                lineHeight: "1.1",
              }}
            >
              Account
              <br />
              Protection
            </h1>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "2",
                color: "rgba(255,255,255,0.88)",
                maxWidth: "420px",
                marginBottom: "40px",
              }}
            >
              Set a strong password to maintain account security and ensure safe
              access to your admin dashboard.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {[
                "Advanced Security Protection",
                "Encrypted Authentication System",
                "Modern Responsive Interface",
                "Safe & Secure Password Access",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontSize: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#fff",
                    }}
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="max-width: 1050px"] {
              flex-direction: column;
            }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 38px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
