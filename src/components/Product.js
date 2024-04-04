import React from "react";
import Image from "next/image";
import { useAppContext } from "@/context";

const Product = ({ id, img, title, desc, price, sizes, colors }) => {
  const { getShirtById } = useAppContext();

  return (
    <div
      className="px-4 border border-gray-200 rounded-xl max-w-[400px] cursor-pointer"
      onClick={() => getShirtById(id)}
    >
      <div className="max-w-[215px] max-h-[215px] overflow-hidden">
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={200}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-secondary font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <p className="text-gray-500 max-w-[200px] truncate textOverflow">
          Tamanhos:{" "}
          {sizes.map((s, index) => (
            <b key={index} className="w-[20px] h-[20px]">
              {s}
              {sizes.length - 1 === index ? "" : ", "}
            </b>
          ))}
        </p>
        <p className="text-gray-500 max-w-[200px] truncate textOverflow">
          Cores:{" "}
          {colors.map((s, index) => (
            <b key={index} className="w-[20px] h-[20px]">
              {s}
              {colors.length - 1 === index ? "" : ", "}
            </b>
          ))}
        </p>
        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default Product;
