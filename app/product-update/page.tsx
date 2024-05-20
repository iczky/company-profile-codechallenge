import Navbar from "@/components/Navbar";
import ProductHero from "./components/ProductHero";
import BlogProduct from "./components/BlogProduct";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Update - Govtech",
  description: "Govtech Company Profile",
};

const ProductUpdate = () => {
  return (
    <>
      <Navbar />
      <ProductHero />
      <BlogProduct />
      <Footer />
    </>
  );
};

export default ProductUpdate;
