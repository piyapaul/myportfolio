import { experiences } from "../constants/experience";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-8 bg-[#050816]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[6px] text-violet-400">
          My Journey
        </p>

        <h2 className="text-5xl font-black mt-3">
          Experience
        </h2>

        <div className="mt-20 space-y-12">

          {experiences.map((item, index) => (
            <ExperienceCard
              key={index}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}