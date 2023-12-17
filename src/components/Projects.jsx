import { useTheme1 } from "../context/LanguageContext";
import traduction from "../utils/traduction";

function Projects() {
  const { language } = useTheme1();

  const descProjet1 = traduction[language].descProject1;
  const descProjet2 = traduction[language].descProjet2;
  const descProjet3 = traduction[language].descProjet3;
  const projectList = [
    {
      id: 1,
      title: "Rest-0",
      imgUrl: "src/assets/pjt1.webp",
      url: "https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-FNAC/",
      desc: descProjet1,
    },
    {
      id: 2,
      title: "HogwartsDay",
      imgUrl: "src/assets/pjt2.webp",
      url: "https://truestupeflix.vercel.app/",
      desc: descProjet2,
    },
    {
      id: 3,
      title: "Babyplace",
      imgUrl: "src/assets/pjt3.webp",
      url: "/#",
      desc: descProjet3,
    },
  ];

  return (
    <div
      className=" px-2 md:px-8 mt-10 lg:h-screen md:flex md:flex-col md:justify-around"
      id="projects"
    >
      <div className="flex items-center mb-5 md:mb-0">
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
        <div className="w-full border-[1px] mx-4 mt-[-2px]" />
        <h2 className="font-medium text-[4vw] md:text-[2vw]">
          {traduction[language].nameTitle}
        </h2>
        <div className="w-full border-[1px] mx-4 mt-[-2px]" />
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
      </div>
      <div className="flex flex-col gap-10 items-center lg:flex-row justify-around mt-10">
        {projectList.map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className=" w-[100%] rounded-lg shadow-my-shadow flex flex-col justify-center items-center gap-5 md:h-[350px] lg:w-[40%] lg:hover:scale-110 transition-all ease-in-out"
          >
            <h2 className="font-medium text-[2vw] mt-3 underline">
              {project.title}
            </h2>
            <img
              src={project.imgUrl}
              alt="Picture of differents project"
              className=" object-contain w-[97%] h-40 md:object-cover"
            />
            <p className="hidden md:block italic mb-3 px-5 text-gray-400">
              {project.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
