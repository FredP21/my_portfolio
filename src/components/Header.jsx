function Header() {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "SKILLS",
    },
    {
      id: 3,
      name: "PROJECTS",
    },
    {
      id: 4,
      name: "CONTACT",
    },
  ];
  return (
    <div className="flex w-screen justify-between items-center pr-10">
      <div className="w-[90px] h-[90px]">
        <img src="src/assets/logo1.png" alt="my logo" />
      </div>
      <div className="hidden md:flex gap-10 font-normal text-lg">
        {menu.map((item) => (
          <li
            key={item.id}
            className="list-none cursor-pointer hover:underline hover:text-my-green"
          >
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Header;
