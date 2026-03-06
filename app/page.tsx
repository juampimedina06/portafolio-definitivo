import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
      <Hero />
      <About />
      <Experiences />
      <Portafolio />
      <Skills />
      <Contact />
    </main>
  );
}
