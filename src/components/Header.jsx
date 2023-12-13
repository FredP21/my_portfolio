import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="flex items-center fixed w-full md:justify-between md:pr-10 border-b-2 bg-white">
      <div className="w-[90px] h-[90px]">
        <img src="src/assets/logo1.png" alt="my logo" />
      </div>
      <ul className="grid grid-cols-2 gap-5 m-auto md:flex md:gap-10 font-normal text-lg">
        <Link to="intro" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            HOME
          </li>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            PROJECTS
          </li>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            SKILLS
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <li className="list-none cursor-pointer hover:underline hover:text-my-green">
            CONTACT
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
