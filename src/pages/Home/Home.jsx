
import Header from './../../components/Header/Header';
import Banner from './../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Home = () => {

  const services = useLoaderData();

  return (
    <HelmetProvider>
      <Helmet>
        <title>eManage - Home</title>
      </Helmet>
      <Header></Header>
      <Banner></Banner>
      <main className="max-w-screen-xl mx-auto px-3">

        {/* Our Services */}
        <section className="my-12 md:my-16 lg:my-20">
          <h2 className="divider text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
              services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
          </div>
        </section>
      </main>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Home
