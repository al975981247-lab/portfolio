import Section from "./Section.jsx";
import "../styles/experience.css";

const experience = [
  {
    title: "Builder",
    company: "Construction Work",
    period: "Current",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Builder working at a construction site",
    description:
      "Worked on construction projects, developed practical skills, and learned to solve problems carefully on site.",
  },
  {
    title: "Front-end Developer",
    company: "Frontend Development",
    period: "Previous",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Code editor on a laptop screen",
    description:
      "Built interfaces with HTML, CSS, JavaScript, and React while developing a strong foundation in web development.",
  },
  {
    title: "Car Mechanic",
    company: "Automotive Repair",
    period: "Earlier",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mechanic working on a car engine",
    description:
      "Diagnosed vehicle problems, repaired mechanical systems, and developed careful hands-on problem-solving skills.",
  },
  {
    title: "Drawing Artist",
    company: "Independent Practice",
    period: "Earlier",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Artist drawing with pencils",
    description:
      "Practiced drawing and visual composition, building creativity and attention to detail that I bring to interface design.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Work experience">
      <div className="experience-grid">
        {experience.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.title}`}>
            <img className="experience-card__image" src={item.image} alt={item.imageAlt} />
            <span className="experience-card__period">{item.period}</span>
            <h3>{item.title}</h3>
            <p className="experience-card__company">{item.company}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
