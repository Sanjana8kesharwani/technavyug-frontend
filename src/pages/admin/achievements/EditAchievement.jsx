import { useParams, useNavigate } from "react-router-dom";
import { useAchievements } from "../../../context/useAchievements";
import { useState, useMemo, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function EditAchievement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { achievements, updateAchievement } = useAchievements();

  const existing = useMemo(
    () => achievements.find((a) => (a._id || a.id)?.toString() === id),
    [achievements, id],
  );

  const [form, setForm] = useState({
    title: existing?.title || "",
    type: existing?.type || "",
    description: existing?.description || "",
    organization: existing?.organization || existing?.issuingAuthority || "",
    featured: !!existing?.featured,
  });

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title || "",
        type: existing.type || "",
        description: existing.description || "",
        organization: existing.organization || existing.issuingAuthority || "",
        featured: !!existing.featured,
      });
    }
  }, [existing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!form.type) {
      toast.error("Please select achievement type");
      return;
    }

    if (!form.organization.trim()) {
      toast.error("Organization is required");
      return;
    }

    if (form.description.trim().length < 10) {
      toast.error("Description must be at least 10 characters");
      return;
    }

    const payload = {
      ...form,
      issuingAuthority: form.organization,
    };

    const success = await updateAchievement(id.toString(), payload);
    if (!success) return;

    toast.success("Achievement updated successfully");

    navigate("/admin/achievements");
  };

  if (!existing) return <div style={{ padding: "20px" }}>Loading...</div>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "clamp(10px, 2vw, 24px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* MAIN WRAPPER */}
      <div
        style={{
          background: "#c8d8e8",
          borderRadius: "clamp(14px, 2vw, 20px)",
          padding: "clamp(16px, 3vw, 28px)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "24px" }}>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 30px)",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "6px",
            }}
          >
            Edit Achievement
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "clamp(14px, 2vw, 16px)",
              margin: 0,
            }}
          >
            Update achievement details
          </p>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "clamp(16px, 3vw, 24px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* ROW 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <label style={labelStyle}>Achievement Title</label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Type</label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select Type</option>

                <option>Award</option>

                <option>Recognition</option>

                <option>Milestone</option>

                <option>Honor</option>

                <option>Research</option>
              </select>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Description</label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              style={{
                ...inputStyle,
                height: "100px",
                resize: "vertical",
              }}
            />
          </div>

          {/* ORGANIZATION */}
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Organization</label>

            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* FEATURED */}
          <div
            style={{
              marginBottom: "24px",
              width: "100%",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
              />
              Featured Achievement
            </label>
          </div>

          {/* BUTTON RIGHT */}
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
                padding: "12px 18px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                maxWidth: "100%",
                whiteSpace: "nowrap",
              }}
            >
              Update Achievement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const labelStyle = {
  fontSize: "14px",
  fontWeight: "500",
  display: "block",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none",
  boxSizing: "border-box",
};
