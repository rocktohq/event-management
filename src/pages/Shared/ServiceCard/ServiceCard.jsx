import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { id, title, image, price, shortDescription } = service;


  // AOS Init
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',

    });
  }, [])

  const aosEffects = ["fade-up", "fade-down"]
  const randomEffect = Math.floor(Math.random() * aosEffects.length);

  return (
    <div className="card p-0 shadow-lg flex flex-col justify-between rounded-md" data-aos={aosEffects[randomEffect]}>
      <figure className="h-48">
        <img className="w-full h-full" src={image} alt={title} />
      </figure>
      <div className="p-5">
        <div className="card-body p-0">
          <h2 className="font-bold">{title}</h2>
          <p className="text-gray-500 text-justify">{shortDescription}</p>
          <p>Price: <span className="text-gray-500">${price}</span></p>
        </div>
      </div>
      <div className="p-5">
        <Link to={`/service/${id}`}><button className="btn btn-primary rounded w-full">View Details</button></Link>
      </div>
    </div>
  )
}

export default ServiceCard

ServiceCard.propTypes = {
  service: PropTypes.object
}