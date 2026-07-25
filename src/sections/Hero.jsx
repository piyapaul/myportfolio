import CubeCanvas from "../canvas/CubeCanvas";
import { HiOutlineDownload } from "react-icons/hi";
export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#050816]">

      {/* Left Content */}

      <div className="absolute left-20 top-1/2 -translate-y-1/2 z-20">

        <div className="flex">

          <div className="flex flex-col items-center mr-6">

            <div className="w-5 h-5 rounded-full bg-violet-500" />

            <div className="w-1 h-80 bg-gradient-to-b from-violet-500 to-transparent" />

          </div>

          <div>

            <h1 className="text-7xl font-black leading-tight">
              Hi, I'm{" "}
              <span className="text-violet-500">
                Piya
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-2xl leading-relaxed text-gray-300">
              Every project is an opportunity to learn, improve, and build something meaningful.
            </p>

            <a
  href="/resume/Piya_Pal_Resume.pdf"
  download="Piya_Pal_Resume.pdf"
  className="
    inline-flex
    items-center
    gap-3
    mt-10
    rounded-xl
    bg-gradient-to-r
    from-violet-600
    to-purple-600
    px-8
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]
  "
>
  <HiOutlineDownload className="text-xl" />
  Download Resume
</a>

          </div>

        </div>

      </div>

      {/* 3D Model */}

      <div className="absolute inset-0">
        <CubeCanvas />
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <div className="flex h-16 w-9 justify-center rounded-full border-4 border-white">

          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-white" />

        </div>

      </div>

    </section>
  );
}