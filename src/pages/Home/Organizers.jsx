import AOS from "aos";
import Member1 from "../../assets/team-1.jpg";
import Member2 from "../../assets/team-2.jpg";
import Member3 from "../../assets/team-3.jpg";
import Member4 from "../../assets/team-4.jpg";
import { useEffect } from "react";

const Organizers = () => {

  // AOS Init
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',

    });
  }, [])

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1" data-aos="fade-up">
        <h2 className="text-2xl text-center md:text-left md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-5">Meet Our Creative Event Organizer Team</h2>
        <p className="text-gray-500 mt-5">Our strong event management team covers back and front of house processes to ensure each element of in-person events is executed flawlessly. </p>
      </div>
      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="w-64 h-64 overflow-hidden" data-aos="fade-down">
          <img className="" src={Member1} alt="Team Member-1" />
        </div>
        <div className="w-64 h-64 overflow-hidden" data-aos="fade-left">
          <img src={Member2} alt="Team Member-2" />
        </div>
        <div className="w-64 h-64 overflow-hidden" data-aos="fade-up">
          <img src={Member3} alt="Team Member-3" />
        </div>
        <div className="w-64 h-64 overflow-hidden" data-aos="fade-right">
          <img src={Member4} alt="Team Member-4" />
        </div>
      </div>
    </div>
  )
}

export default Organizers
