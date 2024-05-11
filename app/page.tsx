import Navbar from "@/components/Navbar";
import Image from "next/image";
import FirstHero from "./components/FirstHero";
import { CarouselSection } from "./components/CarouselSection";
import OurOffering from "./components/OurOffering";
import ScaleOfProduct from "./components/ScaleOfProduct";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstHero />
      <CarouselSection />
      <OurOffering />
      <ScaleOfProduct />
      <Reviews />
    </>
  );
}
