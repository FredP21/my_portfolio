import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import traduction from "../utils/traduction";
import { useTheme1 } from "../context/LanguageContext";

function About() {
  const { language } = useTheme1();

  return (
    <div className="px-8 mt-12  text-center flex flex-col items-center">
      <p className="text-[4vw] font-bold">{traduction[language].pres2}</p>
      <BiSolidQuoteAltLeft className="bg-my-green p-3 text-6xl rounded-full text-white mt-5" />
      <p className="my-5 text-[2.5vw] text-gray-300 hover:text-gray-400 transition-all">
        {traduction[language].desc}
      </p>
      <BiSolidQuoteAltRight className="bg-my-green p-3 text-6xl rounded-full text-white " />
    </div>
  );
}

export default About;
