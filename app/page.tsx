import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="relative z-10 bg-black w-full min-h-screen">
      <div className="w-full px-4 sm:px-20">
        <Hero />
      </div>
      <div className="w-full px-4 sm:px-20">
        <About />
      </div>

      {/* Reveal stack: each section peels away to uncover the next */}
      <div className="h-[180vh]">
        <Experiences />
      </div>
      <div className="h-[200vh] -mt-[100vh]">
        <Skills />
      </div>

      <div className="w-full px-4 sm:px-20 relative z-[70] bg-black">
        <Portafolio />
      </div>

      <div className="h-[140vh]">
        <Formations />
      </div>
      <div className="h-[100vh]">
        <Footer />
      </div>
    </main>
  );
}
