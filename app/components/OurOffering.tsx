import { Button } from "@/components/ui/button";

const OurOffering = () => {
  return (
    <section className="flex justify-center text-center text-white pb-10">
      <div className="mt-5 w-[80%] flex flex-col gap-8 items-center">
        <h1 className="font-bold text-4xl">
          <strong>What do we do?</strong>
        </h1>
        <h4 className="text-2xl font-medium">
          We are building a technology-based ecosystem that enables inclusive
          access to quality learning content for teachers, supports data-driven
          decision-making in schools, and strengthens collaboration between
          Universities, Industry Partners, & Graduates.
        </h4>
        <Button className="bg-white text-black w-fit rounded-full font-extralight p-8 text-lg">
          Learn more about our work
        </Button>
      </div>
    </section>
  );
};

export default OurOffering;
