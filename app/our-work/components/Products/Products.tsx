import { Button } from "@/components/ui/button";
import { productImg } from "@/lib/productImgList";
import Image from "next/image";

const Products = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-5xl font-semibold text-center py-24">
        Our Work & Impact
      </h1>
      {productImg.map(({ imgHero, imgLogo, desc }, index) => (
        <div
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          style={{ backgroundColor: index % 2 === 0 ? "rgb(12,95,233)" : "" }}
          key={index}>
          <div className="md:basis-1/2">
            <Image
              src={imgHero}
              width={1000}
              height={1000}
              alt="Photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-20 basis-1/2 gap-10">
            <div className="flex flex-col gap-28">
              <Image src={imgLogo} width={270} height={90} alt="photo logo" />
              <p className="text-3xl font-semibold">{desc}</p>
            </div>
            <div>
              <Button className="bg-black text-white p-16 text-xl rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
