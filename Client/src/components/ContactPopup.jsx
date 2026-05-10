import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ContactPopup = ({ onClose }) => {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS configuration
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Prepare email data
    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      mobile_number: formData.mobile,
      to_name: "Algo Flow AI",
      message: formData.query,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, emailData, publicKey)
      .then(() => {
        toast.success("We got your query and will reach out to you soon!", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#10B981",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "16px",
            fontSize: "16px",
            marginTop: "70px",
          },
          icon: undefined,
        });

        // Reset form
        setFormData({
          name: "",
          mobile: "",
          email: "",
          query: "",
        });
        setLoading(false);

        // Auto close after showing toast
        setTimeout(() => {
          onClose();
        }, 2000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again later.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#EF4444",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: "16px",
            fontSize: "16px",
            marginTop: "70px",
          },
          icon: "❌",
        });
        setLoading(false);
      });
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{
          zIndex: 99999,
        }}
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

      <div className="fixed inset-0 mt-20 flex justify-center items-center z-50 font-Inter p-4"
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
        <div className="rounded-2xl shadow-2xl p-6 max-w-lg w-full text-center relative max-h-[90vh] overflow-y-auto"
          style={{
            background: dark ? "rgba(6,13,27,0.98)" : "#ffffff",
            border: dark ? "1px solid rgba(34,197,94,0.2)" : "1px solid #e5e7eb",
            boxShadow: dark ? "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,197,94,0.1)" : "0 24px 80px rgba(0,0,0,0.15)",
          }}>
          <button
            className="absolute top-4 right-4 text-2xl font-bold transition-colors"
            style={{ color: dark ? "#64748b" : "#6b7280" }}
            onMouseEnter={e => e.currentTarget.style.color = dark ? "#94a3b8" : "#111827"}
            onMouseLeave={e => e.currentTarget.style.color = dark ? "#64748b" : "#6b7280"}
            onClick={onClose}
          >
            &times;
          </button>

          <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 0 20px rgba(34,197,94,0.3)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-2" style={{ color: dark ? "#f1f5f9" : "#0f172a" }}>Get In Touch</h2>
          <p className="mb-6 text-sm" style={{ color: dark ? "#64748b" : "#6b7280" }}>
            Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded-xl text-sm outline-none transition-all"
              style={{
                background: dark ? "rgba(255,255,255,0.05)" : "#f9fafb",
                border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb",
                color: dark ? "#f1f5f9" : "#0f172a",
              }}
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              required
              onFocus={e => e.target.style.border = "1px solid rgba(34,197,94,0.6)"}
              onBlur={e => e.target.style.border = dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb"}
            />

            <input
              type="tel"
              name="mobile"
              className="w-full p-3 rounded-xl text-sm outline-none transition-all"
              style={{
                background: dark ? "rgba(255,255,255,0.05)" : "#f9fafb",
                border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb",
                color: dark ? "#f1f5f9" : "#0f172a",
              }}
              placeholder="Mobile number *"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              required
              onFocus={e => e.target.style.border = "1px solid rgba(34,197,94,0.6)"}
              onBlur={e => e.target.style.border = dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb"}
            />

            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-xl text-sm outline-none transition-all"
              style={{
                background: dark ? "rgba(255,255,255,0.05)" : "#f9fafb",
                border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb",
                color: dark ? "#f1f5f9" : "#0f172a",
              }}
              placeholder="Your email *"
              value={formData.email}
              onChange={handleChange}
              required
              onFocus={e => e.target.style.border = "1px solid rgba(34,197,94,0.6)"}
              onBlur={e => e.target.style.border = dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb"}
            />

            <textarea
              name="query"
              className="w-full p-3 rounded-xl text-sm outline-none transition-all resize-none"
              style={{
                background: dark ? "rgba(255,255,255,0.05)" : "#f9fafb",
                border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb",
                color: dark ? "#f1f5f9" : "#0f172a",
              }}
              rows="4"
              placeholder="Your query *"
              value={formData.query}
              onChange={handleChange}
              required
              onFocus={e => e.target.style.border = "1px solid rgba(34,197,94,0.6)"}
              onBlur={e => e.target.style.border = dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb"}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                boxShadow: "0 0 20px rgba(34,197,94,0.25)",
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
