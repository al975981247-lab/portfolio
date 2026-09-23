
export const profile = {
  name: "Shavkatov Muhammadamin",
  role: "Frontend developer",
  location: "Your city, Country",
  intro:
    "I build fast, accessible websites and web apps with React.",
   socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a developer who likes turning rough ideas into working products. Most of my time goes into React interfaces, but I'm comfortable across the stack when a project needs it.",
    "Outside of code I like reading, sketching layouts on paper, and learning how other people solve the same problems differently.",
  ],
  facts: [
    { term: "Based in", detail: "Your city, Country" },
    { term: "Focus", detail: "React, UI engineering, accessibility" },
    { term: "Available", detail: "Freelance and full-time roles" },
  ],
};

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "Vite", "Node.js"] },
  { group: "Tools", items: ["Git", "Figma", "Vercel", "Jest"] },
];

export const projects = [
  {
    id: "task-board",
    title: "Task Board",
    type: "Web app",
    year: 2026,
    description:
      "A drag-and-drop kanban board with keyboard controls and saved state. Built to be usable without a mouse.",
    stack: ["React", "useReducer", "CSS Modules"],
    live: "https://example.com",
    repo: "https://github.com/your-username/task-board",
  },
  {
    id: "weather-now",
    title: "Weather Now",
    type: "Web app",
    year: 2025,
    description:
      "Search any city and see the current conditions and a five-day outlook. Handles loading, empty and error states.",
    stack: ["React", "Fetch API", "Vite"],
    live: "https://example.com",
    repo: "https://github.com/your-username/weather-now",
  },
  {
    id: "studio-site",
    title: "Studio Website",
    type: "Client site",
    year: 2025,
    description:
      "A marketing site for a small design studio, with a project gallery and a contact form. Scores 100 on Lighthouse accessibility.",
    stack: ["Next.js", "CSS", "Vercel"],
    live: "https://example.com",
    repo: "",
  },
  {
    id: "ui-kit",
    title: "Small UI Kit",
    type: "Library",
    year: 2024,
    description:
      "A set of accessible buttons, inputs and dialogs used across my own projects. Documented with live examples.",
    stack: ["React", "Storybook", "Jest"],
    live: "",
    repo: "https://github.com/your-username/ui-kit",
  },
];
