import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../utils/localStorage";
import LocalServiceCard from "../pages/Shared/LocalServiceCard/LocalServiceCard";
import { useState } from "react";

const Wishlist = () => {

  const [showServices, setShowServices] = useState(4);

  const allServices = useLoaderData();
  const localCart = getLocalStorageData("wishlist");
  const wishlistServices = allServices.filter(service => localCart.includes(service.id));

  return (
    <HelmetProvider>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <Header></Header>
      <section className="pb-10 md:py-12 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-3">
          <h2 className="divider text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-16">Wishlist</h2>

          {
            wishlistServices?.length > 0
              ?
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                  wishlistServices?.slice(0, showServices).map(service => <LocalServiceCard key={service.id} service={service} option="wishlist"></LocalServiceCard>)
                }
              </div>
              : <h3 className="text-3xl font-bold text-center">Wishlist is empty!</h3>
          }
          <div className={`text-center mt-10 ${showServices >= wishlistServices.length && "hidden"}`}>
            <button onClick={() => setShowServices(wishlistServices.length)} className="btn btn-primary rounded">Show All</button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Wishlist
