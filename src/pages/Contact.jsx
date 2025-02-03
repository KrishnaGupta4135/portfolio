import React, { useRef, useEffect, useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import Toast from "typescript-toastify";

export const Contact = () => {
  const formRef = useRef(null);
  const socialRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (socialRef.current) observer.observe(socialRef.current);

    return () => observer.disconnect();
  }, []);

  const showToast = (message, type = "default") => {
    new Toast({
      position: "bottom-right",
      toastMsg: message,
      autoCloseTime: 3000,
      canClose: true,
      showProgress: true,
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      type: type,
      theme: "dark",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        showToast("Message sent successfully! 🎉", "default");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      showToast("Failed to send message. Please try again. 😕", "default");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10 mb-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 1s, transform 1s",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-gray-800/50 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg transition-colors ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div
        ref={socialRef}
        className="space-y-3"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 1s, transform 1s",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://github.com/KrishnaGupta4135"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <Github className="w-8 h-8 mb-2" />
            <h3 className="font-medium">GitHub</h3>
            <p className="text-sm text-gray-400">Check my repos</p>
          </a>

          <a
            href="http://www.linkedin.com/in/krishna-gupta-183733220"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <Linkedin className="w-8 h-8 mb-2" />
            <h3 className="font-medium">LinkedIn</h3>
            <p className="text-sm text-gray-400">Let's connect</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
