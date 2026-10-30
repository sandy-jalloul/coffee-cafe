import React from "react";
import BackgroundImg from "../../assets/website/backgroundDark.jpeg";
import AppStoreImg from "../../assets/website/appStore.png";
import PlayStoreImg from "../../assets/website/playStore.jpg";
const bgImage = {
  backgroundImage: `url( ${BackgroundImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};
const AppStore = () => {
  return (
    <div style={bgImage} className="py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl text-white/90 pl-3 font-semibold">
              Coffee Cafe is available for Android and IOS
            </h1>

            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
              <a href="#">
                <img src={AppStoreImg} alt="" className="h-12 w-auto"></img>
              </a>
              <a href="#">
                <img src={PlayStoreImg} alt="" className="h-11 w-auto"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
