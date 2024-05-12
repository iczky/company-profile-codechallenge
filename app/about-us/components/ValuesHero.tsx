import { valuesImg } from "@/lib/valuesImg";
import Image from "next/image";

const ValuesHero = () => {
  return (
    <section className="flex flex-col gap-10 items-center bg-white text-black py-24">
      <h1 className="text-4xl font-semibold">Our values</h1>
      <div className="flex flex-col">
        {valuesImg.map((item, index) => (
          <div className="flex flex-col gap-3 items-center" key={index}>
            <Image src={item.url} width={250} height={250} alt="Illustration" />
            <h3 className="font-bold text-xl">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesHero;
