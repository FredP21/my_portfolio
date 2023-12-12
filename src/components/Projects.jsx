function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Rest-0",
      imgUrl: "src/assets/pjt1.png",
      url: "https://wildcodeschool-2023-09.github.io/JS-RemoteFR-jurascripts-P1-FNAC/",
      desc: "A 3-way website project for a series of fictitious restaurants using HTML, CSS and VanillaJS ",
    },
    {
      id: 2,
      title: "FPortfolio",
      imgUrl: "src/assets/pjt2.png",
      url: "/#",
      desc: "My personal portfolio, a kind of digital presentation of my knowledge and projects using React.js and Tailwind  ",
    },
    {
      id: 3,
      title: "Babyplace",
      imgUrl: "src/assets/pjt3.png",
      url: "/#",
      desc: "Our latest group project aims to optimize nursery places, with a back-end in Express.js and a front-end in React.js. ",
    },
  ];

  return (
    <div className="px-12 mt-10">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
        <div className="w-full border-[1px] mx-4 mt-[-2px]" />
        <h2 className="font-medium text-[2vw]">PROJECTS</h2>
        <div className="w-full border-[1px] mx-4 mt-[-2px]" />
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
      </div>
      <div className="flex flex-col gap-10 items-center lg:flex-row justify-around my-10">
        {projectList.map((project) => (
          <a
            href={project.url}
            key={project.id}
            className="rounded-lg shadow-my-shadow flex flex-col justify-center items-center gap-5 md:h-[350px] lg:w-[40%] lg:hover:shadow-my-shadow hover:scale-110 transition-all ease-in-out"
          >
            <h2 className="font-medium text-[2vw] mt-3 underline">
              {project.title}
            </h2>
            <img
              src={project.imgUrl}
              alt="Picture of differents project"
              className=" w-[97%] h-40 object-cover"
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
