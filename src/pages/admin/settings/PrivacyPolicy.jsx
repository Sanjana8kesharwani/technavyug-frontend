import React from "react";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>

        <p
          style={{
            marginTop: "8px",
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#64748b",
            fontWeight: "500",
          }}
        >
          Manage your privacy and data protection policies
        </p>
      </div>

      {/* White Container */}
      <div
        style={{
          background: "#f8fafc",
          borderRadius: "clamp(18px, 3vw, 28px)",
          padding: "clamp(18px, 3vw, 32px)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Last Updated */}
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "clamp(13px, 1.8vw, 16px)",
              fontWeight: "500",
            }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {/* INTRO */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              1. Introduction
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              At <strong>Technavyug</strong>, we value your privacy. This policy
              explains how we collect, use, and protect your information when
              you use our platform.
            </p>
          </div>

          {/* DATA COLLECTION */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              2. Information We Collect
            </h2>

            <ul
              style={{
                margin: 0,
                paddingLeft: "22px",
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "32px",
              }}
            >
              <li>Name, email, and contact details</li>
              <li>Account login information</li>
              <li>Usage and activity data</li>
              <li>Device and browser information</li>
            </ul>
          </div>

          {/* USAGE */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              3. How We Use Your Information
            </h2>

            <ul
              style={{
                margin: 0,
                paddingLeft: "22px",
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "32px",
              }}
            >
              <li>To provide and improve services</li>
              <li>To verify certificates</li>
              <li>To communicate updates</li>
              <li>To enhance user experience</li>
            </ul>
          </div>

          {/* SHARING */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              4. Data Sharing
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              We do not sell your personal data. Information may only be shared
              with trusted partners or when required by law.
            </p>
          </div>

          {/* SECURITY */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              5. Data Security
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              We use secure technologies and best practices to protect your data
              from unauthorized access or misuse.
            </p>
          </div>

          {/* RIGHTS */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              6. Your Rights
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              You can request to access, update, or delete your personal data at
              any time.
            </p>
          </div>

          {/* COOKIES */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              7. Cookies
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              We use cookies to improve performance and analyze user behavior.
            </p>
          </div>

          {/* CHANGES */}
          <div>
            <h2
              style={{
                margin: 0,
                marginBottom: "10px",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: "700",
                color: "#06b6d4",
              }}
            >
              8. Policy Updates
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              This policy may be updated periodically. Please check this page
              regularly for changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
