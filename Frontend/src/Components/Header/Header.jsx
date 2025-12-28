import { useEffect, useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import NavBar from "./Navbar/NavBar";
import HeaderData from "./Store";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 `}
    >
      <HeaderData>
        <NavBar scrolled={scrolled} />
        <Dropdown />
      </HeaderData>
    </header>
  );
}
