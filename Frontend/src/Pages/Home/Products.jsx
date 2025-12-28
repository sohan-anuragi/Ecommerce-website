import BestOffersGrid from "./BestOffersGrid";
import ProductSlider1 from "./ProductSlider1";
import ProductSlider2 from "./ProductSlider2";
import HotDeals from "./HotDeals";
import ServiceHighlights from "./ServiceHighlights";

export default function Products() {
  return (
    <>
      <h className="p-[2rem] mt-[1rem]  mx-[5.2rem] text-[1.3rem] font-semibold ">
        Top Products
      </h>
      <ProductSlider1></ProductSlider1>
      <h className="p-[2rem] mt-[1rem]  mx-[5.2rem] text-[1.3rem] font-semibold ">
        New Arrivals
      </h>
      <ProductSlider2></ProductSlider2>
      <HotDeals></HotDeals>
      <ServiceHighlights></ServiceHighlights>
      <h className="p-[2rem] mt-[1rem]  mx-[5.2rem] text-[1.3rem] font-semibold ">
        Recommended Ror you
      </h>
      <BestOffersGrid></BestOffersGrid>
    </>
  );
}
