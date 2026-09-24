import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Me.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import "./styles/responsive.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`page-loader${isLoading ? "" : " page-loader--hidden"}`} aria-hidden={!isLoading}>
        <div className="page-loader__content">
          <img className="page-loader__mark" src="/me.jpg" alt="Muhammadamin" />
          <span className="page-loader__label">Loading portfolio</span>
          <div className="page-loader__spinner" aria-hidden="true" />
        </div>
      </div>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
