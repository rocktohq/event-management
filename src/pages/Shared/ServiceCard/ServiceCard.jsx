import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

const ServiceCard = ({ service }) => {
  const { id, title, image, price, deal, features } = service;


  // AOS Init
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      once: true,
    });
  }, [])

  const aosEffects = ["fade-up", "fade-down"]
  const randomEffect = Math.floor(Math.random() * aosEffects.length);

  return (
    <div className="card p-0 shadow-lg flex flex-col justify-between rounded-md relative" data-aos={aosEffects[randomEffect]}>
      <figure className="h-48">
        <img className="w-full h-full" src={image} alt={title} />
      </figure>
      <div className="p-5">
        <div className="card-body p-0">
          <h2 className="font-bold">{title}</h2>
          <ul className="space-y-1 text-gray-500">
            {
              features && features.map((feature, idx) => <li key={idx} className="flex gap-1"><TiTick /> <span>{feature}</span></li>)
            }
          </ul>
        </div>
      </div>
      <div className="p-5">
        <p className="bg-cyan-100 rounded px-5 py-2 w-fit mb-3 text-gray-700">Price: $<span className="text-gray-500 font-bold text-2xl">{price}</span></p>
        <Link to={`/service/${id}`}><button className="btn btn-primary rounded w-full">View Details</button></Link>
      </div>
      {
        deal && <div className="absolute bg-red-600 text-white px-2 py-1 rounded-tl-md opacity-90">{deal}!</div>
      }
    </div>
  )
}

export default ServiceCard

ServiceCard.propTypes = {
  service: PropTypes.object
}