import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
function App() {
  return (
    <div className="bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <About />
<Tech />
<Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;