import React from "react";
import { productsData } from "../../data";
import Categories from "./Categories";
import ProductCart from "./ProductCart";
import { ProductsType } from "./types";
const ProductList = () => {
  return (
    <div>
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {productsData.map((product: ProductsType) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
