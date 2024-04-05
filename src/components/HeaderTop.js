"use client";

// import Logo from "./Logo";
import { Search, AlignJustify, User, Heart, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { useAppContext } from "@/context";
import { useEffect, useState } from "react";

const HeaderTop = () => {
  const [search, setSearch] = useState("");
  const {
    searching,
    handleShirtSearch,
    getData,
    getShirtByGender,
    filteringByGender,
  } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    handleShirtSearch(search);
  };

  const handleClearSearch = () => {
    if (filteringByGender) {
      getShirtByGender(filteringByGender);
      return;
    }
    getData();
  };

  useEffect(() => {
    if (searching !== "" && search === "") {
      handleClearSearch();
    }
  }, [search, searching]);

  return (
    <nav className="bg-[#fff] border-b border-gray-200 sm:flex justify-between w-[100%] h-[76px] m-0">
      <div className="container py-4">
        <div className="flex sm:flex-row justify-between sm:items-center w-[90%] mx-auto">
          <Logo />
          <form
            onSubmit={handleSearch}
            className="w-[200px] sm:w-[300px] lg:w-[30%] relative"
          >
            <Search
              className="absolute left-0 top-0 ml-3 mt-3 text-[#737373]"
              size={20}
              type="submit"
            />
            <input
              className="border-[#737373] bg-transparent border-b p-2 pl-10 px-4 w-full"
              type="text"
              placeholder="Busque pelo nome..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
          <div className="hidden lg:flex gap-4 text-[#040000] text-[30px]">
            <div className="relative navbar_icon_wrapper hover:bg-[#040000] hover:text-[#fff]">
              <User />
            </div>

            <div className="relative navbar_icon_wrapper hover:bg-[#040000] hover:text-[#fff]">
              <Heart />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
            <div className="relative navbar_icon_wrapper hover:bg-[#040000] hover:text-[#fff]">
              <ShoppingBag />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
