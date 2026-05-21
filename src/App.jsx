import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GitHubActivity from "./components/GitHubActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-base font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
