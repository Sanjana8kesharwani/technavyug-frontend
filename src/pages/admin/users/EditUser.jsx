import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "../../../context/useUsers";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUser } = useUsers();

  const user = users.find((u) => String(u._id) === String(id) || String(u.id) === String(id));

  const [form, setForm] = useState({
    name: user?.name || "",
    designation: user?.designation || "",
    email: user?.email || "",
    phone: user?.phone || "",
    linkedin: user?.linkedin || "",
    photo: user?.photo || null,
  });

  const [preview, setPreview] = useState(user?.photo || null);
  const [errors, setErrors] = useState({});

  console.log("URL id:", id);
  console.log("Users:", users);

  if (!user) {
    return (
      <div
        style={{
          padding: "40px",
          fontSize: "20px",
        }}
      >
        Loading user...
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];

      if (file) {
        setPreview(URL.createObjectURL(file));
      }

      setForm({ ...form, photo: file });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!form.designation.trim())
      newErrors.designation = "Designation required";

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";

    if (form.phone && form.phone.length < 10) newErrors.phone = "Invalid phone";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async () => {
    if (!validate()) return;

    const success = await updateUser(user._id || user.id, form);
    if (!success) return;

    toast.success("User updated successfully 🎉");

    navigate("/admin/users");
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
            Edit User
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Update user information
          </p>
        </div>

        {/* WHITE CARD */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* IMAGE */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "140px",
                  height: "140px",
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
            </div>

            {/* FORM */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "15px",
                }}
              >
                {/* NAME */}
                <Input
                  name="name"
                  value={form.name}
                  placeholder="Full Name"
                  readOnly
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

              <div style={{ textAlign: "right" }}>
                <button
                  onClick={handleUpdate}
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
                    maxWidth: "100%",
                  }}
                >
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Input component */
const Input = ({ name, value, onChange, placeholder, error, disabled,readOnly }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "6px",
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
      disabled={disabled}
      readOnly={readOnly}
      placeholder={`Enter ${placeholder}`}
      style={{
        padding: "12px",
        borderRadius: "10px",
        border: error ? "1px solid red" : "1px solid #ddd",
        background: disabled || readOnly ? "#f1f5f9" : "#fff",
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
