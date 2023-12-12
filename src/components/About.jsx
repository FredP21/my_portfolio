import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

function About() {
  return (
    <div className="px-8 mt-12  text-center flex flex-col items-center">
      <p className="text-[4vw] font-bold">I&apos;m a Web Developer !</p>
      <BiSolidQuoteAltLeft className="bg-my-green p-3 text-6xl rounded-full text-white mt-5" />
      <p className="my-5 text-[2.5vw] text-gray-300 hover:text-gray-400 transition-all">
        As a passionate junior developer deeply immersed in the world of coding,
        driven by a fervent enthusiasm for software development. Eager to learn,
        adapt, and contribute within dynamic tech environments. I search to
        honing skills, embracing new technologies, and crafting innovative
        solutions.
      </p>
      <BiSolidQuoteAltRight className="bg-my-green p-3 text-6xl rounded-full text-white " />
    </div>
  );
}

export default About;
