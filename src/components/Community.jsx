import React from "react";
import twitter from "../assets/Twitter_QR.png";
import telegram from "../assets/Telegram_QR.png";
import whatsapp from "../assets/Whatsapp_QR.png";



const socials = [
  {
    id: 1,
    name: "Twitter",
    href: "https://x.com/kodespot",
    imageSrc: twitter,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Telegram",
    href: "https://t.me/kodespot",
    imageSrc: telegram,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Whatsapp",
    href: "https://bit.ly/kodespot",
    imageSrc: whatsapp,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

const Community = () => {
  return (
    <section className="bg-[#6468a6] flex ">
      <div className="mx-auto align-middle justify-center text-center items-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-white text-5xl font-bold tracking-tight ">
          Join our community
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2  lg:grid-cols-4 md:gap-x-[420px]">
          {socials.map((social) => (
            <div key={social.id} className=" text-white ">
              <div className="aspect-h-1  aspect-w-1 md:w-[400px] w-fit overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 md:h-96">
                <img
                  alt={social.imageAlt}
                  src={social.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                
              </div>
                  <a className="text-lg lg:ml-48 mt-10 text-white" href={social.href}>{social.name}</a>
                  <a className="text-lg lg:ml-48 mt-1 underline text-white" target="_blank" href={social.href}>{social.href}</a>
              
                
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
