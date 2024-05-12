import Image from "next/image";

const PrincipleHero = () => {
  return (
    <section className="flex flex-col gap-3 md:flex-row-reverse">
      <div className="w-full">
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/634516bde48db10ce13c8279/efca0a85-cd3d-4e4a-87fe-c1c2a9655875/DSC09993.jpg"
          }
          width={1000}
          height={1000}
          alt="Photo"
        />
      </div>
      <div className="py-10 px-8 bg-white flex flex-col gap-10 text-black">
        <h3 className="font-medium text-3xl">
          Our guiding principle when working with the government is that of
          collaboration.
        </h3>
        <div className="flex flex-col gap-5 text-xs font-light leading-loose">
          <p>
            This means that we go beyond mere feature development - we bring
            findings and recommendations for appropriate technology
            interventions based on an in-depth understanding of the problem
            space.
          </p>
          <p>
            We take on an active role in developing and launching a
            multi-pronged problem-solving approach. In doing so, we aim to
            holistically improve our education system which will bring impact to
            millions of students, teachers, schools, and universities and see a
            positive change in student learning outcomes, teaching capabilities,
            career growth opportunities, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrincipleHero;

{
  /* <div className="flex flex-col gap-5">
        <h3 className="font-medium text-xl">
          Our guiding principle when working with the government is that of
          collaboration.
        </h3>
        <div className="font-light text-lg">
          <p>
            This means that we go beyond mere feature development - we bring
            findings and recommendations for appropriate technology
            interventions based on an in-depth understanding of the problem
            space.
          </p>
          <p>
            We take on an active role in developing and launching a
            multi-pronged problem-solving approach. In doing so, we aim to
            holistically improve our education system which will bring impact to
            millions of students, teachers, schools, and universities and see a
            positive change in student learning outcomes, teaching capabilities,
            career growth opportunities, and beyond.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/634516bde48db10ce13c8279/efca0a85-cd3d-4e4a-87fe-c1c2a9655875/DSC09993.jpg"
          }
          width={1000}
          height={1000}
          alt="Collaboration illustration"
        />
      </div> */
}
