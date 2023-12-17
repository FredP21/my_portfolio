import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import traduction from "../utils/traduction";
import { useTheme1 } from "../context/LanguageContext";

function Header() {
  const { theme, handleTheme } = useTheme();
  const { language } = useTheme1();

  useEffect(() => {
    document.getElementById("root").classList.remove("dark", "light");
    document.getElementById("root").classList.add(theme);
  }, [theme]);
  return (
    <nav className="nav flex items-center fixed w-full md:justify-between md:pr-10 border-b-2 bg-zinc-100 z-10">
      <div className="w-[50px] h-[50px] md:w-[90px] md:h-[90px]">
        {theme === "light" ? (
          <img src="/logo1.webp" alt="my logo" />
        ) : (
          <img src="/logo2.webp" alt="my logo" />
        )}
      </div>
      <ul className="grid grid-cols-2 gap-5 m-auto md:flex md:gap-10 font-normal text-lg">
        <Link to="intro" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            {traduction[language].nameTitle2}
          </li>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            {traduction[language].nameTitle}
          </li>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            SKILLS
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            CONTACT
          </li>
        </Link>
      </ul>
      <label className="switch hidden md:block">
        <input type="checkbox" onChange={handleTheme} className="input" />
        <span className="slider"></span>
      </label>
    </nav>
  );
}

export default Header;
