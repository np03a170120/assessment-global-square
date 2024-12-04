"use client";
import Link from "next/link";
import React from "react";

interface ErorrType {
  isProductNull?: boolean;
}

const Error = ({ isProductNull }: ErorrType) => {
  const errorTitle = isProductNull
    ? "Product is not available at the moment"
    : "Something went wrong, Please try again later.";

  return (
    <div className="container mx-auto">
      <div className="flex h-[12rem] mt-12 items-center justify-center">
        <div>
          <h1 className="text-gray-900 text-xl font-semibold mb-2">
            Error Occured!
          </h1>
          <p className="text-gray-600 pb-2">{errorTitle}</p>
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
