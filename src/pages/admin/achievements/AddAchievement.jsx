import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAchievements } from "../../../context/useAchievements";
import { toast } from "react-hot-toast";

export default function AddAchievement() {
  const navigate = useNavigate();
  const { addAchievement } = useAchievements();

  const [form, setForm] = useState({
    title: "",
    type: "Award",
    description: "",
    organization: "",
    image: null,
    featured: false,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    // IMAGE
    if (name === "image") {
      const file = files[0];

      if (file) {
        if (!file.type.startsWith("image/")) {
          toast.error("Only image files allowed");
          return;
        }

        if (file.size > 2 * 1024 * 1024) {
          toast.error("Image must be less than 2MB");
          return;
        }

        setPreview(URL.createObjectURL(file));
        setForm({ ...form, image: file });
      }
    }
    // CHECKBOX
    else if (type === "checkbox") {
      setForm({ ...form, featured: checked });
    }
    // INPUT
    else {
      setForm({ ...form, [name]: value });
    }
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
      badgeImage: form.image,
    };

    const success = await addAchievement(payload);
    if (!success) return;

    toast.success("Achievement added successfully");

    setTimeout(() => {
      navigate("/admin/achievements");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        padding: "clamp(10px, 2vw, 20px)",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        className="bg-[#c8d8e8]"
        style={{
          borderRadius: "clamp(14px, 2vw, 18px)",
          padding: "clamp(16px, 3vw, 24px)",
          minHeight: "calc(100vh - 40px)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <div className="mb-6">
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 30px)",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "6px",
            }}
          >
            Add Achievement
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "clamp(14px, 2vw, 16px)",
              margin: 0,
            }}
          >
            Manage achievements and details
          </p>
        </div>

        {/* FORM CARD */}
        <div
          className="bg-white shadow-md"
          style={{
            borderRadius: "clamp(16px, 2vw, 24px)",
            padding: "clamp(18px, 3vw, 32px)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* ROW 1 */}
          <div
            className="mb-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Achievement Title
              </label>

              <input
                name="title"
                placeholder="Enter title"
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                style={{
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Type
              </label>

              <select
                name="type"
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                style={{
                  boxSizing: "border-box",
                }}
              >
                <option>Select Type</option>
                <option>Award</option>
                <option>Recognition</option>
                <option>Milestone</option>
                <option>Honor</option>
                <option>Research</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter description"
              onChange={handleChange}
              className="w-full p-2.5 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              style={{
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
          </div>

          {/* ORGANIZATION */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Organization
            </label>

            <input
              name="organization"
              placeholder="Enter organization"
              onChange={handleChange}
              className="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              style={{
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* IMAGE */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Badge / Trophy Image (optional)
            </label>

            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="text-sm"
              style={{
                maxWidth: "100%",
              }}
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-3 object-cover border"
                style={{
                  width: "112px",
                  height: "112px",
                  borderRadius: "12px",
                  maxWidth: "100%",
                }}
              />
            )}
          </div>

          {/* FEATURED */}
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <input type="checkbox" name="featured" onChange={handleChange} />

            <span className="text-sm">Featured Achievement</span>
          </div>

          {/* BUTTON */}
          <div
            className="flex justify-end"
            style={{
              width: "100%",
            }}
          >
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium hover:opacity-90"
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                width: "fit-content",
                maxWidth: "100%",
                whiteSpace: "nowrap",
              }}
            >
              Save Achievement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
