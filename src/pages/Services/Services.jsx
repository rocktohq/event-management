import { useLoaderData, useParams } from "react-router-dom"
import Header from "../../components/Header/Header";
import Service from "./Service";
import Footer from "../../components/Footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Services = () => {

  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find(service => service.id === parseInt(id));

  return (
    <HelmetProvider>
      <Helmet>
        <title>{service.title}</title>
      </Helmet>
      <Header></Header>
      <main className="max-w-screen-xl mx-auto px-3">
        <Service service={service}></Service>
      </main>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Services
