import Aos from "aos";
import { useEffect } from "react";
import Planner from "../../assets/planner.jpg";

const WeAre = () => {
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
      <div className="flex-1" data-aos="fade-up">
        <h2 className="text-2xl text-center md:text-left md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-5">Planner for Your Perfect Event</h2>
        <p className="text-gray-500 mt-5">At Planner for Your Perfect Event, we specialize in turning dreams into unforgettable experiences. With meticulous attention to detail and a passion for creativity, we craft seamless and tailor-made events that reflect your unique style and vision.</p>
      </div>
      <figure className="flex-1">
        <img className="rounded-md" src={Planner} alt="Who We Are" />
      </figure>
    </div>
  )
}

export default WeAre
