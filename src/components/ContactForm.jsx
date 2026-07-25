import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

export default function ContactForm() {
  const [form, setForm] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.from_name}`;

    const body = `
Name: ${form.from_name}

Email: ${form.email}

Message:
${form.message}
`;

    window.location.href = `mailto:palpiya19@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setForm({
      from_name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#100D25] rounded-3xl p-8 border border-white/10 shadow-2xl"
    >
      <p className="uppercase tracking-[5px] text-violet-400 text-sm">
        Get In Touch
      </p>

      <h2 className="text-5xl lg:text-6xl font-black mt-3">
        Contact<span className="text-violet-500">.</span>
      </h2>

      <p className="text-gray-400 mt-4">
        Have a project or opportunity? I'd love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        {/* Name */}

        <div>
          <label className="block mb-2 text-gray-300">
            Your Name
          </label>

          <input
            type="text"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full rounded-xl bg-[#151030] px-5 py-4 border border-transparent focus:border-violet-500 outline-none duration-300"
          />
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 text-gray-300">
            Your Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full rounded-xl bg-[#151030] px-5 py-4 border border-transparent focus:border-violet-500 outline-none duration-300"
          />
        </div>

        {/* Message */}

        <div>
          <label className="block mb-2 text-gray-300">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
            className="w-full rounded-xl bg-[#151030] px-5 py-4 border border-transparent focus:border-violet-500 outline-none resize-none duration-300"
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-500 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/40"
        >
          Send Message
        </button>
      </form>

      {/* Connect With Me */}

      <div className="mt-10 pt-8 border-t border-white/10">

        <h3 className="text-2xl font-bold mb-6">
          Connect With Me
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Email */}

          <a
            href="mailto:palpiya19@gmail.com"
            className="group bg-[#151030] rounded-2xl border border-white/10 p-5 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Email
                </p>

                <p className="font-semibold group-hover:text-violet-400 transition">
                  palpiya19@gmail.com
                </p>
              </div>

            </div>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/piyapaul"
            target="_blank"
            rel="noreferrer"
            className="group bg-[#151030] rounded-2xl border border-white/10 p-5 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-xl">
                <FaGithub />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  GitHub
                </p>

                <p className="font-semibold group-hover:text-violet-400 transition">
                  View Projects
                </p>
              </div>

            </div>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/piya-paul-a37293254/"
            target="_blank"
            rel="noreferrer"
            className="group bg-[#151030] rounded-2xl border border-white/10 p-5 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-xl">
                <FaLinkedin />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  LinkedIn
                </p>

                <p className="font-semibold group-hover:text-violet-400 transition">
                  Connect With Me
                </p>
              </div>

            </div>
          </a>

          {/* LeetCode */}

          <a
            href="https://leetcode.com/u/palpiya19/"
            target="_blank"
            rel="noreferrer"
            className="group bg-[#151030] rounded-2xl border border-white/10 p-5 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-xl">
                <SiLeetcode />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  LeetCode
                </p>

                <p className="font-semibold group-hover:text-violet-400 transition">
                  View Profile
                </p>
              </div>

            </div>
          </a>

        </div>

        {/* Location */}

        <div className="mt-6 flex items-center gap-3 text-gray-400">

          <FaMapMarkerAlt className="text-violet-400" />

          <span>West Bengal, India</span>

        </div>

      </div>

    </motion.div>
  );
}