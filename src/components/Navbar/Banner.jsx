import React from "react";
import LogoCup from "../../assets/website/logocup.png";
import BgTexture from "../../assets/website/BgTexture.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const bgImage = {
  backgroundImage: `url( ${BgTexture} )`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <div id="about" style={bgImage}>
      <div className="container min-h-[550] flex justify-center items-center py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={LogoCup}
              alt="LogoCup"
              className="max-w-[430] w-full mx-auto spin drop-shadow-[10_-10_12_rgba(0,0,0,1)]"
            ></img>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-cursive font-bold text-gray-800">
              Premium Blend Coffee
            </h1>
            <p className="text-sm font-sans text-gray-500 tracking-wide leading-5">
              Our premium blend is crafted from hand-picked beans, roasted
              slowly to bring out a rich aroma and a smooth, balanced flavor in
              every cup.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100"></GrSecure>
                  <span>Premium Coffe</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoFastFood className="text-2xl w-12 h-12 shadow-sm p-3 rounded-full bg-orange-100"></IoFastFood>
                  <span>Hot Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <GiFoodTruck className="text-2xl w-12 h-12 shadow-sm p-3 rounded-full bg-yellow-100"></GiFoodTruck>
                  <span>Cold Coffee</span>
                </div>
              </div>
              <div className="border-l-4 border-primary/50 pl-6 space-y-3">
                <h1 className="text-2xl font-cursive font-semibold">
                  Tea Lover
                </h1>
                <p className="text-gray-500 text-sm">
                  {" "}
                  Much like writing code, brewing the perfect cup of tea
                  requires patience, precision, and a dash of passion to create
                  a comforting blend of flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
