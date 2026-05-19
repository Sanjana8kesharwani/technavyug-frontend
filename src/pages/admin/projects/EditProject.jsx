import { useState, useEffect } from "react";
import { useProjects } from "../../../provider/useProjects";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function EditProject() {
  const { projects, updateProject } = useProjects();
  const { id } = useParams();
  const navigate = useNavigate();

  const existing = projects.find((p) => (p._id || p.id)?.toString() === id);

  const [preview, setPreview] = useState(existing?.thumbnail || null);

  const [form, setForm] = useState({
    title: existing?.title || "",
    category: existing?.category || "",
    customCategory: "",
    shortDesc: existing?.shortDesc || existing?.shortDescription || "",
    fullDesc: existing?.fullDesc || existing?.fullDescription || "",
    status: existing?.status || "",
    featured: existing?.featured || false,
    thumbnail: existing?.thumbnail || null,
  });

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title || "",
        category: existing.category || "",
        customCategory: "",
        shortDesc: existing.shortDesc || existing.shortDescription || "",
        fullDesc: existing.fullDesc || existing.fullDescription || "",
        status: existing.status || "",
        featured: existing.featured || false,
        thumbnail: existing.thumbnail || null,
      });
      setPreview(existing.thumbnail || null);
    }
  }, [existing]);

  if (!existing) {
    return <div style={{ padding: "20px" }}>Project not found</div>;
  }

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "thumbnail") {
      const file = files[0];

      if (file) {
        if (!file.type.startsWith("image/")) {
          toast.error("Only image files allowed");
          return;
        }

        if (file.size > 2 * 1024 * 1024) {
          toast.error("Image must be under 2MB");
          return;
        }

        setPreview(file);
        setForm({ ...form, thumbnail: file });
      }
    } else {
      setForm({
        ...form,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      toast.error("Project title is required");
      return;
    }

    if (!form.category) {
      toast.error("Category is required");
      return;
    }

    if (form.category === "Custom" && !form.customCategory.trim()) {
      toast.error("Enter custom category");
      return;
    }

    if (!form.shortDesc.trim()) {
      toast.error("Short description is required");
      return;
    }

    if (form.shortDesc.length > 200) {
      toast.error("Max 200 characters allowed");
      return;
    }

    if (!form.fullDesc.trim()) {
      toast.error("Full description is required");
      return;
    }

    if (!form.status) {
      toast.error("Select project status");
      return;
    }

    const payload = {
      ...existing,
      ...form,
      category: form.category === "Custom" ? form.customCategory : form.category,
      shortDescription: form.shortDesc,
      fullDescription: form.fullDesc,
    };
    if (form.thumbnail instanceof File) {
      payload.thumbnailImage = form.thumbnail;
    }

    const success = await updateProject(id, payload);
    if (!success) return;

    toast.success("Project updated successfully");
    navigate("/admin/projects");
  };

  return (
    <div className="min-h-screen bg-white p-3 sm:p-5 overflow-x-hidden">
      <div className="bg-[#c8d8e8] rounded-2xl p-4 sm:p-6 min-h-[calc(100vh-40px)]">
        {/* HEADER */}
        <div style={{ marginBottom: "24px" }}>
          <h1
            style={{
              fontSize: "clamp(24px,4vw,30px)",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "6px",
            }}
          >
            Edit Project
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "clamp(14px,2vw,16px)",
            }}
          >
            Update project details
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 sm:p-6 rounded-2xl shadow-md space-y-5"
        >
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* TITLE */}
            <div>
              <label className="text-sm font-medium">Project Title</label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="text-sm font-medium">Category</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              >
                <option value="">Select Category</option>

                <option value="AI">AI</option>

                <option value="IoT">IoT</option>

                <option value="Research">Research</option>

                <option value="Embedded System">Embedded System</option>

                <option value="Web Development">Web Development</option>

                <option value="Custom">Custom</option>
              </select>

              {form.category === "Custom" && (
                <input
                  type="text"
                  name="customCategory"
                  placeholder="Enter custom category"
                  value={form.customCategory}
                  onChange={handleChange}
                  className="w-full mt-3 p-2 border rounded-lg"
                />
              )}
            </div>
          </div>

          {/* SHORT DESC */}
          <div>
            <label className="text-sm font-medium">Short Description</label>

            <textarea
              name="shortDesc"
              value={form.shortDesc}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>

          {/* FULL DESC */}
          <div>
            <label className="text-sm font-medium">Full Description</label>

            <textarea
              name="fullDesc"
              value={form.fullDesc}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg h-24"
            />
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* STATUS */}
            <div>
              <label className="text-sm font-medium">Status</label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              >
                <option value="">Select Status</option>

                <option>Ongoing</option>

                <option>Completed</option>

                <option>Planned</option>
              </select>
            </div>

            {/* THUMBNAIL */}
            <div>
              <label className="text-sm font-medium">Thumbnail Image</label>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                {/* Upload Box */}
                <label className="w-32 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-indigo-500 transition">
                  <span className="text-xs text-gray-500 text-center">
                    Upload Image
                  </span>

                  <input
                    type="file"
                    name="thumbnail"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                {/* Preview */}
                {preview && (
                  <img
                    src={
                      preview instanceof File
                        ? URL.createObjectURL(preview)
                        : typeof preview === "string"
                          ? preview
                          : ""
                    }
                    alt="preview"
                    className="w-32 max-w-full h-24 object-cover rounded-lg border"
                  />
                )}
              </div>
            </div>
          </div>

          {/* FEATURED */}
          <div className="flex items-center gap-2 flex-wrap">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />

            <label>Featured Project</label>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="text-white font-semibold"
              style={{
                background: "#4f46e5",
                padding: "12px 18px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                maxWidth: "100%",
              }}
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
