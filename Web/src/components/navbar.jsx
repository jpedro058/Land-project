import Icon from "../assets/Icon.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navbarItems = [
    { name: "Inicio", href: "/" },
    { name: "Dashboard", href: "/Dashboard" },
    { name: "Comunidade", href: "" },
    { name: "Recursos", href: "" },
    { name: "Preços", href: "" },
    { name: "Contacto", href: "" },
  ];

  return (
    <header className="bg-white text-white text-center p-8 py-7 flex justify-between items-center">
      <img src={Icon} alt="logo" className="h-10 w-8" />

      <div className="flex justify-center items-center">
        <ul className="flex justify-center items-center">
          {navbarItems.map((item) => (
            <li className="" key={item.name}>
              <Link
                to={item.href}
                className={`text-[#1E1E1E] hover:text-zinc-700 px-8 py-2 rounded-lg cursor-pointer ${
                  location.pathname === item.href ? "bg-[#F5F5F5]" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-x-4">
          <button
            type="button"
            className="bg-[#E3E3E3] border border-[#767676] text-[#1E1E1E] w-20 py-1 rounded-lg 
                hover:bg-[#d3d3d3] hover:border-[#5C5C5C] hover:text-[#5C5C5C] transition-all duration-300"
          >
            Sing in
          </button>
          <button
            type="button"
            className="bg-[#2C2C2C] text-white w-20 py-1 rounded-lg
                hover:bg-[#575757] transition-all duration-300"
          >
            Registrar
          </button>
        </div>
      </div>
    </header>
  );
}
