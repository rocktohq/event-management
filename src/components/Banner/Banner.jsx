import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="py-10 md:py-12 lg:py-16 bg-purple-50">
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
          <div className="flex-1">
            <h1 className="text-2xl text-center md:text-left md:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-700 to-purple-500 bg-clip-text text-transparent pb-5">{`Let's Plan Your Next Event Together`}</h1>
            <p className="text-justify text-gray-500">
              Discover the art of exceptional event planning at <span className="text-primary">eManage</span>. From enchanting weddings and joyful birthdays to meaningful retirements, we specialize in creating unforgettable moments tailored to your unique vision. Our dedicated team, crafts seamless experiences infused with your personal touch.
            </p>
          </div>
          <figure className="flex-1">
            <img className="rounded-md" src={BannerImg} alt="Banner Image" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Banner
