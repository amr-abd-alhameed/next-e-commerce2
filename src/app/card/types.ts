import { ProductsType } from "../components/layout/Product/types";
import { z } from "zod";
export type CartItemType = ProductsType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
export type CartItemsType = CartItemType[];
export const shippingFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(11, "Phone number must be at least 11 characters long")
    .max(15, "Phone number must be at most 15 characters long")
    .regex(/^[0-9]+$/, "Phone number must be a number"),
  address: z.string().min(10, "Address must be at least 10 characters long"),
  city: z.string().min(3, "City must be at least 3 characters long"),
  state: z.string().min(3, "State must be at least 3 characters long"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters long"),
  country: z.string().min(3, "Country must be at least 3 characters long"),
});
export type shippingFormInputs = z.infer<typeof shippingFormSchema>;
