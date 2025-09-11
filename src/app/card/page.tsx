"use client";
import React from "react";
import { CartItemsType } from "./types";
import { cartItems, steps } from "../components/data";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CardDetailsItem from "./CardDetailsItem";
import { cardDetailsItem } from "../components/data";
const CardPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  return (
    <div className="flex items-center justify-center gap-8 flex-col mt-12">
      {/*title */}
      <h1 className="capitalize text-2xl font-medium">Your shopping card</h1>
      {/*steps */}
      <div className="flex flex-col lg:flex-row items-center  gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center  gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center ${
                step.id === activeStep
                  ? "ring-2 ring-offset-2 ring-gray-800"
                  : "opacity-70"
              }`}
            >
              {step.id}
            </div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
      {/*steps and details */}
      <div className="flex flex-col lg:flex-row gap-16 w-full">
        {/* steps */}
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8"></div>
        {/* details */}
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold capitalize">cart details</h2>
          <div className="flex flex-col gap-4">
            {cardDetailsItem.map((step, index) => (
              <CardDetailsItem
                key={index}
                cartItems={cartItems}
                item={step}
              />
            ))}
            <button className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer capitalize flex items-center justify-center gap-2">
              continue <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
