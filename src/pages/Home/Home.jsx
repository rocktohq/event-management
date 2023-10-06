
import Header from './../../components/Header/Header';
import Banner from './../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>eManage - Home</title>
      </Helmet>
      <Header></Header>
      <Banner></Banner>
      Home Page
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Home
