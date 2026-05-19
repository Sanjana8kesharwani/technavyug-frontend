import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useCertificates from "../../../context/useCertificates";

const EditCertificate = () => {
  const navigate = useNavigate();

  const { certificates, updateCertificate } = useCertificates();

  const { id } = useParams();

  const existing = certificates.find((c) => c.id.toString() === id);

  const [formData, setFormData] = useState({
    title: existing?.title || "",

    organization: existing?.organization || "",

    category: existing?.category || "",

    issueDate: existing?.issueDate || "",

    verificationUrl: existing?.verificationUrl || "",

    certificateId: existing?.certificateId || "",

    verified: existing?.verified || false,
  });

  const [preview, setPreview] = useState(existing?.image || null);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        image: "Only JPG, PNG and PDF files are allowed",
      }));

      toast.error("Invalid file type");

      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: "File size must be less than 10MB",
      }));

      toast.error("File too large");

      return;
    }

    setErrors((prev) => ({
      ...prev,
      image: "",
    }));

    setPreview(URL.createObjectURL(file));

    toast.success("Certificate uploaded successfully");
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Certificate title is required";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Issuing organization is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.issueDate) {
      newErrors.issueDate = "Issue date is required";
    }

    if (!formData.certificateId.trim()) {
      newErrors.certificateId = "Certificate ID is required";
    }

    if (!formData.verificationUrl.trim()) {
      newErrors.verificationUrl = "Verification URL is required";
    }

    if (!preview) {
      newErrors.image = "Certificate image or PDF is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      toast.error("Please fill all required fields");

      return;
    }

    updateCertificate({
      ...existing,
      ...formData,
      image: preview,
    });

    toast.success("Certificate updated successfully");

    setTimeout(() => {
      navigate("/admin/certificates");
    }, 1000);
  };

  return (
    <div
      style={{
        background: "#c8d8e8",
        borderRadius: "clamp(18px, 3vw, 28px)",
        padding: "clamp(14px, 3vw, 20px)",
        margin: "clamp(10px, 2vw, 14px)",
        minHeight: "100vh",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 30px)",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "6px",
          }}
        >
          Edit Certificate
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "clamp(14px, 2vw, 16px)",
          }}
        >
          Update certificate details
        </p>
      </div>

      {/* White Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "clamp(18px, 3vw, 24px)",
          padding: "clamp(18px, 4vw, 30px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* First Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "24px",
            }}
          >
            {/* Title */}
            <div>
              <label style={labelStyle}>Certificate Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={inputStyle}
              />

              {errors.title && <p style={errorStyle}>{errors.title}</p>}
            </div>

            {/* Category */}
            <div>
              <label style={labelStyle}>Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={inputStyle}
              >
                <option>Cloud</option>

                <option>Cybersecurity</option>

                <option>Design</option>

                <option>Development</option>
              </select>

              {errors.category && <p style={errorStyle}>{errors.category}</p>}
            </div>
          </div>

          {/* Organization */}
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <label style={labelStyle}>Issuing Organization</label>

            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              style={inputStyle}
            />

            {errors.organization && (
              <p style={errorStyle}>{errors.organization}</p>
            )}
          </div>

          {/* Second Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "24px",
            }}
          >
            {/* Issue Date */}
            <div>
              <label style={labelStyle}>Issue Date</label>

              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                style={inputStyle}
              />

              {errors.issueDate && <p style={errorStyle}>{errors.issueDate}</p>}
            </div>

            {/* Certificate ID */}
            <div>
              <label style={labelStyle}>Certificate ID</label>

              <input
                type="text"
                name="certificateId"
                value={formData.certificateId}
                onChange={handleChange}
                style={inputStyle}
              />

              {errors.certificateId && (
                <p style={errorStyle}>{errors.certificateId}</p>
              )}
            </div>
          </div>

          {/* Verification URL */}
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <label style={labelStyle}>Verification URL</label>

            <input
              type="text"
              name="verificationUrl"
              value={formData.verificationUrl}
              onChange={handleChange}
              style={inputStyle}
            />

            {errors.verificationUrl && (
              <p style={errorStyle}>{errors.verificationUrl}</p>
            )}
          </div>

          {/* Upload */}
          <div
            style={{
              marginBottom: "24px",
            }}
          >
            <label style={labelStyle}>Certificate Image / PDF</label>

            <div
              style={{
                border: "2px dashed #cbd5e1",
                borderRadius: "16px",
                padding: "clamp(16px, 3vw, 24px)",
                background: "#f8fafc",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleImage}
                style={{
                  maxWidth: "100%",
                }}
              />

              <p
                style={{
                  marginTop: "10px",
                  color: "#64748b",
                  fontSize: "14px",
                  wordBreak: "break-word",
                }}
              >
                Allowed formats: JPG, PNG, PDF
              </p>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "13px",
                  marginTop: "4px",
                  wordBreak: "break-word",
                }}
              >
                Maximum upload size: 10MB
              </p>

              {errors.image && <p style={errorStyle}>{errors.image}</p>}
            </div>

            {/* Preview */}
            {preview && !preview.includes(".pdf") && (
              <img
                src={preview}
                alt="preview"
                style={{
                  width: "100%",
                  maxWidth: "240px",
                  height: "auto",
                  aspectRatio: "3 / 2",
                  objectFit: "cover",
                  marginTop: "18px",
                  borderRadius: "14px",
                  border: "1px solid #ddd",
                }}
              />
            )}
          </div>

          {/* Verified */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "35px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="checkbox"
              checked={formData.verified}
              onChange={() =>
                setFormData({
                  ...formData,
                  verified: !formData.verified,
                })
              }
            />

            <label
              style={{
                fontWeight: "500",
              }}
            >
              Verified Certificate
            </label>
          </div>

          {/* Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              type="submit"
              style={{
                background: "#4f46e5",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "15px",
                maxWidth: "100%",
                whiteSpace: "nowrap",
              }}
            >
              Update Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: "10px",
  fontWeight: "600",
  color: "#1e293b",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #dbe2ea",
  outline: "none",
  fontSize: "15px",
  background: "#fff",
  boxSizing: "border-box",
};

const errorStyle = {
  color: "#dc2626",
  fontSize: "14px",
  marginTop: "6px",
  fontWeight: "500",
};

export default EditCertificate;
