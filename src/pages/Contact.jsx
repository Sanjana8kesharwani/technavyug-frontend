import { useState } from "react";
import { LuMail, LuPhone, LuMapPin, LuSend } from "react-icons/lu";
import MainLayout from "../layouts/MainLayout";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: LuMail,
      title: "Email Us",
      detail: "support@technavyug.com",
      desc: "We respond within 24 hours",
    },
    {
      icon: LuPhone,
      title: "Call Us",
      detail: "+91 9876543210",
      desc: "Monday to Friday, 9 AM - 6 PM",
    },
    {
      icon: LuMapPin,
      title: "Visit Us",
      detail: "India",
      desc: "Serving students worldwide",
    },
  ];

  return (
    <MainLayout>
      {/* HEADER */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50/30 text-center">
        <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-4">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500">Have questions? We are here to help.</p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl text-center hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-black rounded-lg flex items-center justify-center">
                <item.icon className="text-white" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-cyan-600">{item.detail}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-2">
            Send Us a Message
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Fill out the form below and we will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                required
                placeholder="How can we help?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us more about your query..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button className="w-full bg-gray-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-700 transition">
              <LuSend />
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ MAP SECTION ADDED (nothing else changed) */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Ghazipur Location"
              src="https://www.google.com/maps?q=Ghazipur,Uttar+Pradesh+233001&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
