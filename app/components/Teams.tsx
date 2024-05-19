import { teamList } from "@/lib/teamList";
import Image from "next/image";

const Teams = () => {
  return (
    <section className="px-5 py-10 gap-7 flex flex-col bg-background-review text-black items-center text-center">
      <h1 className="text-2xl font-bold">Meet the Team</h1>
      <p className="text-xl leading-loose ">
        We are a diverse group of 400+ professionals - from researchers,
        designers, and data analysts, to marketing strategists, and
        policymakers.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {teamList.map(({ img, name, role }, index) => (
          <div
            className="flex flex-col items-center justify-center pt-14"
            key={index}>
            <Image
              src={img}
              width={318}
              height={318}
              alt="Photo C"
              className="rounded-full"
            />
            <h2 className="font-bold text-2xl underline pt-10">{name}</h2>
            <p className="text-2xl font-medium pt-4">{role}</p>
          </div>
        ))}
      </div>
      <button className="mt-10 py-4 px-20 text-white bg-black rounded-full font-light">
        Learn More About Us
      </button>
    </section>
  );
};

export default Teams;
