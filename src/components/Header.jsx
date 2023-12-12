function Header() {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "PROJECTS",
    },
    {
      id: 3,
      name: "SKILLS",
    },
    {
      id: 4,
      name: "CONTACT",
    },
  ];
  return (
    <div className="flex items-center fixed w-full justify-between pr-10 border-b-2 bg-white">
      <div className="w-[90px] h-[90px]">
        <img src="src/assets/logo1.png" alt="my logo" />
      </div>
      <div className="flex gap-10 font-normal text-lg">
        {menu.map((item) => (
          <a
            href="/#"
            key={item.id}
            className="list-none cursor-pointer hover:underline hover:text-my-green"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
