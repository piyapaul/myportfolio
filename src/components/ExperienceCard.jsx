import { motion } from "framer-motion";

export default function ExperienceCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute left-6 top-14 w-1 h-full bg-violet-500/30"></div>

      <div className="flex gap-6">

        <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-2xl shadow-lg shadow-violet-600/40 z-10">
          {item.icon}
        </div>

        <div className="flex-1 bg-[#111827] border border-white/10 rounded-3xl p-8 hover:border-violet-500 duration-300 hover:-translate-y-2">

          <p className="text-violet-400 font-semibold">
            {item.year}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {item.title}
          </h3>

          <h4 className="text-gray-400 mt-1">
            {item.company}
          </h4>

          <p className="mt-5 text-gray-400 leading-8">
            {item.description}
          </p>

        </div>

      </div>

    </motion.div>
  );
}