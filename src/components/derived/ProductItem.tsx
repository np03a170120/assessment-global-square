"use client";
import { Products } from "@/types/Products";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductItem = ({ thumbnail, price, title, id }: Products) => {
  const router = useRouter();
  const handleProductClick = () => {
    router.push(`product/${id}`);
  };
  return (
    <div
      onClick={handleProductClick}
      className="flex flex-col cursor-pointer pb-2"
    >
      <div className="m-3 rounded-lg bg-white hover:shadow-md  ">
        <Image
          loading="lazy"
          width={200}
          height={200}
          alt={title}
          className="h-64 w-full object-cover"
          src={thumbnail}
        />
        <div className="flex-grow p-5 ">
          <h5 className="mb-1 text-md font-normal line-clamp-1">{title}</h5>
          <p className="mb-3 font-medium text-lg">Rs.{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
