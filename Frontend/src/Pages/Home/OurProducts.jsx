import img1 from "../../assets/OurProducts/img1.png";
import img2 from "../../assets/OurProducts/img2.png";

export default function OurProducts() {
  return (
    <div className="flex flex-col h-70 md:h-[60] mt-[2rem] md:mt-[4rem] mx-[1rem] md:mx-[7rem] mb-[4rem] gap-2 sm:flex-row">
      <a href="#" className="group h-60 flex-1 overflow-hidden rounded-[5px]">
        <img
          src={img1}
          alt="Featured product 1"
          className="h-full w-full object-cover transition duration-300 ease-in-out transform group-hover:scale-102"
        />
      </a>
      <a href="#" className="group h-60 flex-1 overflow-hidden rounded-[5px]">
        <img
          src={img2}
          alt="Featured product 2"
          className="h-full w-full object-cover transition duration-300 ease-in-out transform group-hover:scale-102"
        />
      </a>
    </div>
  );
}
