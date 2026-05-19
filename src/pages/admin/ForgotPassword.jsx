import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import { forgotPasswordApi } from "../../services/api";

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await forgotPasswordApi({ email });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Something went wrong");
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
            onClick={() => navigate(`${LOGIN_URL}`)}
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
              background:
                "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "28px",
              boxShadow: "0 10px 25px rgba(6,182,212,0.35)",
            }}
          >
            <ShieldCheck size={42} color="#fff" />
          </div>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Reset your password
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
            Forgot
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
            Enter your registered email address and we’ll send you a secure
            password reset link instantly.
          </p>

          {!success ? (
            <form onSubmit={handleSubmit}>
              {/* Label */}
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  color: "#334155",
                  fontWeight: "700",
                }}
              >
                Email Address
              </label>

              {/* Input */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#fff",
                  border: "1px solid #dbe2ea",
                  borderRadius: "16px",
                  padding: "0 18px",
                  height: "62px",
                  marginBottom: "10px",
                }}
              >
                <Mail size={21} color="#64748b" />

                <input
                  type="email"
                  placeholder="admin@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    padding: "0 14px",
                    fontSize: "15px",
                    color: "#0f172a",
                  }}
                />
              </div>

              {error && (
                <p
                  style={{
                    color: "red",
                    marginBottom: "15px",
                    fontSize: "14px",
                  }}
                >
                  {error}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  height: "60px",
                  border: "none",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginTop: "12px",
                  boxShadow: "0 12px 24px rgba(6,182,212,0.30)",
                }}
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div
              style={{
                background: "#ecfeff",
                border: "1px solid #a5f3fc",
                padding: "24px",
                borderRadius: "18px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#0f766e",
                  marginBottom: "10px",
                }}
              >
                Reset Link Sent
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#155e75",
                  lineHeight: "1.7",
                }}
              >
                Password reset instructions have been sent to your email.
              </p>
            </div>
          )}
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
              Secure
              <br />
              Recovery
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
              Your account security matters. Recover access safely using our
              protected password reset system with encrypted verification.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {[
                "Secure Password Recovery",
                "Encrypted Verification Process",
                "Responsive Modern UI",
                "Fast & Safe Access Restoration",
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
            .hide-mobile {
              display: none;
            }
          }

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