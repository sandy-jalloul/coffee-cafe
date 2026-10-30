import React from "react";
import img1 from "../../assets/website/berg.jpg";
import img2 from "../../assets/website/wald.jpg";
import img3 from "../../assets/website/night.png";
import img4 from "../../assets/website/wolf.jpg";
import sliderPkg from "react-slick";
const Slider = sliderPkg.default || sliderPkg;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const test = [
  {
    id: 1,
    bild: img1,
    description:
      "I absolutely love the coffe here! The taste is amazing, and the atmosphere is warm and relaxing. It is the perfect place to enjoy a delicious cup of coffee and spend some quality time with friends.",
    name: "Emily Parker",
  },
  {
    id: 2,
    bild: img2,
    description:
      "This cafe has become my favorite place to relax and enjoy fresh coffee. The service is excellent, and every cup is prepared with care. I highly recommend it to all coffee lovers.",
    name: "Daniel Smith",
  },
  {
    id: 3,
    bild: img3,
    description:
      "A wonderful place for coffee lovers! I enjoy the cozy atmosphere, the rich flavors, and the friendly service. Every visit feels special, and I always look forward to coming back. ",
    name: "Sophia Williams",
  },
  {
    id: 4,
    bild: img4,
    description:
      "The coffee is delicious, and the cafe has a beautiful and peaceful atmosphere. It is a great place to meet friends, read a book, or simply enjoy a relaxing break during the day.",
    name: "Oliver James",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white/50">
      <div className="container mx-auto flex flex-col items-center gap-8 py-10">
        <div className="text-center mb-20 w-full">
          <h1 className="text-4xl font-cursive font-bold text-gray-800">
            Testimonials
          </h1>
          <div className="w-full">
            <Slider {...settings}>
              {test.map((data) => {
                return (
                  <div className="my-6 px-2" key={data.id}>
                    <div className="flex h-80 w-full max-w-90 mx-auto flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-primary/10 relative">
                      <div className="mb-4">
                        <img
                          src={data.bild}
                          alt=""
                          className="rounded-full w-20 h-20 "
                        ></img>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                          <p className="text-xs text-gray-500">
                            {data.description}
                          </p>
                          <h1 className="text-xl font-bold text-black/60 font-cursive">
                            {data.name}
                          </h1>
                        </div>
                      </div>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
