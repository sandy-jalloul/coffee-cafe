import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home";
import Services from "./components/Navbar/Services";
import Banner from "./components/Navbar/Banner";
import AppStore from "./components/Navbar/AppStore";
import Testimonials from "./components/Navbar/Testimonials";
import Footer from "./components/Navbar/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
