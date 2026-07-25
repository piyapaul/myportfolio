import { motion } from "framer-motion";
import { projects } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/10 blur-[180px] rounded-full" />

        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-violet-400"
        >
          Portfolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
          className="text-6xl font-black mt-4"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-8 max-w-3xl leading-8 text-lg"
        >
          These projects demonstrate my ability to design,
          develop and deploy modern software solutions,
          combining full-stack development, AI and cloud
          technologies to solve real-world problems.
        </motion.p>

        {/* Featured Project */}

        <div className="mt-20">

          <ProjectCard
            project={featuredProject}
            featured
          />

        </div>

        {/* Other Projects */}

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {otherProjects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
}