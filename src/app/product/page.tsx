import { ProductApiResponse } from "@/types/Products";
import ProductList from "./ProductList";

const page = async () => {
  const response = await fetch("https://dummyjson.com/products?skip=85");
  const data: ProductApiResponse = await response.json();

  return (
    <div className="container mx-auto my-6">
      {data.products.length > 0 && <ProductList data={data} />}
    </div>
  );
};

export default page;
