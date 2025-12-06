import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
            About Money Manager
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4 text-lg">
            Money Manager helps you track your financial habits, analyze expenses,
            and stay in control of your money through a simple yet powerful platform.
          </p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              We aim to make personal finance simple, stress-free, and accessible
              for everyone. Whether you're managing daily expenses, planning savings,
              or analyzing spending patterns—Money Manager gives you the tools to
              make better financial decisions every day.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-4">
              We combine clean UI, automation, and insightful analytics to help you
              stay financially aware and confident.
            </p>
          </motion.div>

          {/* RIGHT IMAGE / ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           <img
             src="https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget185.png"
             alt="Finance Illustration"
             className="w-full max-w-md mx-auto drop-shadow-xl rounded-xl"
             />

          </motion.div>
        </div>

        {/* FEATURES SECTION */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mt-24 mb-10">
          What Makes Money Manager Different?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-4">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              📱 Easy to Use
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Minimal & intuitive interface so anyone can manage finances without complexity.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
              📊 Insightful Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Beautiful charts & insights that help you understand spending patterns.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              🔐 Secure & Private
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              End-to-end protected data with full privacy—your financial info stays yours.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default About;
