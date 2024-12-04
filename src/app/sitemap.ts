import { ProductApiResponse } from "@/types/Products";

export default async function sitemap() {
  const response = await fetch("https://dummyjson.com/products?skip=85");
  const data: ProductApiResponse = await response.json();

  const getProducts = data.products.map((item) => {
    return {
      url: `https://dummyjson.com/products/${item.id}`,
    };
  });

  return [
    {
      url: "https://dummyjson.com",
    },
    ...getProducts,
  ];
}
