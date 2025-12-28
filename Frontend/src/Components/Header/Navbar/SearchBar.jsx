import SearchIcon from "./SearchIcon";

export default function SearchBar() {
  return (
    <div className="flex ">
      <input
        type="text"
        placeholder="Search for shoes, mobiles, clothes…"
        className="border-[0.2px] border-black p-[0.5rem] rounded-[0.1rem] md:w-[20rem] lg:w-[25rem] xl:w-[38rem] h-[42px] outline-none ||Responsive--> hidden  md:block"
      />
      <SearchIcon className="hidden md:block"></SearchIcon>
    </div>
  );
}
