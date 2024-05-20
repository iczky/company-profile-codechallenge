import { Button } from "@/components/ui/button";
import Link from "next/link";

const OurOffering = () => {
  return (
    <section className="flex justify-center text-center text-white pb-10">
      <div className="mt-5 flex flex-col gap-8 items-center px-5 md:basis-4/5">
        <h1 className="font-bold text-2xl md:text-4xl">
          <strong>What do we do?</strong>
        </h1>
        <h4 className="text-lg font-medium md:text-2xl">
          We are building a technology-based ecosystem that enables inclusive
          access to quality learning content for teachers, supports data-driven
          decision-making in schools, and strengthens collaboration between
          Universities, Industry Partners, & Graduates.
        </h4>
        <Link href="/our-work">
          <Button className="bg-white text-black w-fit rounded-full font-extralight p-8 text-lg">
            Learn more about our work
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default OurOffering;
