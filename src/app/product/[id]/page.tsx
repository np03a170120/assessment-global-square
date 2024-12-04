import { Products } from "@/types/Products";
import { Metadata } from "next";
import Product from "./Product";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const response = await fetch(
    `https://dummyjson.com/products/${resolvedParams.id}`
  );
  const data: Products = await response.json();

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: data.thumbnail,
      title: data.title,
      description: data.description,
      url: `https://dummyjson.com/products/${resolvedParams.id}`,
    },
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;
  const response = await fetch(
    `https://dummyjson.com/products/${resolvedParams.id}`
  );
  const data: Products = await response.json();

  return <Product {...data} />;
};

export default Page;
