import { profile } from "../data/portfolio.js";
import "../styles/me.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <p className="hero__greeting">Hello! My name is</p>
        <h1 className="hero__name">Muhammadamin</h1>
        <p className="hero__role">Front-end developer</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#about">About me</a>
          <a className="btn" href="#experience">Work experience</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}
