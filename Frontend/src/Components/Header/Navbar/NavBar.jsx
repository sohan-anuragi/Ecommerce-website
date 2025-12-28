import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

export default function NavBar({ scrolled }) {
  return (
    <>
      <nav
        className={`lg:pl-[5rem] lg:pr-[5rem] p-[0.9rem] flex justify-between md:justify-between items-center shadow-[0_0_2px_rgba(0,0,0,0.3)] transition-all duration-300 ${
          scrolled ? "py-2" : ""
        }`}
      >
        <Logo></Logo>
        <SearchBar></SearchBar>
        <NavLinks></NavLinks>
      </nav>
    </>
  );
}
