"use client";
import React from "react";
import { categories } from "../../data";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Categories = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const router = useRouter();
  const pathName = usePathname();
  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 rounded-lg p-2 mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer py-1 px-2 rounded-md ${
            category.slug === selectedCategory ? "bg-white" : "text-gray"
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
