import {
  FaGraduationCap,
  FaLaptopCode,
  FaAws,
} from "react-icons/fa";

import { MdRocketLaunch } from "react-icons/md";
import ProfileCard from "../components/ProfileCard";
import AboutCard from "../components/AboutCard";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <p className="uppercase tracking-[6px] text-violet-400">
          Introduction
        </p>

        <h2 className="text-5xl font-black mt-3">
          About Me
        </h2>

        <p className="mt-8 text-gray-400 max-w-3xl leading-8 text-lg">
          I'm passionate about building premium web applications,
          scalable cloud solutions and immersive 3D experiences.
          I enjoy solving challenging problems and continuously
          learning modern technologies.
        </p>

        {/* Photo + Cards */}

        <div className="grid lg:grid-cols-5 gap-12 mt-20">

          {/* Left Side - Profile */}

          <div className="lg:col-span-2">
            <ProfileCard />
          </div>

          {/* Right Side - About Cards */}

          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-2 gap-8">

              <AboutCard
  icon={FaGraduationCap}
  title="Education"
  description="B.Tech in Computer Science & Engineering from Guru Nanak Institute of Technology."
/>

<AboutCard
  icon={FaLaptopCode}
  title="Full Stack"
  description="React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL and modern JavaScript."
/>

<AboutCard
  icon={FaAws}
  title="Cloud"
  description="Learning AWS Cloud, Docker, Linux and modern DevOps practices."
/>

<AboutCard
  icon={MdRocketLaunch}
  title="Career"
  description="Incoming Software Engineer, building projects and preparing for top product-based companies."
/>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}