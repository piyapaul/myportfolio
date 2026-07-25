import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        hover:border-violet-500/50
        hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
        duration-500
        ${
          featured
            ? "grid lg:grid-cols-2"
            : ""
        }
      `}
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

      </div>

      {/* Content */}

      <div className="p-8 flex flex-col justify-center">

        <p className="text-violet-400 font-semibold">
          Featured Project
        </p>

        <h2 className="text-4xl font-black mt-3">
          {project.title}
        </h2>

        <h3 className="text-gray-400 mt-2">
          {project.subtitle}
        </h3>

        <p className="text-gray-300 leading-8 mt-6">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mt-8">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-violet-500/10
                border
                border-violet-500/30
                text-sm
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-5 mt-10">

          <a
            href={project.github}
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-violet-600
              hover:bg-violet-500
              duration-300
            "
          >
            <FiGithub />

            GitHub

          </a>

          <a
            href={project.demo}
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              border
              border-white/20
              hover:border-violet-500
              duration-300
            "
          >
            <FiExternalLink />

            Live Demo

          </a>

        </div>

      </div>

    </motion.div>
  );
}