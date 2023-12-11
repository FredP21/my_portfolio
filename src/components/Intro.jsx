function Intro() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px]" />
      <div className="w-[5px] h-[5px] bg-my-green rounded-full" />
      <h2 className="mt-5 tracking-wider text-lg">HELLO, MY NAME IS</h2>
      <h2 className="text-6xl font-bold tracking-widest mt-5">
        FREDERIC <br /> <br />
        PELLETIER
      </h2>
      <img
        src="src/assets/avatar1.jpg"
        alt="a picture of an avatar of me"
        className="w-40 h-40 bg-gray-100 p-4 rounded-full mt-7"
      />
    </div>
  );
}

export default Intro;
