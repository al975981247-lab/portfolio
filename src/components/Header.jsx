import { profile } from "../data/portfolio.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import { useTheme } from "../context/ThemeContext.jsx";
import "../styles/header.css";

const LINKS = [
  { id: "home", label: "Intro" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
const IDS = LINKS.map((l) => l.id);

export default function Header() {
  const active = useScrollSpy(IDS);
  const { theme, toggle } = useTheme();

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#home" className="header__brand" aria-label="Go to home section">
          <img className="header__avatar" src="/me.jpg" alt="Muhammadamin" />
          <span className="header__name">{profile.name}</span>
        </a>

        <div className="header__nav-group">
          <nav aria-label="Primary">
            <ul className="header__links">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="header__shop-link" href="/shop.html" target="_blank" rel="noreferrer">
                  Shop
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="header__theme"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}
