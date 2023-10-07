import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
import { removeLocalStorageData } from '../../../utils/localStorage';
import toast from 'react-hot-toast';

const LocalServiceCard = ({ service, option }) => {

  const { id, title, image, price, shortDescription } = service;
  const navigate = useNavigate();

  const HandleRemoveService = (option, id) => {
    const removeData = removeLocalStorageData(option, id);
    if (removeData) {
      toast.success("Service Removed!");
      navigate(`/${option}`);
    }

    else toast.error("Something went Wrong!");
  }

  return (
    <div className="p-5 shadow-md rounded-md flex flex-col lg:flex-row gap-5 relative">
      <figure className="h-40">
        <img className="rounded-md h-full w-full" src={image} alt={title} />
      </figure>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 mt-4">{shortDescription}</p>
        <div className="flex justify-between mt-4">
          <p className="bg-cyan-100 rounded px-5 py-2 w-fit">${price}</p>
          <Link to={`/service/${id}`}><button className="btn btn-primary rounded">View Details</button></Link>
        </div>
      </div>
      <button onClick={() => HandleRemoveService(option, id)} className="btn btn-error rounded-full absolute text-white btn-sm -top-1 -right-1">X</button>
    </div>
  )
}

export default LocalServiceCard

LocalServiceCard.propTypes = {
  service: PropTypes.object,
  option: PropTypes.string
}