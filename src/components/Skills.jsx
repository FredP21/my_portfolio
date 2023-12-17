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
import { useTheme } from "../context/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const isMobile = useMediaQuery("only screen and (max-width: 767px)");
  return (
    <div
      className="lg:h-screen px-2 mt-20 md:px-8 md:flex md:flex-col md:justify-around"
      id="skills"
    >
      <div className="flex items-center mb-5 md:mb-0">
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
        <div className="w-full border-[1px] mx-4" />
        <h2 className="font-medium text-[4vw] md:text-[2vw]">SKILLS</h2>
        <div className="w-full border-[1px] mx-4" />
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
      </div>
      <div className="md:flex justify-around md:mt-10">
        <div className="flex flex-col gap-10 items-center">
          {theme === "light" ? (
            <img
              src="/front-end-logo-black.webp"
              alt="logo to representing front-end skills"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          ) : (
            <img
              src="/front-end-logo-white.webp"
              alt="logo to representing front-end skills"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          )}
          <div className="w-[100%] mb-5 mr-[-40px] lg:mr-0 flex md:flex-col md:gap-3 items-center lg:justify-around">
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoHtml5 className="text-my-green w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">HTML 5</p>
            </div>
            <div className=" w-[100%] flex justify-between gap-5 items-center">
              <BiLogoReact className="text-my-green w-[30px] h-[30px] mdw-[60px] md:h-[60px]" />
              <p className="hidden lg:block">React.js</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoSass className="text-my-green w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">Sass</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoTailwindCss className="text-my-green w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">Tailwind</p>
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
        <div className="flex flex-col gap-10 mt-10 md:mt-0 items-center">
          {theme === "light" ? (
            <img
              src="/back-end.webp"
              alt="logo to representing front-end skills"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          ) : (
            <img
              src="/back-endW.webp"
              alt="logo to representing front-end skills"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          )}
          <div className="w-[100%] mb-5 mr-[-50px] lg:mr-0 flex md:justify-around md:flex-col items-center md:gap-10">
            <div className=" w-[100%] flex justify-between items-center">
              <BiLogoNodejs className="text-my-green w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">Node.js</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center gap-5">
              <SiExpress className=" text-my-green w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">Express.js</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <SiMysql className="w-[30px] h-[30px] text-my-green md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">MySQL</p>
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
        <div className="flex flex-col gap-10 mt-10 md:mt-2 items-center">
          {theme === "light" ? (
            <img
              src="/tools.webp"
              alt="logo to representing front-end skills"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          ) : (
            <img
              src="/toolsW.webp"
              alt="logo to representing front-end skills"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          )}
          <div className="w-[100%] mr-[-50px] lg:mr-0 mb-5 flex md:justify-around md:flex-col items-center md:gap-10">
            <div className=" w-[100%] flex justify-between gap-5 items-center">
              <BiLogoGithub className="w-[30px] h-[30px] text-my-green md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">GitHub</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <SiNpm className="w-[30px] h-[30px] text-my-green md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">NPM</p>
            </div>
            <div className=" w-[100%] flex justify-between items-center">
              <SiVercel className="w-[30px] h-[30px] text-my-green md:w-[50px] md:h-[50px]" />
              <p className="hidden lg:block">Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
