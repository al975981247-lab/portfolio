import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Section from "./Section.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/education.css";

const education = [
  {
    title: "Proweb",
    place: "IT Center",
    years: "In progress",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjES7OSVzHzJeOVb7aBe89_Sh_vFmUQ-rA9nmnq67uJDC3N0uBz08NeXHZ&s=10",
  },
  {
    title: "Paradox",
    place: "English Center",
    years: "Completed",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWnZp8umnj8fUQK97BlGwqRzT4skJ4DlUo5b7gV7-bfxJ1CzatBUxgmk&s=10",
  },
  {
    title: "Havas Education",
    place: "English Center",
    years: "In progress",
    logo: "/havas.jpg",
  },
  {
    title: "HAAD",
    place: "IT Center",
    years: "Future",
    logo: "https://yt3.googleusercontent.com/q9kRntx3l6iDGe3bycru-RgTHckRoFUOCJcf7zaDm4xDblZNzYdHgPUULITGubySm5jGXq8RfQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Cambridge University",
    place: "Cambridge University",
    years: "Future",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKgpipdPe-Y23rlA1EGEVDdMnUqei6gQ5-ewDqKuejNBMECWZhOjRMJ4&s=10",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 5 },
        }}
        className="education-swiper"
      >
        {education.map((item) => (
          <SwiperSlide key={`${item.title}-${item.place}`}>
            <article className="education-card">
              <img className="education-card__image" src={item.logo} alt={`${item.title} logo`} />
              <div className="education-card__content">
                <span className="education-card__years">{item.years}</span>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
