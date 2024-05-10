import Navbar from "@/components/Navbar";
import Image from "next/image";
import FirstHero from "./components/FirstHero";
import { CarouselSection } from "./components/CarouselSection";
import OurOffering from "./components/OurOffering";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstHero />
      <CarouselSection />
      <OurOffering />
    </>
  );
}
