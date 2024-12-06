"use client";
import Link from "next/link";

interface ErorrType {
  isProductNull?: boolean;
}

const Error = ({ isProductNull }: ErorrType) => {
  const errorMessage = {
    productNull: {
      title: "Product Unavailable",
      description:
        "Product is not available at the moment. Please try again later",
    },
    apiError: {
      title: " Error Occured!",
      description: "Something went wrong, Please try again later.",
    },
  };

  return (
    <div className="container mx-auto h-[100vh]">
      <div className="flex h-[12rem] mt-12 items-center justify-center">
        <div>
          <h1 className="text-gray-900 text-xl font-semibold mb-2">
            {isProductNull
              ? errorMessage.productNull.title
              : errorMessage.apiError.title}
          </h1>
          <p className="text-gray-600 pb-2">
            {isProductNull
              ? errorMessage.productNull.description
              : errorMessage.apiError.description}
          </p>
          <Link
            href={"/"}
            className="text-sm underline text-primary cursor-pointer"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
