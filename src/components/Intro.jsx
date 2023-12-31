import { useTheme1 } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import traduction from "../utils/traduction";

function Intro() {
  const { theme } = useTheme();
  const { language } = useTheme1();
  const handleDownloadCV = () => {
    const pdfPath = "/CVFredP.pdf";

    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "CV_Pelletier_F.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Download error", error));
  };

  return (
    <div className="flex justify-center flex-col items-center" id="intro">
      <div className="h-[160px] border-r-[1px]" />
      <div className="w-[5px] h-[5px] bg-my-green rounded-full" />
      <h2 className="mt-5 tracking-wider text-[2.5vw]">
        {traduction[language].pres}
      </h2>
      <h2 className="text-[5vw] text-center font-bold tracking-widest mt-5">
        FREDERIC <br />
        PELLETIER
      </h2>
      <button
        type="button"
        onClick={handleDownloadCV}
        className={
          theme === "light"
            ? "button white font-medium text-xl mt-4"
            : "button black font-medium text-xl mt-4"
        }
      >
        {traduction[language].textButton}
        <span className="b1"></span>
        <span className="b2"></span>
        <span className="b3"></span>
        <span className="b4"></span>
      </button>
    </div>
  );
}

export default Intro;
