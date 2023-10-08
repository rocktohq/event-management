import PropTypes from 'prop-types'
import { FaCartArrowDown, FaHeart } from 'react-icons/fa';
import { saveLocalStorageData } from '../../utils/localStorage';
import toast from 'react-hot-toast';

const Service = ({ service }) => {

  const { id, title, image, price, longDescription } = service;

  const handleAddBtn = (id, option) => {

    // Save to LocalStorage
    const save = saveLocalStorageData(id, option);
    save ? toast.error(`Service already exists in your ${option}`) : toast.success(`Service added to your ${option}`);

  }

  return (
    <section className="mb-12 md:mb-16 lg:mb-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <figure className="w-full h-full flex-1">
          <img className="w-full h-full rounded-md" src={image} alt={title} />
        </figure>
        <div className="space-y-5 flex-1">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-500">{longDescription}</p>
          <p className="bg-cyan-100 rounded px-5 py-2 w-fit font-bold">Price: ${price}</p>
          <div className="flex flex-col lg:flex-row gap-5">
            <button onClick={() => handleAddBtn(id, "wishlist")} className="btn btn-primary rounded flex-1"><FaHeart /> Add to Wishlist</button>
            <button onClick={() => handleAddBtn(id, "cart")} className="btn btn-primary rounded flex-1"><FaCartArrowDown /> Add to Cart</button>
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