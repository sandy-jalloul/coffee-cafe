import React from "react";
import Logo1 from "../../assets/website/beans2.png";

const Home = () => {
  return (
    <div id="home" className="min-h-[550] sm:min-h-[600] bg-brandDark flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="order-2 sm:order-1">
            <div className="flex flex-col items-start mt-16">
              <h1 className="text-xl sm:text-2xl lg:text-7xl font-bold font-sans text-white">
                We serve the richest{" "}
                <span className="text-primary font-cursive">Coffee</span> in the
                city
              </h1>
              <div className="mt-10 mb-20">
                <button className="bg-linear-to-r from-primary to-secondary border-2 border-primary text-white rounded-full py-2 px-4 hover:scale-105 duration-200 ">
                  Coffe And Code
                </button>
              </div>
            </div>
          </div>
          <div className="min-h-[450] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={Logo1}
              alt="Logo1"
              className="w-80 sm:w-90 sm:scale-110 mx-auto spin"
            ></img>
            <div className="bg-linear-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
              <h1 className="text-white font-bold">Hey Coder</h1>
            </div>
            <div className="bg-linear-to-r from-primary to-secondary absolute p-3 bottom-10 right-10 rounded-xl">
              <h1 className="text-white font-bold">Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
