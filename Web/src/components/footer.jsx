import Icon from "../assets/Icon.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Youtube from "../assets/Youtube.png";
import X from "../assets/X.png";

const socialIcons = [
  { src: X, alt: "x" },
  { src: Instagram, alt: "instagram" },
  { src: Youtube, alt: "youtube" },
  { src: LinkedIn, alt: "linkedin" },
];

const footerSections = [
  {
    title: "Use cases",
    items: [
      "UI design",
      "UX design",
      "Wireframing",
      "Diagramming",
      "Brainstorming",
      "Online whiteboard",
      "Team collaboration",
    ],
  },
  {
    title: "Explore",
    items: [
      "Design",
      "Prototyping",
      "Development features",
      "Design systems",
      "Collaboration features",
      "Design process",
      "FigJam",
    ],
  },
  {
    title: "Resources",
    items: [
      "Blog",
      "Best practices",
      "Colors",
      "Color wheel",
      "Support",
      "Developers",
      "Resource library",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-start items-start flex-wrap gap-4 border-t border-[#D9D9D9] text-white text-center px-8 pt-8 pb-40">
      {/* Logo and Social Icons */}
      <div className="flex-1 space-y-4 min-w-fit">
        <div className="flex items-start">
          <button type="button" onClick={() => window.scrollTo(0, 0)}>
            <img src={Icon} alt="logo" className="h-10 w-8" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          {socialIcons.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="h-6 w-6 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Footer Sections */}
      {footerSections.map((section) => (
        <div
          key={section.title}
          className="flex-1 justify-start items-start min-w-fit text-left text-zinc-800"
        >
          <h4 className="text-base font-semibold pb-4">{section.title}</h4>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="text-base font-light cursor-pointer 
                hover:text-[#939393] transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
