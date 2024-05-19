import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CareerHero from "./components/CareerHero";
import CompanyOverview from "./components/CompanyOverview";
import TestimonialEmployee from "./components/TestimonialEmployee";
import JoinUs from "./components/JoinUs";
import FAQ from "./components/FAQ";

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <CareerHero />
      <CompanyOverview />
      <TestimonialEmployee />
      <JoinUs />
      <FAQ />
      <Footer />
    </>
  );
};

export default CareerPage;
