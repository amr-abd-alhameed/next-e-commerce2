"use client";
import React from "react";
import { CartItemsType } from "./types";
import { steps } from "../components/data";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const CardPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  return (
    <div className="flex items-center justify-center gap-8 flex-col mt-12">
      {/*title */}
      <h1 className="capitalize text-2xl font-medium">Your shopping card</h1>
      {/*steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "border-gray-800" : "border-gray-200"
              }`}
            >
              {step.id}
            </div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
