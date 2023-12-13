function Intro() {
  return (
    <div className="flex justify-center flex-col items-center" id="intro">
      <div className="h-[160px] border-r-[1px]" />
      <div className="w-[5px] h-[5px] bg-my-green rounded-full" />
      <h2 className="mt-5 tracking-wider text-[2.5vw]">HELLO, MY NAME IS</h2>
      <h2 className="text-[5vw] font-bold tracking-widest mt-5">
        FREDERIC <br />
        PELLETIER
      </h2>
      <img
        src="src/assets/avatar1.jpg"
        alt="a picture of an avatar of me"
        className="w-40 h-40 bg-my-green p-5 rounded-full mt-7"
      />
    </div>
  );
}

export default Intro;
