import Aos from "aos";
import { useEffect } from "react";
import W1 from "../../assets/flowers-circle.png";
import W2 from "../../assets/wedding-wall.png";
import W3 from "../../assets/chair.png";
import W4 from "../../assets/caleting.png";

const WhatWeDo = () => {

  // AOS Init
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',

    });
  }, [])

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="" data-aos="fade-down">
          <img className="" src={W1} alt="What We Do" />
        </div>
        <div className="" data-aos="fade-up">
          <img src={W2} alt="What We Do" />
        </div>
        <div className="" data-aos="fade-up">
          <img src={W3} alt="What We Do" />
        </div>
        <div className="" data-aos="fade-down">
          <img src={W4} alt="What We Do" />
        </div>
      </div>
      <div className="flex-1" data-aos="fade-down">
        <h2 className="text-2xl text-center md:text-left md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-5">What We Do, We Do With Passsion</h2>
        <p className="text-gray-500 mt-5">We love organising events because with every event you create experiences that people will remember. It is a chance to steal a little piece of someones heart and tell the story of your brand in the most human way by not pushing something at them but taking them on an emotional journey.</p>
      </div>
    </div>
  )
}

export default WhatWeDo
