import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CareerHero from "./components/CareerHero";
import CompanyOverview from "./components/CompanyOverview";
import TestimonialEmployee from "./components/TestimonialEmployee";

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <CareerHero />
      <CompanyOverview />
      <TestimonialEmployee />
      <Footer />
    </>
  );
};

export default CareerPage;
