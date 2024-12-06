import { ProductApiResponse } from "@/types/Products";
import ProductList from "./ProductList";
import Error from "./error";

const page = async () => {
  const response = await fetch("https://dummyjson.com/products?skip=85");
  const data: ProductApiResponse = await response.json();

  return (
    <div className="container mx-auto">
      {data.products.length ? (
        <>
          <ProductList data={data} />
        </>
      ) : (
        <>
          <Error isProductNull />
        </>
      )}
    </div>
  );
};

export default page;
