"use client";
import { Products } from "@/types/Products";
import Image from "next/image";
import { useState } from "react";

const Product = ({
  title,
  thumbnail,
  price,
  description,
  brand,
  warrantyInformation,
}: Products) => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="container mx-auto mt-6 lg:bg-white  ">
      <div className="gap-6  w-fit bg-white p-6 rounded-md md:flex  ">
        <div className="bg-gray-100 rounded-md  ">
          <Image
            loading="lazy"
            width={500}
            height={500}
            alt={title}
            src={thumbnail}
          />
        </div>
        <div className="w-fit lg:w-[32rem] flex justify-between flex-col">
          <div>
            <span className=" text-accent font-semibold text-sm">{brand}</span>
            <h1 className="text-xl font-semibold mb-1 mt-3 ">{title}</h1>
            <h2 className="text-lg font-medium mb-4">Rs.{price}</h2>
            <p className="text-gray-600">{description}</p>

            <p className="mt-8 text-md text-text mb-2 font-medium underline">
              Quantity
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setQuantity((prev) => {
                    if (prev > 1) {
                      return prev - 1;
                    }
                    return prev;
                  })
                }
                className="p-1 px-4 rounded-md  bg-accent text-white"
              >
                -
              </button>
              <div>{quantity}</div>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="p-1 px-4 rounded-md  bg-accent text-white"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-500">
              Warranty Information: {warrantyInformation}
            </span>
            <button className="w-full bg-accent border text-white px-6 py-2 rounded-md mt-6">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
