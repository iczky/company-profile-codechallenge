import { url } from "inspector";
import Image from "next/image";

const OurPartner = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/rapat.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="bg-background-primary bg-opacity-70 w-full h-full pt-28 pb-20 flex flex-col gap-16 items-center text-center ">
        <h1 className="text-4xl font-semibold">Our Partner</h1>
        <Image
          src={"/tutwuri.png"}
          width={153}
          height={153}
          alt="tut wuri"
          className="pt-8"
        />
        <p>
          Ministry of Education, Culture, Research, and Technology of Republic
          of Indonesia
        </p>
      </div>
    </section>
  );
};

export default OurPartner;
