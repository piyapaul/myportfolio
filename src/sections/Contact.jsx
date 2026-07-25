import ContactForm from "../components/ContactForm";
import EarthCanvas from "../canvas/EarthCanvas";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-[280px] h-[280px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">

          {/* Contact Form */}
          <ContactForm />

          {/* Earth Section */}
          <div className="flex justify-center">

            <div
              className="
                w-full
                max-w-[520px]
                h-[420px]
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-2xl
                shadow-violet-500/10
                overflow-hidden
              "
            >
              <EarthCanvas />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}