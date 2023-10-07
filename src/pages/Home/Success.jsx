import Aos from "aos";
import { useEffect } from "react";
import { FaGifts, FaLocationArrow, FaPeopleCarry } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

const Success = () => {

  // AOS Init
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',

    });
  }, [])


  return (
    <>
      <div className="max-w-screen-md mx-auto bg-red-300 p-5 rounded-3xl hidden lg:flex justify-between text-center text-white lg:-mt-28">
        <div className="flex gap-5 justify-center items-center">
          <FaPeopleCarry className="text-7xl" />
          <div>
            <h4 className="text-2xl font-bold">1500+</h4>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <FaGifts className="text-7xl" />
          <div><h4 className="text-2xl font-bold">1200+</h4>
            <p> Decorations</p></div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <FaLocationArrow className="text-7xl" />
          <div>
            <h4 className="text-2xl font-bold">450+</h4>
            <p>Locations</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:pt-10">
        <div className="flex-1" data-aos="fade-up">
          <h2 className="text-2xl text-center md:text-left md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-5">Explore our Management Services</h2>
          <p className="text-gray-500 mt-5">We ensure our services quality over quantity. Check out our success rate.</p>
        </div>
        <div className="flex-1" data-aos="fade-down">
          <p className="text-xl font-medium text-gray-600">Professionality</p>
          <ProgressBar completed="85" animateOnRender={true} />
          <p className="text-xl font-medium text-gray-600 mt-4">Food Ordering</p>
          <ProgressBar completed="70" animateOnRender={true} />
          <p className="text-xl font-medium text-gray-600 mt-4">Experience and Quality</p>
          <ProgressBar completed="90" animateOnRender={true} />
          <p className="text-xl font-medium text-gray-600 mt-4">Guarantee</p>
          <ProgressBar completed="80" animateOnRender={true} />
        </div>
      </div>
    </>
  )
}

export default Success
