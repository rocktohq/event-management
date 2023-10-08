import { Helmet, HelmetProvider } from "react-helmet-async"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useLoaderData } from "react-router-dom"
import ServiceCard from "../Shared/ServiceCard/ServiceCard"
import { useState } from "react"

const AllServices = () => {

  const [showServices, setShowServices] = useState(8);
  const services = useLoaderData();

  return (
    <HelmetProvider>
      <Helmet>
        <title>All Services</title>
      </Helmet>
      <Header></Header>
      <main>
        {/* All Services */}
        <section className="mb-12">
          <div className="max-w-screen-xl mx-auto px-3">
            <h2 className="divider text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-10">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {
                services?.slice(0, showServices).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)

              }
            </div>
            <div className={`text-center mt-10 ${showServices >= services.length && "hidden"}`}>
              <button onClick={() => setShowServices(services.length)} className="btn btn-primary rounded">Show All</button>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default AllServices
