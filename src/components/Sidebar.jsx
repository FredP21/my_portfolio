import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoGmail,
  BiLogoDiscordAlt,
} from "react-icons/bi";

function Sidebar() {
  return (
    <div className="w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center">
      <h2 className="-rotate-90 tracking-[0.15em]">PORTFOLIO</h2>
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
        <BiLogoGmail className="cursor-pointer hover:scale-110 transition-all ease-in-out  hover:text-my-green" />
        <a
          href="https://discord.com/users/581398485719449613"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoDiscordAlt className="cursor-pointer hover:scale-110 transition-all ease-in-out  hover:text-my-green" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
