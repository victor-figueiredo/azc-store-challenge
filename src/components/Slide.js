import React from "react";
import Image from "next/image";

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div
        className="absolute left-0 max-w-[250px] sm:max-w-[350px] top-[50%]
        -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#fff] p-4 rounded-lg rounded-tl-none rounded-bl-none"
      >
        <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[24px] text-[#DE8A0E]">
          A partir de{" "}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">
            {price}.00
          </b>
        </h3>
      </div>
      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
