// APPLY ALL BELOW INSTRUCTIONS TO THIS FILE ONLY

import products from "./ProductsData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductSlider1() {
  return (
    <div className="relative mt-3 mb-[3rem] mx-[1rem] md:mx-[7rem] ">
      {/* ARROWS → desktop only (CSS se control) */}
      <div className="swiper-button-prev hidden lg:flex !text-gray-700 hover:!text-black !left-[-3rem]" />
      <div className="swiper-button-next hidden lg:flex !text-gray-700 hover:!text-black !right-[-3rem]" />

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        speed={600}
        loop={true} // 🔒 stable (breakpoints me toggle nahi)
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true, // 🔒 always ON, CSS se hide karenge
        }}
        className="w-full"
        /* RESPONSIVE SLIDES ONLY */
        breakpoints={{
          0: {
            slidesPerView: 2.2, // 📱 2–2.5 look
            spaceBetween: 3,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 5, // 💻 laptop normal
            spaceBetween: 8,
          },
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <a
              href={p.link}
              className="block h-full mx-[0.4rem] !no-underline !text-inherit"
            >
              <div
                className="
                  flex flex-col bg-white overflow-hidden rounded-[3px]
                  shadow-[0_1px_3px_rgba(0,0,0,0.2)]
                  transition-all duration-300 hover:shadow-lg
                  h-[15rem] md:h-[18rem]   /* 📱 mobile smaller card */
                "
              >
                {/* IMAGE */}
                <div className="w-full h-[65%] relative overflow-hidden">
                  {p.discountPercent && (
                    <span className="absolute top-2 left-2 z-10 text-[10px] font-semibold bg-yellow-400 text-black px-2 py-[2px] rounded">
                      {p.discountPercent}% OFF
                    </span>
                  )}

                  <img
                    src={p.image}
                    alt={p.detail}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* DETAILS */}
                <div className="h-[35%] p-2 flex flex-col justify-between">
                  <p className="text-[0.85rem] md:text-xs text-gray-500 leading-snug">
                    {p.detail}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-lg font-bold text-yellow-500">
                      ₹{p.price}
                    </span>

                    {p.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ₹{p.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION → desktop pe hide */}
      <style>{`
  /* Pagination desktop (>1024px) hide */
  @media (min-width: 1024px) {
    .swiper-pagination {
      display: none !important;
    }
  }

  /* Arrows mobile (<720px) hide */
  @media (max-width: 720px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none !important;
    }
  }
`}</style>
    </div>
  );
}

export default ProductSlider1;
