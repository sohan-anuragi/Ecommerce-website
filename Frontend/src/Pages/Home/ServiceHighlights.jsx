import { FaTruck, FaCreditCard, FaLock, FaSync } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

function ServiceHighlights() {
  const services = [
    {
      id: 1,
      icon: <FaTruck className="text-3xl md:text-4xl text-gray-700" />,
      title: "Free Shipping",
      description: "Free shipping across all regions",
    },
    {
      id: 2,
      icon: <FaCreditCard className="text-3xl md:text-4xl text-gray-700" />,
      title: "Up to 12 Installments",
      description: "Easy EMI up to 12 installments",
    },
    {
      id: 3,
      icon: <FaLock className="text-3xl md:text-4xl text-gray-700" />,
      title: "Secure Payments",
      description: "Safe and encrypted payment system",
    },
    {
      id: 4,
      icon: <FaSync className="text-3xl md:text-4xl text-gray-700" />,
      title: "Easy Returns",
      description: "7 days easy return & exchange",
    },
  ];

  return (
    <div className="w-full bg-white py-8">
      <div className="px-[1rem] md:px-[7rem]">
        <Swiper
          modules={[Autoplay]}
          speed={600}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="w-full aspect-[6/2] flex flex-row items-center justify-center gap-3 py-3 pb-1 px-6 md:py-3 md:px-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-100 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h6 className="text-sm md:text-base font-semibold text-gray-800 text-center font-sans">
                    {service.title}
                  </h6>
                  <p className="text-xs md:text-sm text-gray-600 text-center leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServiceHighlights;
