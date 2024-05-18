
import { Products } from "@/actions/productList";
import Rating from "@/components/rating";
import { getFirstThreeWords } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type ProductList = {
  products: Product[];
};

const ProductListPage = async() => {
  const products = await Products();
  return (
    <div className="">
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product : Product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group relative rounded-xl">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={400}
                  height={400}
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {getFirstThreeWords(product.title)}
                  </h3>
                <Rating rate={product.rating.rate} />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {" "}
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
