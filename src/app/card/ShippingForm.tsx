import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { shippingFormInputs, shippingFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingFrom,
}: {
  setShippingFrom: (data: shippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<shippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<shippingFormInputs> = (data) => {
    setShippingFrom(data);

    router.push("/card?step=3");
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-500 ">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Abdullallah"
          {...register("name")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-500 ">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Abdullallah@gmail.com"
          {...register("email")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-500 ">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          placeholder="20 0123 456789"
          {...register("phone")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-sm font-medium text-gray-500 ">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="Egypt ,Cairo"
          {...register("address")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm font-medium text-gray-500 ">
          City
        </label>
        <input
          type="text"
          id="city"
          placeholder="Cairo "
          {...register("city")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.city && (
          <p className="text-sm text-red-500">{errors.city?.message}</p>
        )}
      </div>
      <button
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer capitalize flex items-center justify-center gap-2"
      >
        continue <ArrowRight />
      </button>
    </form>
  );
};

export default ShippingForm;
