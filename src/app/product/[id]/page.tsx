import { Products } from "@/types/Products";
import Product from "./Product";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data: Products = await response.json();

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: data.thumbnail,
      title: data.title,
      description: data.description,
      url: `https://dummyjson.com/products/${id}`,
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data: Products = await response.json();

  return <Product {...data} />;
};

export default page;
