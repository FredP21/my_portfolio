import { useMediaQuery } from "@uidotdev/usehooks";
import {
  BiLogoGithub,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoSass,
} from "react-icons/bi";
import { SiExpress, SiVercel, SiNpm, SiMysql } from "react-icons/si";

function Skills() {
  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  return (
    <div
      className="lg:h-screen px-2 mt-20 md:px-8 md:flex md:flex-col md:justify-around"
      id="skills"
    >
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
        <div className="w-full border-[1px] mx-4" />
        <h2 className="font-medium text-[2vw]">SKILLS</h2>
        <div className="w-full border-[1px] mx-4" />
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
      </div>
      <div className="md:flex justify-around mt-10">
        <div className="flex flex-col gap-10 items-center">
          <img
            src="src/assets/front-end-logo-black.png"
            alt="logo to representing front-end skills"
            className={isMobile ? "w-[50px] h-[50px]" : "w-[100px] h-[100px]"}
          />
          <div className="w-[100%] mb-5 flex md:flex-col md:gap-3 items-center  text-my-green lg:justify-around">
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoHtml5
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">HTML 5</p>
            </div>
            <div className=" w-[100%] flex justify-between gap-5 items-center">
              <BiLogoReact
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">React.js</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoSass
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">Sass</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoTailwindCss
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">Tailwind</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-center items-center">
          <div
            className={
              isMobile ? "w-[100%] border-b-[1px]" : "h-[360px] border-l-[1px]"
            }
          />
        </div>
        <div className="flex flex-col gap-10 items-center">
          <img
            src="src/assets/back-end.png"
            alt="logo to representing back-end skills"
            className={
              isMobile ? "w-[50px] h-[50px] mt-2" : "w-[100px] h-[100px]"
            }
          />
          <div className="w-[100%] mb-5 flex md:justify-around md:flex-col items-center md:gap-10 text-my-green">
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoNodejs
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">Node.js</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center gap-5">
              <SiExpress
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">Express.js</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <SiMysql
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">MySQL</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-center items-center">
          <div
            className={
              isMobile ? "w-[100%] border-b-[1px]" : "h-[360px] border-l-[1px]"
            }
          />
        </div>
        <div className="flex flex-col gap-10 items-center">
          <img
            src="src/assets/tools.png"
            alt="logo to representing tools I'm using"
            className={
              isMobile ? "w-[50px] h-[50px] mt-2" : "w-[100px] h-[100px]"
            }
          />
          <div className="w-[100%] mb-5 flex md:justify-around md:flex-col items-center md:gap-10  text-my-green">
            <div className=" w-[100%] flex justify-between gap-5 items-center">
              <BiLogoGithub
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">GitHub</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <SiNpm
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">NPM</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <SiVercel
                className={isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]"}
              />
              <p className="hidden lg:block text-gray-400">Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
