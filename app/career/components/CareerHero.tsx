import { careerHeroImgs } from "@/lib/careerImgList";
import Image from "next/image";

const CareerHero = () => {
  return (
    <section className="flex flex-col text-center items-center gap-10 pb-20">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 overflow-hidden md:overflow-auto">
          {careerHeroImgs.map((item, key) => (
            <Image src={item} width={200} height={300} alt="photo" key={key} />
          ))}
        </div>
      </div>
      <h1 className="text-5xl font-semibold w-[80%]">
        Serve. Collaborate. Grow.
      </h1>
      <p className="text-2xl font-semibold w-[70%]">
        Be a part of exciting change coming to Indonesia.
      </p>
    </section>
  );
};

export default CareerHero;
