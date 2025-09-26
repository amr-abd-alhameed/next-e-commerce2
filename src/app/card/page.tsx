"use client";
import React, { useState } from "react";
import { CartItemsType, shippingFormInputs } from "./types";
import { cartItems, steps } from "../components/data";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowRight, Trash2 } from "lucide-react";
import CardDetailsItem from "./CardDetailsItem";
import { cardDetailsItem } from "../components/data";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import Image from "next/image";
const CardPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  const [shippingFrom, setShippingFrom] = useState<shippingFormInputs | null>(
    null
  );
  console.log(shippingFrom);
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
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {/* details */}
          {activeStep === 1 ? (
            //single cart item
            cartItems.map((item) => (
              <div className="flex items-center justify-between" key={item.id}>
                {
                  // image and details
                }
                <div className="flex gap-8">
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={
                        item.images[
                          item.selectedColor as keyof typeof item.images
                        ] || ""
                      }
                      alt={item.name}
                      fill
                      className="object-content"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full hover:bg-red-200 transition-all duration-300 bg-red-100 text-red-400 flex items-center justify-center cursor-pointer">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <div suppressHydrationWarning>
              <ShippingForm setShippingFrom={setShippingFrom} />
            </div>
          ) : activeStep === 3 && shippingFrom ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              please fill in the shipping form
            </p>
          )}
        </div>
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold capitalize">cart details</h2>
          <div className="flex flex-col gap-4">
            {cardDetailsItem.map((step, index) => (
              <CardDetailsItem key={index} cartItems={cartItems} item={step} />
            ))}

            {activeStep === 1 && (
              <button
                onClick={() => {
                  router.push(`/card?step=${activeStep + 1}`, {
                    scroll: false,
                  });
                }}
                className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer capitalize flex items-center justify-center gap-2"
              >
                continue <ArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
