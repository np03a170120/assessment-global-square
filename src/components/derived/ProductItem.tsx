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
      className="relative flex flex-col w-full rounded-lg bg-white  cursor-pointer  pb-2  group "
    >
      <Image
        loading="lazy"
        width={100}
        height={100}
        alt={title}
        className="h-64 w-full object-contain"
        src={thumbnail}
      />
      <div className="flex-grow p-5 pt-0">
        <h5 className="mb-1 text-md font-normal line-clamp-1">{title}</h5>
        <p className="mb-3 font-medium text-lg">Rs.{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
