import Navbar from "@/components/Navbar";
import AboutHero from "./components/AboutHero";
import PrincipleHero from "./components/PrincipleHero";
import TeamsHero from "./components/TeamsHero";
import ValuesHero from "./components/ValuesHero";
import HeadPartner from "./components/HeadPartner";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import OurMilestone from "./components/OurMilestone";

export const metadata: Metadata = {
  title: "About Us - Govtech",
  description: "Govtech Company Profile",
};

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="px-10">
        <AboutHero />
        <PrincipleHero />
      </div>
      <TeamsHero />
      <OurMilestone />
      <ValuesHero />
      <HeadPartner />
      <Footer />
    </>
  );
};

export default AboutUs;
