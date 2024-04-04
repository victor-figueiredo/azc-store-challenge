"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { useAppContext } from "@/context";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pausedOnHover: false,
    speed: 500,
  };

  const slideData = [
    {
      id: 1,
      img: "/assets/images/banner1.png",
      title: "IMPERDÍVEL!",
      mainTitle: "Para elas",
      price: "$100",
    },
    {
      id: 2,
      img: "/assets/images/banner2.png",
      title: "SE PRESENTEIE!",
      mainTitle: "DESCONTÃO!",
      price: "$100",
    },
    {
      id: 3,
      img: "/assets/images/banner3.png",
      title: "AS MELHORES PEÇAS!",
      mainTitle: "Aproveite!",
      price: "$100",
    },
  ];
  const { searching, setSearching } = useAppContext();

  return (
    <div className={`${searching !== "" && "hidden"} `}>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
