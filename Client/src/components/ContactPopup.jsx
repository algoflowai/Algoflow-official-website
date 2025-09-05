import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const ContactPopup = ({ onClose }) => {
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
          icon: "✅",
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

      <div className="fixed inset-0 mt-20 bg-black bg-opacity-50 flex justify-center items-center z-50 font-Inter p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full text-center border border-gray-300 relative max-h-[90vh] overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-3 text-black">Get In Touch</h2>
          <p className="mb-6 text-gray-600">
            Send us a message and we will respond as soon as possible
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Mobile Field */}
            <input
              type="tel"
              name="mobile"
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mobile number *"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              required
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email *"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Query Field */}
            <textarea
              name="query"
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
              placeholder="Your query *"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
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
