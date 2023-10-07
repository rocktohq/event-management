import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Client1 from "../../assets/client1.jpg";
import Client2 from "../../assets/client2.jpg";
import Client3 from "../../assets/client3.jpg";
import Client4 from "../../assets/client4.jpg";
import Client5 from "../../assets/client5.jpg";

const HappyClients = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <img className='lg:w-56 lg:h-56 rounded-md lg:rounded-full' src={Client1} alt="" />
            <div>
              <h3 className='font-semibold'>Jason Backer</h3>
              <p>Absolutely Phenomenal Service! eManage turned our wedding into a fairytale. Their attention to detail and personalized approach made our day truly magical.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <img className='lg:w-56 lg:h-56 rounded-md lg:rounded-full' src={Client2} alt="" />
            <div>
              <h3 className='font-semibold'>Johny Depp</h3>
              <p>Incredible Experience! eManage managed my birthday party flawlessly. They understood my vision perfectly and executed it beyond my expectations.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <img className='lg:w-56 lg:h-56 rounded-md lg:rounded-full' src={Client3} alt="" />
            <div>
              <h3 className='font-semibold'>Amelia Lottie</h3>
              <p>Exemplary Professionalism! We hired eManage for our baby shower event, and they delivered exceptional service.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <img className='lg:w-56 lg:h-56 rounded-md lg:rounded-full' src={Client4} alt="" />
            <div>
              <h3 className='font-semibold'>Nicolas Watson</h3>
              <p>Best Decision Ever! Hiring eManage for our retirement party was the best decision we made. They took care of every detail, allowing us to focus on celebrating.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <img className='lg:w-56 lg:h-56 rounded-md lg:rounded-full' src={Client5} alt="" />
            <div>
              <h3 className='font-semibold'>Natasa Willson</h3>
              <p>Exceptional Team! We recently had eManage plan our family reunion, and we were blown away by their professionalism and creativity.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HappyClients
