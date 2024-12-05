import { ProductApiResponse } from "@/types/Products";
import ProductList from "./ProductList";

const page = async () => {
  const response = await fetch("https://dummyjson.com/products?skip=85");
  const data: ProductApiResponse = await response.json();

  return (
    <div className="container mx-auto py-6 ">
      <ProductList data={data} />
    </div>
  );
};

export default page;
