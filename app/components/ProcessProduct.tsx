import { processList } from "@/lib/processList";
import Image from "next/image";

const ProcessProduct = () => {
  return (
    <section className="py-20 px-8 flex flex-col gap-20 items-center text-center">
      <h1 className="font-semibold text-5xl">Our end-to-end process</h1>
      <p className="w-[60%] text-xl leading-relaxed">
        From sharpening product vision, re-validating solutions, building
        high-quality technology, to maximizing user adoption, we ensure the
        products we build have high usability and meet our users’ needs.
      </p>
      <div className="flex gap-10">
        {processList.map((item, index) => (
          <div
            className="flex flex-col gap-5 basis-1/4 items-center"
            key={index}>
            <Image
              src={item.img}
              width={221}
              height={221}
              alt="Photo process"
            />
            <strong className="text-xl">{item.desc}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessProduct;