"use client";
import React from "react";
import { Link } from "react-scroll";
import { useAppContext } from "@/context";

const Navbar = () => {
  const { getData, getShirtByGender, filteringByGender } = useAppContext();

  return (
    <div>
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          {filteringByGender && (
            <Link
              className="navbar__link relative"
              to="products"
              smooth={true}
              duration={500}
              onClick={getData}
            >
              VER TODAS
            </Link>
          )}
          <Link
            className="navbar__link relative"
            to="products"
            smooth={true}
            duration={500}
            onClick={() => getShirtByGender("male")}
          >
            HOMENS
          </Link>
          <Link
            className="navbar__link relative"
            to="products"
            smooth={true}
            duration={500}
            onClick={() => getShirtByGender("female")}
          >
            MULHERES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
