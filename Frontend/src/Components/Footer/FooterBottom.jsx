import visa from "../../assets/FooterBottomLogo/visa.svg";
import mastercard from "../../assets/FooterBottomLogo/mastercard.svg";
import amex from "../../assets/FooterBottomLogo/amex.svg";
import paypal from "../../assets/FooterBottomLogo/paypal.svg";
import maestro from "../../assets/FooterBottomLogo/maestro.svg";
import discover from "../../assets/FooterBottomLogo/discover.svg";
import delhivery from "../../assets/FooterBottomLogo/delhivery.svg";

function FooterBottom() {
  return (
    <footer className="w-full p-[1rem] lg:px-[7rem] bg-[#333332] text-gray-300">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] md:text-xs">
          © 2025 Your Store. All rights reserved.
        </p>
        <div className="flex  items-center">
          <h className="font-semibold text-[0.6rem] text-white mb-2">
            Shipping method easy with us
          </h>
          <img
            src={delhivery}
            alt="Delhivery shipping"
            loading="lazy"
            className="h-5 md:h-6 w-auto"
          />
        </div>
        <div className="flex flex-col">
          <h className="font-bold text-[0.9rem] text-white mb-[0.5rem]">
            Payment options
          </h>
          <nav
            aria-label="Accepted payment methods"
            className="flex items-center gap-2"
          >
            <img
              src={visa}
              alt="Visa"
              loading="lazy"
              className="h-4 md:h-5 w-auto"
            />
            <img
              src={mastercard}
              alt="Mastercard"
              loading="lazy"
              className="h-4 md:h-5 w-auto"
            />
            <img
              src={amex}
              alt="American Express"
              loading="lazy"
              className="h-4 md:h-5 w-auto"
            />
            <img
              src={paypal}
              alt="PayPal"
              loading="lazy"
              className="h-4 md:h-5 w-auto"
            />
            <img
              src={maestro}
              alt="Maestro"
              loading="lazy"
              className="h-4 md:h-5 w-auto"
            />
            <img
              src={discover}
              alt="Discover"
              loading="lazy"
              className="h-4 md:h-5 w-auto"
            />
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
