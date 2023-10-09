import { Helmet, HelmetProvider } from "react-helmet-async"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { MdError } from "react-icons/md"
// import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

  // const error = useRouteError();
  // console.log(error);
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 not found!</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <div className="px-3 py-10 space-y-2">
          <MdError className="mx-auto text-7xl text-red-600">404</MdError>
          <h2 className="text-4xl font-bold text-center">Page Not Found!</h2>
          <p className="text-xl text-center">The page you are looking for, is not found!</p>
          <div className="text-center">
          <Link to="/"><button className="btn btn-primary rounded mt-5"><FaHome /> Go back to Home</button></Link>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default ErrorPage
