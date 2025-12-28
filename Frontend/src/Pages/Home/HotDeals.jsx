import hotDealsProducts from "./HotDealsProducts.jsx";

function HotDeals() {
  return (
    <div className="w-full bg-[#fc8403] p-[1.5rem] mb-[3rem]">
      <h className="p-[2rem] mt-[1rem] text-[black]  mx-[5.2rem] text-[1.3rem] font-semibold ">
        Hote Deals
      </h>
      <div className="flex flex-wrap gap-3 p-[1rem] md:px-[5rem] lg:px-[7rem] py-6">
        {hotDealsProducts.map((p) => (
          <a
            key={p.id}
            href={p.link}
            className="block w-full sm:w-[calc(45%-0.375rem)] lg:w-[calc(28.333%-0.5rem)] !no-underline !text-inherit"
          >
            <div
              className="
                flex flex-row bg-white overflow-hidden rounded-[3px]
                shadow-[0_1px_3px_rgba(0,0,0,0.2)]
                transition-all duration-300 hover:shadow-lg
                h-[6rem] md:h-[8rem]
              "
            >
              <div className="w-[55%] relative overflow-hidden">
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

              <div className="w-[45%] p-2 flex flex-col justify-between">
                <p className="text-[0.8rem] md:text-xs text-gray-500 leading-snug">
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
        ))}
      </div>
    </div>
  );
}

export default HotDeals;
