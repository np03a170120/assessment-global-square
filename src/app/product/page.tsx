import ProductItem from "@/components/derived/ProductItem";
import { ProductApiResponse } from "@/types/Products";

const page = async () => {
  const response = await fetch("https://dummyjson.com/products?skip=85");
  const data: ProductApiResponse = await response.json();

  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-2 pb-4 ">
        {data.products.map((item) => (
          <ProductItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
