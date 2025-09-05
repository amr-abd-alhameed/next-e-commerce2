"use client";
import React, { useState } from "react";
import { ProductsType } from "./types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { ProductSelections } from "./types";

const ProductCart = ({ product }: { product: ProductsType }) => {
  const [productSelections, setProductSelections] = useState<ProductSelections>(
    {
      size: product.sizes[0],
      color: product.colors[0],
    }
  );

  const handleProductChange = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductSelections((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3] ">
          <Image
            src={product.images[productSelections.color]}
            alt={product.name}
            fill
            className="object-color hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex felx-col gap-1">
            <span className="text-gray-500">size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-200 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductChange({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex flex-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer  border-1 ${
                    productSelections.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } rounded-full p-[1.2px]`}
                  key={color}
                  onClick={() =>
                    handleProductChange({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full "
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed()}</p>
          <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-white hover:bg-black">
            <ShoppingCart className="w-4 h-4" /> Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
