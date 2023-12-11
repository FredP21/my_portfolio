import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoGoogle,
  IoLogoDiscord,
} from "react-icons/io5";

function Sidebar() {
  return (
    <div className="w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center">
      <h2 className="-rotate-90 tracking-[0.15em]">HOMEPAGE</h2>
      <div className="flex flex-col gap-5 mb-10 text-xl">
        <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoGoogle className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoDiscord className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
      </div>
    </div>
  );
}

export default Sidebar;