import carousel1 from "../../assets/CarouselImg/carousel1.jpg";
import carousel2 from "../../assets/CarouselImg/carousel2.jpg";
import carousel3 from "../../assets/CarouselImg/carousel3.jpg";

export default function HomeCarousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide  md:h-[22rem]  mt-[1.5rem] mx-[1rem] md:mx-[7rem] rounded-[5px] overflow-hidden"
      data-bs-ride="carousel"
    >
      {/* indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner h-full">
        <div className="carousel-item active h-full">
          <img
            src={carousel1}
            className="d-block w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Big Sale</h5>
            <p>Best offers on trending products</p>
          </div>
        </div>

        <div className="carousel-item h-full">
          <img
            src={carousel2}
            className="d-block w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>New Arrivals</h5>
            <p>Fresh styles just for you</p>
          </div>
        </div>

        <div className="carousel-item h-full">
          <img
            src={carousel3}
            className="d-block w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Special Discounts</h5>
            <p>Limited time offers</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
