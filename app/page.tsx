import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Experiences />
      <Portafolio />
      <Formations />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  );
}
