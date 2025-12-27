import React, { useState } from "react";
import axiosConfig from "../util/axiosConfig";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axiosConfig.post("/contact/send", form);
      setStatus("Message sent successfully! Check your email.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
      
     {/* container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-xl border border-white/30 dark:border-gray-700"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center drop-shadow-sm">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          We’re here to help. Send us a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 mt-8">

          {/* Name */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 dark:text-white"
          />

          {/* Email */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 dark:text-white"
          />

          {/* Message */}
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-gray-800 dark:text-white resize-none"
          ></motion.textarea>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-semibold shadow-md
            ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        
        {status && (
          <p className="text-center mt-4 font-semibold text-green-600 dark:text-green-400">
            {status}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
