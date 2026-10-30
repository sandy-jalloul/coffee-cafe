import React from "react";
import img from "../../assets/website/seedCoffee.webp";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const FooterLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];
const Address = [
  {
    name: "Nadia, Germany",
    number: "+491234567890",
  },
];
const BgImage = {
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const Footer = () => {
  return (
    <div style={BgImage}>
      <div className="container w-full mx-auto">
        <div className="flex flex-col items-start justify-center gap-4 space-y-4">
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-white font-cursive">
              Coffee Cafe
            </h1>
            <p className="text-sm text-white mt-2">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments - Your Perfect
              Espresso Escape
            </p>
          </div>
          <div className="rounded-2xl bg-primary hover:bg-secondary/25 transition-all duration-300 cursor-pointer mt-2">
            <button className="text-sm text-white font-semibold py-2 px-4">
              Visit our YouTube Channel
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className="text-lg font-bold text-white">Footer Links</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              {FooterLinks.map((data) => (
                <a key={data.name} href={data.link} className="text-white">
                  {data.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Quick Links</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              {FooterLinks.map((data) => (
                <a key={data.name} href={data.link} className="text-white">
                  {data.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Address</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              {Address.map((data) => (
                <div key={data.name} className="flex flex-col gap-2">
                  <p className="text-white">{data.name}</p>
                  <a href={`tel:${data.number}`} className="text-white">
                    {data.number}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <FaFacebook className="text-white text-2xl" />
              <FaLinkedinIn className="text-white text-2xl" />
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
