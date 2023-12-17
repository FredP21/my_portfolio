import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoGmail,
  BiLogoDiscordAlt,
} from "react-icons/bi";
import { Link } from "react-scroll";
import { useTheme1 } from "../context/LanguageContext";

function Sidebar() {
  const { language, handleLanguage } = useTheme1();
  return (
    <div className="w-[50px] md:w-[90px] border-r-[1px] z-10 h-screen fixed flex flex-col justify-around items-center">
      <h2 className="-rotate-90 tracking-[0.15em] mt-12">PORTFOLIO</h2>
      <div className="flex flex-col gap-5 mb-10 text-xl">
        <a
          href="https://github.com/FredP21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out  hover:text-my-green " />
        </a>
        <a
          href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-pelletier-878ab228b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoLinkedinSquare className="cursor-pointer hover:scale-110 transition-all ease-in-out  hover:text-my-green" />
        </a>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <BiLogoGmail className="cursor-pointer hover:scale-110 transition-all ease-in-out  hover:text-my-green" />
        </Link>
        <a
          href="https://discord.com/users/581398485719449613"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoDiscordAlt className="cursor-pointer hover:scale-110 transition-all ease-in-out  hover:text-my-green" />
        </a>
      </div>
      <button
        className="font-medium rounded-[60%] shadow-my-shadow p-3 border-[1px] border-zinc-200"
        onClick={handleLanguage}
      >
        {language}
      </button>
    </div>
  );
}

export default Sidebar;
