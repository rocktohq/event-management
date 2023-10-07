import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Client1 from "../../assets/client1.jpg";
import Client2 from "../../assets/client2.jpg";
import Client3 from "../../assets/client3.jpg";
import Client4 from "../../assets/client4.jpg";
import Client5 from "../../assets/client5.jpg";

const HappyClients = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='flex gap-5'>
            <img className=' w-64 h-64 rounded-full' src={Client1} alt="" />
            <div>
              <h3 className='font-semibold'>Jason Backer</h3>
              <p>Absolutely Phenomenal Service! eManage turned our wedding into a fairytale. Their attention to detail and personalized approach made our day truly magical. Our guests could not stop raving about how seamless and beautiful everything was. Thank you for making our dreams come true!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex gap-5'>
            <img className=' w-64 h-64 rounded-full' src={Client2} alt="" />
            <div>
              <h3 className='font-semibold'>Jason Backer</h3>
              <p>Incredible Experience! [Your Company Name] managed my birthday party flawlessly. They understood my vision perfectly and executed it beyond my expectations. The teams creativity and dedication shone through, creating an event that was not only visually stunning but also incredibly enjoyable. I can not thank them enough for their outstanding work!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex gap-5'>
            <img className=' w-64 h-64 rounded-full' src={Client3} alt="" />
            <div>
              <h3 className='font-semibold'>Jason Backer</h3>
              <p>Exemplary Professionalism! We hired eManage for our baby shower event, and they delivered exceptional service. From the planning stages to the event day, their team was efficient, organized, and attentive to our companys specific needs. The event was a grand success, and our clients were highly impressed. We will definitely be working with them again!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex gap-5'>
            <img className=' w-64 h-64 rounded-full' src={Client4} alt="" />
            <div>
              <h3 className='font-semibold'>Jason Backer</h3>
              <p>Best Decision Ever! Hiring eManage for our retirement party was the best decision we made. They took care of every detail, allowing us to focus on celebrating. The decor, entertainment, and overall ambiance were perfect. Our guests were delighted, and we could not have asked for a better send-off into retirement. Thank you for making it unforgettable!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex gap-5'>
            <img className=' w-64 h-64 rounded-full' src={Client5} alt="" />
            <div>
              <h3 className='font-semibold'>Jason Backer</h3>
              <p>Exceptional Team! We recently had eManage plan our family reunion, and we were blown away by their professionalism and creativity. Despite the diverse needs of our family, they managed to create an event that pleased everyone. The coordination was seamless, and the activities were engaging for all age groups. Our family had a fantastic time, and we are grateful to [Your Company Name] for making our reunion a memorable experience!</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HappyClients
