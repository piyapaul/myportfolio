import { motion } from "framer-motion";
import TechCard from "../components/TechCard";

import reactLogo from "../assets/icons/react.svg";
import nextLogo from "../assets/icons/nextdotjs.svg";
import nodeLogo from "../assets/icons/nodedotjs.svg";
import mongoLogo from "../assets/icons/mongodb.svg";
import dockerLogo from "../assets/icons/docker.svg";
import postman from "../assets/icons/postman.svg";
import postgresql from "../assets/icons/postgresql.svg";

export default function Tech() {
  const technologies = [
    {
      name: "React",
      icon: reactLogo,
    },
    {
      name: "Next.js",
      icon: nextLogo,
    },
    {
      name: "Node.js",
      icon: nodeLogo,
    },
    {
      name: "MongoDB",
      icon: mongoLogo,
    },
    {
      name: "Docker",
      icon: dockerLogo,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Postman",
      icon: postman,
    },
  ];

  return (
    <section
      id="tech"
      className="relative py-28 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-700/10 blur-[170px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="uppercase tracking-[8px] text-violet-400 text-center"
        >
          Technologies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
          className="text-center text-6xl font-black mt-3"
        >
          Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="text-center text-gray-400 mt-6 max-w-2xl mx-auto leading-8"
        >
          Technologies I use to build modern full-stack applications,
          cloud projects and scalable backend systems.
        </motion.p>

        {/* Cards */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
        >
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              delay={index * 0.08}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}