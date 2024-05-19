import { Button } from "@/components/ui/button";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className="flex flex-col gap-7 pb-16 text-center items-center">
      <div className="flex h-auto w-auto">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/634516bde48db10ce13c8279/2df5e6b6-92e6-467a-8517-79e87737e088/PXL_20221006_042920858%402x-2.png"
          width={500}
          height={500}
          alt="Photo"
        />
      </div>
      <h1 className="text-3xl font-semibold px-7 leading-relaxed">
        Join us in creating irreversible transformation for Education in
        Indonesia.
      </h1>
      <Button className="bg-white text-black text-xl py-8 px-20 rounded-full">
        Apply Here
      </Button>
    </section>
  );
};

export default JoinUs;
