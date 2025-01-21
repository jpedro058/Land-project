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
    <footer className="flex justify-start items-start gap-4 border-t border-[#D9D9D9] text-white text-center px-8 pt-8 pb-40">
      {/* Logo and Social Icons */}
      <div className="flex-1 space-y-4">
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
          className="flex-1 justify-start items-start text-left text-zinc-800"
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

/* import Icon from "../assets/Icon.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Youtube from "../assets/Youtube.png";
import X from "../assets/X.png";

export default function Footer() {
  return (
    <footer className="flex justify-start items-start gap-4 border-t border-[#D9D9D9] text-white text-center px-8 pt-8 pb-40">
      <div className="flex-1 space-y-4">
        <div className="flex items-start">
          <button type="button" onClick={() => window.scrollTo(0, 0)}>
            <img src={Icon} alt="logo" className="h-10 w-8" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img src={X} alt="x" className="h-6 w-6 cursor-pointer" />
          <img
            src={Instagram}
            alt="instagram"
            className="h-6 w-6 cursor-pointer"
          />
          <img src={Youtube} alt="youtube" className="h-6 w-6 cursor-pointer" />
          <img
            src={LinkedIn}
            alt="linkedin"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div className=" flex-1 justify-start items-start text-left text-zinc-800">
        <h4 className="text-base font-semibold pb-4">Use cases</h4>
        <ul className="space-y-2">
          <li className="text-base font-light">UI design</li>
          <li className="text-base font-light">UX design</li>
          <li className="text-base font-light">Wireframing</li>
          <li className="text-base font-light">Diagramming</li>
          <li className="text-base font-light">Brainstorming</li>
          <li className="text-base font-light">Online whiteboard</li>
          <li className="text-base font-light">Team collaboration</li>
        </ul>
      </div>
      <div className=" flex-1 justify-start items-start text-left text-zinc-800">
        <h4 className="text-base font-semibold pb-4">Explore</h4>
        <ul className="space-y-2">
          <li className="text-base font-light">Design</li>
          <li className="text-base font-light">Prototyping</li>
          <li className="text-base font-light">Development features</li>
          <li className="text-base font-light">Design systems</li>
          <li className="text-base font-light">Collaboration features</li>
          <li className="text-base font-light">Design process</li>
          <li className="text-base font-light">FigJam</li>
        </ul>
      </div>
      <div className=" flex-1 justify-start items-start text-left text-zinc-800">
        <h4 className="text-base font-semibold pb-4">Resources</h4>
        <ul className="space-y-2">
          <li className="text-base font-light">Blog</li>
          <li className="text-base font-light">Best practices</li>
          <li className="text-base font-light">Colors</li>
          <li className="text-base font-light">Color wheel</li>
          <li className="text-base font-light">Support</li>
          <li className="text-base font-light">Developers</li>
          <li className="text-base font-light">Resource library</li>
        </ul>
      </div>
    </footer>
  );
}
 */
