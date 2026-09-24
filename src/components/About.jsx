import Section from "./Section.jsx";
import "../styles/about.css";

const profileImage = "https://vitalskills.in/wp-content/uploads/2024/05/Front-End-Development-1.webp";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about">
        <div className="about__text">
          <p>
            Hello! My name is Muhammadamin. I am a junior front-end developer
            who enjoys turning ideas into clear, responsive, and useful web
            experiences.
          </p>
          <p>
            I started my tech journey seven months ago and have been learning
            every day. This diploma project shows my progress with HTML, CSS,
            JavaScript, and React.
          </p>
        </div>

        <div className="about__media">
          <img src={profileImage} alt="Profile portrait" className="about__image" />
        </div>
      </div>
    </Section>
  );
}
