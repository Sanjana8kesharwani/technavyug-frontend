import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Eye, Trash2, Download, Copy } from "lucide-react";

import useCertificates from "../../../context/useCertificates";

const Certificates = () => {
  const { certificates, loading, deleteCertificate } = useCertificates();

  const [openMenuId, setOpenMenuId] = useState(null);

  const [statusFilter, setStatusFilter] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");

  const [organizationFilter, setOrganizationFilter] = useState("");

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".action-menu")) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleDelete = (id, title) => {
    const confirmDelete = window.confirm(`Delete "${title}" certificate?`);

    if (confirmDelete) {
      deleteCertificate(id);

      toast.success("Certificate deleted successfully");
    }
  };

  const handleCopyUrl = async (url) => {
    if (!url) {
      toast.error("No verification URL available");
      return;
    }
    try {
      await navigator.clipboard.writeText(url);

      toast.success("Verification URL copied");
    } catch {
      toast.error("Failed to copy URL");
    }
  };

  const handleDownload = async (file) => {
    if (!file) {
      toast.error("No certificate file available to download");
      return;
    }
    try {
      const response = await fetch(file);

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = "certificate.jpg";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      toast.success("Download started");
    } catch {
      toast.open("Download failed, opening file in new tab instead");
      window.open(file, "_blank");
    }
  };

  const filteredCertificates = (certificates || []).filter((certificate) => {
    const matchStatus =
      statusFilter === ""
        ? true
        : statusFilter === "Verified"
          ? !!certificate?.verified
          : !certificate?.verified;

    const matchCategory =
      categoryFilter === "" ? true : certificate?.category === categoryFilter;

    const matchOrganization =
      organizationFilter === ""
        ? true
        : (certificate?.organization || certificate?.issuingOrganization) === organizationFilter;

    return matchStatus && matchCategory && matchOrganization;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "14px",
      }}
    >
      {/* Blue Container */}
      <div
        style={{
          background: "#c8d8e8",
          borderRadius: "28px",
          minHeight: "calc(100vh - 28px)",
          padding: "20px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "22px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "4px",
              }}
            >
              Certificates
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
              }}
            >
              Manage all certificates
            </p>
          </div>

          <Link
            to="/admin/add-certificate"
            style={{
              background: "#4f46e5",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: "600",
            }}
          >
            + Add Certificate
          </Link>
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "18px",
            overflowX: "auto",
            paddingBottom: "4px",
          }}
        >
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={filterStyle}
          >
            <option value="">All Status</option>

            <option value="Verified">Verified</option>

            <option value="Invalid">Invalid</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={filterStyle}
          >
            <option value="">All Categories</option>

            <option value="Cloud">Cloud</option>

            <option value="Design">Design</option>

            <option value="Cybersecurity">Cybersecurity</option>
          </select>

          <select
            value={organizationFilter}
            onChange={(e) => setOrganizationFilter(e.target.value)}
            style={filterStyle}
          >
            <option value="">All Organizations</option>

            <option value="Amazon">Amazon</option>

            <option value="Google">Google</option>

            <option value="IBM">IBM</option>
          </select>
        </div>

        {/* Table */}
        <div
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "14px",
            overflowX: "auto",
            width: "100%",
            position: "relative",
          }}
        >
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <div style={{ display: "inline-block", width: "28px", height: "28px", border: "3px solid #ccc", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
              <p style={{ marginTop: "12px", color: "#64748b" }}>Loading certificates...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : filteredCertificates.length === 0 ? (
            <div style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
              No certificates found
            </div>
          ) : (
            <table
              style={{
                width: "100%",
                minWidth: "850px",
                borderCollapse: "collapse",     
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#e2e8f0",
                  }}
                >
                  <th style={thStyle}>Title</th>

                  <th style={thStyle}>Category</th>

                  <th style={thStyle}>Organization</th>

                  <th style={thStyle}>Issue Date</th>

                  <th style={thStyle}>Status</th>

                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredCertificates.map((certificate, idx) => (
                  <tr
                    key={certificate._id || certificate.id || idx}
                    style={{
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <td style={tdStyle}>{certificate?.certificateTitle || certificate?.title || "—"}</td>

                    <td style={tdStyle}>{certificate?.category || "—"}</td>

                    <td style={tdStyle}>{certificate?.issuingOrganization || certificate?.organization || "—"}</td>

                    <td style={tdStyle}>
                      {certificate?.issueDate ? new Date(certificate.issueDate).toLocaleDateString() : "—"}
                    </td>

                    <td style={tdStyle}>
                      {certificate?.verified ? (
                        <span
                          style={{
                            background: "#dcfce7",
                            color: "#15803d",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          Verified
                        </span>
                      ) : (
                        <span
                          style={{
                            background: "#fee2e2",
                            color: "#dc2626",
                            padding: "6px 14px",
                            borderRadius: "999px",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          Invalid
                        </span>
                      )}
                    </td>

                    <td style={tdStyle}>
                      <div
                        className="action-menu"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          position: "relative",
                        }}
                      >
                        <Link
                          to={`/admin/edit-certificate/${certificate._id || certificate.id}`}
                          style={{
                            background: "#4f46e5",
                            color: "#fff",
                            textDecoration: "none",
                            padding: "10px 16px",
                            borderRadius: "10px",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() =>
                            setOpenMenuId(
                              openMenuId === (certificate._id || certificate.id)
                                ? null
                                : (certificate._id || certificate.id),
                            )
                          }
                          style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            fontSize: "22px",
                            fontWeight: "700",
                          }}
                        >
                          ⋮
                        </button>

                        {openMenuId === (certificate._id || certificate.id) && (
                          <div
                            style={{
                              position: "absolute",
                              top: "48px",
                              right: "0",
                              background: "#fff",
                              borderRadius: "14px",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                              width: "220px",
                              zIndex: 50,
                              overflow: "hidden",
                            }}
                          >
                            <button
                              onClick={() => {
                                const fileUrl = certificate?.certificateFile || certificate?.image;
                                if (fileUrl) window.open(fileUrl, "_blank");
                                else toast.error("No certificate image file");
                              }}
                              style={menuButtonStyle}
                            >
                              <Eye size={17} />
                              View Certificate
                            </button>

                            <button
                              onClick={() => handleDownload(certificate?.certificateFile || certificate?.image)}
                              style={menuButtonStyle}
                            >
                              <Download size={17} />
                              Download
                            </button>

                            <button
                              onClick={() =>
                                handleCopyUrl(certificate?.verificationUrl)
                              }
                              style={menuButtonStyle}
                            >
                              <Copy size={17} />
                              Copy URL
                            </button>

                            <button
                              onClick={() =>
                                handleDelete(certificate._id || certificate.id, certificate?.certificateTitle || certificate?.title)
                              }
                              style={{
                                ...menuButtonStyle,
                                color: "#dc2626",
                              }}
                            >
                              <Trash2 size={17} />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </div>
    </div>
  );
};

const filterStyle = {
  padding: "12px 18px",
  borderRadius: "12px",
  border: "1px solid #dbe2ea",
  outline: "none",
  fontSize: "14px",
  background: "#fff",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "18px 16px",
  fontSize: "15px",
  color: "#0f172a",
};

const menuButtonStyle = {
  width: "100%",
  border: "none",
  background: "#fff",
  padding: "13px 16px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  fontSize: "14px",
};

export default Certificates;
