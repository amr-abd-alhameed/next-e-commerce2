import Image from "next/image";
import ProductList from "./components/layout/Product/ProductList";
const Homepage = () => {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image
          src="/featured.png"
          alt="featured Product"
          fill
          priority={true}
        />
      </div>
      <ProductList />
    </div>
  );
};

export default Homepage;
