import React from "react";
import { productsData } from "../../data";
import Categories from "./Categories";
import ProductCart from "./ProductCart";
import { ProductsType } from "./types";
import Link from "next/link";
import Filter from "./Filter";
const ProductList = ({ category,params }: { category: string ,params:"homepage" | "products"}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {productsData.map((product: ProductsType) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline test-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
