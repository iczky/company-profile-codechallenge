import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormInquiry from "./components/FormInquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Govtech",
  description: "Govtech Company Profile",
};

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <FormInquiry />
      <Footer />
    </>
  );
};

export default ContactUs;
