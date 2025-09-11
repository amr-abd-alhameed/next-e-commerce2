// export interface ProductsType {
//     id: number;
//     name: string;
//     shortDescription: string;
//     description: string;
//     price: number;
//     sizes: string[];
//     colors: string[];
//     images: {
//         [key: string]: string;
//     };
// }
export interface ProductsType {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: {
    [key: string]: string | undefined;
  };
}
export interface ProductsTypes {
    products: ProductsType[];
}

export interface Category {
  name: string;
  icon: React.ReactElement;
  slug: string;
}
export type ProductSelections = {
  size: string;
  color: string;
};