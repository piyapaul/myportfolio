import { motion } from "framer-motion";

export default function AboutCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        shadow-xl
        hover:border-violet-500/40
        hover:shadow-violet-500/20
        transition-all
        duration-300
      "
    >
      <div className="mb-6">
        <Icon className="text-5xl text-violet-400" />
      </div>

      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-8">
        {description}
      </p>
    </motion.div>
  );
}