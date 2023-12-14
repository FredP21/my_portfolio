import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../lotties/enveloppe.json";

function Contact() {
  return (
    <div
      className="md:h-screen px-2 mt-10 md:px-8 md:flex md:flex-col md:justify-around"
      id="contact"
    >
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
        <div className="w-full border-[1px] mx-4" />
        <h2 className="font-medium text-[2vw]">CONTACT</h2>
        <div className="w-full border-[1px] mx-4" />
        <div className="w-[20px] h-[7px] bg-my-green rounded-full" />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <h2 className="text-[4vw] md:text-[2.5vw] text-gray-400 font-medium md:mt-[-250px]">
          You can contact me here !
        </h2>
        <div className="mt-12 md:grid grid-cols-2 w-full">
          <div className="hidden md:block">
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <div className="grid col-span-1 w-full">
            <form
              action="onS"
              className=" flex flex-col justify-center gap-1 w-full"
            >
              <label htmlFor="name"> Name:</label>
              <input
                id="name"
                autoComplete="name"
                type="text"
                placeholder="Enter your name"
                className="border-[1px] text-center w-full"
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                autoComplete="email"
                type="text"
                placeholder="Enter your email"
                className=" border-[1px] text-center w-full"
              />
              <label htmlFor="message">Have you got feedbacks?</label>
              <textarea
                className="border-[1px] resize-none text-center"
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="Enter your message here"
              />
              <button
                type="submit"
                className="border-[1px] p-1 my-2 shadow-my-shadow rounded-lg flex justify-center items-center w-[200px] mx-auto hover:scale-110 transition-all ease-in-out
            "
              >
                Send your message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
