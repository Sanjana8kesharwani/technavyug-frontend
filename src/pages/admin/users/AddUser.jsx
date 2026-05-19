import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useUsers } from "../../../context/useUsers";

export default function AddUser() {
  const navigate = useNavigate();
  const { addUser } = useUsers();

  const [form, setForm] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    linkedin: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];

      if (file) {
        if (!["image/jpeg", "image/png"].includes(file.type)) {
          setErrors((prev) => ({
            ...prev,
            photo: "Only JPG or PNG allowed",
          }));
          return;
        }

        if (file.size > 2 * 1024 * 1024) {
          setErrors((prev) => ({
            ...prev,
            photo: "Max size 2MB",
          }));
          return;
        }

        setPreview(URL.createObjectURL(file));
        setForm({ ...form, photo: file });
        setErrors((prev) => ({ ...prev, photo: "" }));
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.designation.trim())
      newErrors.designation = "Designation required";

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";

    if (form.phone && form.phone.length < 10) newErrors.phone = "Invalid phone";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleAddUser = async () => {
    if (!validate()) return;

    const success = await addUser({
      ...form,
      id: Date.now(),
    });

    if (!success) return;

    toast.success("User added successfully 🎉");

    setForm({
      name: "",
      designation: "",
      email: "",
      phone: "",
      linkedin: "",
      photo: null,
    });

    setPreview(null);
    setErrors({});

    setTimeout(() => {
      navigate("/admin/users");
    }, 1500);
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
      {/* BLUE CONTAINER */}
      <div
        style={{
          background: "#c8d8e8",
          borderRadius: "clamp(18px, 3vw, 28px)",
          minHeight: "calc(100vh - 40px)",
          padding: "clamp(14px, 3vw, 20px)",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "25px" }}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "6px",
            }}
          >
            Add Users
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            Manage users and their information
          </p>
        </div>

        {/* WHITE CARD */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "40px 50px",
            width: "100%",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            marginTop: "40px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  border: "2px dashed #ccc",
                }}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  "Upload"
                )}
              </div>

              <input
                type="file"
                name="photo"
                onChange={handleChange}
                style={{
                  marginTop: "10px",
                  maxWidth: "100%",
                }}
              />

              {/* PHOTO ERROR */}
              {errors.photo && (
                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                  }}
                >
                  {errors.photo}
                </span>
              )}
            </div>

            {/* FORM */}
            <div
              style={{
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "15px",
                }}
              >
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  error={errors.name}
                />

                <Input
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  error={errors.designation}
                />

                <Input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  error={errors.email}
                />

                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  error={errors.phone}
                />

                <Input
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn URL"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={handleAddUser}
                  style={{
                    marginTop: "20px",
                    background: "#4f46e5",
                    color: "#fff",
                    padding: "12px 18px",
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Save User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Input = ({ name, value, onChange, placeholder, error }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%",
    }}
  >
    <label
      style={{
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      {placeholder}
    </label>

    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${placeholder}`}
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: error ? "1px solid red" : "1px solid #ddd",
        width: "100%",
        boxSizing: "border-box",
      }}
    />

    {error && (
      <span
        style={{
          color: "red",
          fontSize: "12px",
        }}
      >
        {error}
      </span>
    )}
  </div>
);
