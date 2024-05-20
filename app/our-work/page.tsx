import Navbar from "@/components/Navbar";
import Products from "./components/Products/Products";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Govtech",
  description: "Govtech Company Profile",
};

const OurWork = () => {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
};

export default OurWork;
