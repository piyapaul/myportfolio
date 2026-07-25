import { motion } from "framer-motion";

export default function TechCard({
  name,
  icon,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        rotateX: 8,
        rotateY: -8,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      viewport={{ once: true }}
      className="
        group
        relative
        w-full
        max-w-[180px]
        h-[180px]
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:border-violet-500/70
        hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/20 via-transparent to-blue-500/20" />

      {/* Floating Icon */}
      <motion.img
        src={icon}
        alt={name}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="relative z-10 w-16 h-16 mx-auto mt-10 object-contain"
      />

      {/* Name */}
      <h3 className="relative z-10 mt-6 text-center text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
        {name}
      </h3>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}