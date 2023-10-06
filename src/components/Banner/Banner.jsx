import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-3 my-12 md:my-16 lg:my-20">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
        <div className="flex-1">
          <h1 className="text-2xl text-center md:text-left md:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent">{`Let's Plan Your Next Event Together`}</h1>
          <p className="mt-5 text-justify text-gray-500">
            Discover the art of exceptional event planning at <span className="text-primary">eManage</span>. From enchanting weddings and joyful birthdays to meaningful retirements, we specialize in creating unforgettable moments tailored to your unique vision. Our dedicated team, crafts seamless experiences infused with your personal touch.
          </p>
        </div>
        <figure className="flex-1">
          <img className="rounded-md" src={BannerImg} alt="Banner Image" />
        </figure>
      </div>
    </section>
  )
}

export default Banner
