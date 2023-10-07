import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import WeAre from "./WeAre"
import WhatWeDo from "./WhatWeDo"

const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Header></Header>
      <main>
        {/* Who We Are */}
        <section className="py-10 md:py-12 lg:py-16 bg-purple-50">
          <div className="max-w-screen-xl mx-auto px-3">
            <h2 className="divider text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-10">Who We Are</h2>
            <WeAre></WeAre>
          </div>
        </section>
        {/* What We Do */}
        <section className="py-10 md:py-12 lg:py-16 bg-cyan-50">
          <div className="max-w-screen-xl mx-auto px-3">
            <h2 className="divider text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent py-10">What We Do</h2>
            <WhatWeDo></WhatWeDo>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default About
