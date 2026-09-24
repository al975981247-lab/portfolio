import Section from "./Section.jsx";
import "../styles/contact.css";

const CV_URL = "/cv.pdf";
const SOCIAL_LINKS = {
  instagram: "https://instagram.com/muhammadamin_shavkatov_",
  facebook: "https://facebook.com/muhammadamin_shavkatov_",
  telegram: "https://t.me/muhammadamin8888",
};
const profileImage = "/me.jpg";

export default function Contact() {
  return (
    <Section id="contact" title="Contact me">
      <div className="contact">
        <div className="contact__socials">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram" title="Instagram">
            <svg className="social-link__icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook" title="Facebook">
            <svg className="social-link__icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path fill="currentColor" d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.6V3.8c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.7v8h3.3Z" />
            </svg>
          </a>
          <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noreferrer" className="social-link" aria-label="Telegram" title="Telegram">
            <svg className="social-link__icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path fill="currentColor" d="m21.7 4.2-3 14.2c-.2 1-.8 1.3-1.6.8l-4.4-3.2-2.1 2c-.2.2-.4.4-.8.4l.3-4.5 8.2-7.4c.4-.4-.1-.6-.6-.2L7.6 12.8 3.3 11.4c-.9-.3-.9-.9.2-1.3L20.3 3.5c.8-.3 1.5.2 1.4.7Z" />
            </svg>
          </a>
        </div>

        <div className="contact__photo-wrap" aria-label="Profile photo area">
          <img src={profileImage} alt="My profile" className="contact__photo" />
        </div>

        <div className="contact__cta">
          <p className="contact__keep-going">Keep going</p>
          <a className="btn btn--primary" href={CV_URL} download>
            Download CV
          </a>
        </div>
      </div>
      <a className="contact__back-to-top" href="#home" aria-label="Back to top" title="Back to top">
        <span aria-hidden="true">↑</span>
      </a>
    </Section>
  );
}
