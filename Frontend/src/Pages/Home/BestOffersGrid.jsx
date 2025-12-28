import bestOffersProducts from "./BestOffersProducts.jsx";

function BestOffersGrid() {
  return (
    <div className="flex flex-wrap gap-2 mx-[0.5rem] md:mx-[7rem] my-6">
      {bestOffersProducts.map((p) => (
        <a
          key={p.id}
          href={p.link}
          className="block w-[45%] sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[18%] mx-[0.4rem] !no-underline !text-inherit"
        >
          <div
            className="
              flex flex-col bg-white overflow-hidden rounded-[3px]
              shadow-[0_2px_4px_rgba(0,0,0,0.3)]
              transition-all duration-300 hover:shadow-lg
              h-[15rem] md:h-[18rem]
            "
          >
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
      ))}
    </div>
  );
}

export default BestOffersGrid;
