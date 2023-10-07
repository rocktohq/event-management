import PropTypes from 'prop-types'
import { FaCartArrowDown, FaHeart } from 'react-icons/fa';

const Service = ({ service }) => {

  const { title, image, price, longDescription } = service;

  const handleAddBtn = (option) => {
    console.log(option);
  }

  return (
    <section className="my-12 md:my-16 lg:my-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <figure className="w-full h-full flex-1">
          <img className="w-full h-full rounded-md" src={image} alt={title} />
        </figure>
        <div className="space-y-5 flex-1">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-500">{longDescription}</p>
          <p>Price: ${price}</p>
          <div className="flex flex-col lg:flex-row gap-5">
            <button onClick={() => handleAddBtn("wishlist")} className="btn btn-primary rounded flex-1"><FaHeart /> Add to Wishlist</button>
            <button onClick={() => handleAddBtn("cart")} className="btn btn-primary rounded flex-1"><FaCartArrowDown /> Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service

Service.propTypes = {
  service: PropTypes.object
}