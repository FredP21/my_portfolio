import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../lotties/enveloppe.json";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import traduction from "../utils/traduction";
import { useTheme1 } from "../context/LanguageContext";

function Contact() {
  const { language } = useTheme1();
  const form = useRef();
  const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
  const handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    alert(traduction[language].alert);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
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
        <h2 className="text-[4vw] md:text-[2.5vw] font-medium md:mt-[-250px]">
          {traduction[language].contact}
        </h2>
        <div className="mt-12 md:grid grid-cols-2 w-full">
          <div className="hidden md:flex justify-center items-center">
            <Player
              autoplay
              loop
              src={animationData}
              className="h-[150px] w-[150px] lg:h-[300px] lg:w-[300px]"
            />
          </div>
          <div className="grid col-span-1 w-full">
            <form
              id="form"
              ref={form}
              onSubmit={handleSubmit}
              className=" flex flex-col justify-center gap-1 w-full"
            >
              <label htmlFor="name"> {traduction[language].labelName}:</label>
              <input
                id="name"
                autoComplete="name"
                type="text"
                placeholder={traduction[language].placeHolderName}
                required={true}
                className="border-[1px] text-center w-full"
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                autoComplete="email"
                type="email"
                placeholder={traduction[language].placeHolderEmail}
                required={true}
                className=" border-[1px] text-center w-full"
              />
              <label htmlFor="message">
                {traduction[language].labelMessage}
              </label>
              <textarea
                className="border-[1px] resize-none text-center"
                name="message"
                id="message"
                type="message"
                required={true}
                cols="10"
                rows="5"
                placeholder={traduction[language].placeHolderMessage}
              />
              <button
                type="submit"
                className="border-[1px] p-1 my-2 shadow-my-shadow rounded-lg flex justify-center items-center w-[200px] mx-auto hover:scale-110 transition-all ease-in-out
            "
              >
                {traduction[language].buttonMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
