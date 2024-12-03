import { Products } from "@/types/Products";
import React from "react";
import Product from "./Product";

const page = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;
  const response = await fetch(
    `https://dummyjson.com/products/${resolvedParams.id}`
  );
  const data: Products = await response.json();

  return <Product {...data} />;
};

export default page;
