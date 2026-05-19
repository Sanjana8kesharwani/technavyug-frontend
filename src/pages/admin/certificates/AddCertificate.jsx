import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useCertificates from "../../../context/useCertificates";

const AddCertificate = () => {
  const navigate = useNavigate();

  const { addCertificate } = useCertificates();

  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    category: "",
    issueDate: "",
    verificationUrl: "",
    certificateId: "",
    verified: true,
  });

  const [preview, setPreview] = useState(null);

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

    toast.success("Certificate image uploaded");
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Certificate title is required";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Issuing organization is required";
    }

    if (!formData.category || formData.category === "Select Category") {
      newErrors.category = "Please select a category";
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

    addCertificate({
      id: Date.now(),
      ...formData,
      image: preview,
    });

    toast.success("Certificate added successfully");

    setTimeout(() => {
      navigate("/admin/certificates");
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "clamp(10px, 2vw, 20px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Blue Main Container */}
      <div
        style={{
          background: "#c8d8e8",
          borderRadius: "clamp(18px, 3vw, 28px)",
          minHeight: "calc(100vh - 40px)",
          padding: "clamp(14px, 3vw, 20px)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            marginBottom: "25px",
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
            Add Certificate
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "clamp(14px, 2vw, 16px)",
            }}
          >
            Manage certificates and details
          </p>
        </div>

        {/* White Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "clamp(18px, 3vw, 24px)",
            padding: "clamp(18px, 4vw, 30px)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
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
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  Certificate Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter certificate title"
                  value={formData.title}
                  onChange={handleChange}
                  style={inputStyle}
                />

                {errors.title && <p style={errorStyle}>{errors.title}</p>}
              </div>

              {/* Category */}
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option>Select Category</option>

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
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Issuing Organization
              </label>

              <input
                type="text"
                name="organization"
                placeholder="Amazon, Google, IBM..."
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
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  Issue Date
                </label>

                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                  style={inputStyle}
                />

                {errors.issueDate && (
                  <p style={errorStyle}>{errors.issueDate}</p>
                )}
              </div>

              {/* Certificate ID */}
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "600",
                  }}
                >
                  Certificate ID
                </label>

                <input
                  type="text"
                  name="certificateId"
                  placeholder="CERT-2026-001"
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
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Verification URL
              </label>

              <input
                type="text"
                name="verificationUrl"
                placeholder="https://verify.com/certificate"
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
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Certificate Image
              </label>

              <div
                style={{
                  border: "2px dashed #cbd5e1",
                  borderRadius: "16px",
                  padding: "clamp(16px, 3vw, 25px)",
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
                  Upload JPG, PNG or PDF
                </p>

                <p
                  style={{
                    marginTop: "5px",
                    color: "#64748b",
                    fontSize: "13px",
                    wordBreak: "break-word",
                  }}
                >
                  Maximum upload size: 10MB
                </p>

                {errors.image && <p style={errorStyle}>{errors.image}</p>}
              </div>

              {preview && (
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

            {/* Checkbox */}
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
                Save Certificate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
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

export default AddCertificate;
