import { useTheme1 } from "../context/LanguageContext";

function Translator() {
  const { handleLanguage } = useTheme1();
  return (
    <div className="hidden md:block">
      <div className="switch1">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          onChange={handleLanguage}
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">FR</span>
        <span className="off">EN</span>
      </div>
    </div>
  );
}

export default Translator;
