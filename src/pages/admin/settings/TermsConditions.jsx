import React from "react";

const TermsConditions = () => {
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
          Terms & Conditions
        </h1>

        <p
          style={{
            marginTop: "8px",
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#64748b",
            fontWeight: "500",
          }}
        >
          Manage your platform terms and policies
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
              Welcome to <strong>Technavyug</strong>. By using our platform, you
              agree to comply with these terms and conditions.
            </p>
          </div>

          {/* USE */}
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
              2. Use of Platform
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
              <li>You must provide accurate information</li>
              <li>You agree not to misuse our services</li>
              <li>You are responsible for your account security</li>
            </ul>
          </div>

          {/* SERVICES */}
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
              3. Services
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              We provide certificate verification, project showcasing, and
              related services. We may modify or discontinue services anytime.
            </p>
          </div>

          {/* PAYMENTS */}
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
              4. Payments & Subscriptions
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              Some services may be paid. All payments are non-refundable unless
              stated otherwise.
            </p>
          </div>

          {/* LIMITATION */}
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
              5. Limitation of Liability
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              We are not responsible for any direct or indirect damages arising
              from the use of our platform.
            </p>
          </div>

          {/* TERMINATION */}
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
              6. Termination
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              We reserve the right to suspend or terminate accounts that violate
              our policies.
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
              7. Changes to Terms
            </h2>

            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: "30px",
              }}
            >
              These terms may be updated at any time. Continued use of the
              platform means you accept the changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
