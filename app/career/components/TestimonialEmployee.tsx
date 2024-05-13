import Image from "next/image";

const TestimonialEmployee = () => {
  return (
    <section className="px-5 py-10 flex flex-col gap-16 bg-white text-black items-center text-center">
      <h1 className="font-medium text-2xl">What They Say</h1>
      <div className="flex flex-col gap-14 items-center">
        <div className="w-[40%]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/634516bde48db10ce13c8279/d14ce848-8cee-4936-a273-0da33361584d/Mira+Fariza+%281%29.jpg"
            }
            width={1000}
            height={1000}
            alt="Photo profile"
            className="rounded-full"
          />
        </div>
        <p className=" font-light">
          “Being part of the GovTech Edu team is a new and exciting experience.
          The team is cohesive and intelligent. I have the opportunity to make a
          direct impact on education reform, spanning from elementary to higher
          education, in Indonesia. Moreover, GovTech Edu offers me with a broad
          network, igniting my passion to continuously learn and enhance my
          skills.”
        </p>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg">Mira Fariza</p>
          <p className="pt-5">
            Socialization & Training Lead, Central Marketing
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialEmployee;
