import Section from "./Section.jsx";
import "../styles/skills.css";

const skills = [
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-card__logo-wrap">
              <img src={skill.image} alt={skill.name} className="skill-card__logo" />
            </div>
            <h3>{skill.name}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
