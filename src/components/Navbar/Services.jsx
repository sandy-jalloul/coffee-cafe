import React from "react";
import Img2 from "../../assets/website/espressoCup.png";
import Img3 from "../../assets/website/Amricanoo.png";
import Img4 from "../../assets/website/Cappuccinoo.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description: "Strong and rich coffee flavor",
    aosdelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Americano",
    description: "Smooth coffee with a rich aroma",
    aosdelay: "300",
  },
  {
    id: 3,
    img: Img4,
    name: "Cappuccino",
    description: "Creamy milk with rich espresso",
    aosdelay: "500",
  },
];

const Services = () => {
  return (
    <div id="services" className="py-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-cursive font-bold text-gray-800">
            Best Coffee For You
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosdelay}
                key={data.id}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300] group relative "
              >
                <div className="h-[122]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[200] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                  ></img>
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold text-black ">{data.name}</h1>
                  <p className="text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
