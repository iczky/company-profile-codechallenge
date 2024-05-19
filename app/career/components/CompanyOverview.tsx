import Image from "next/image";

const CompanyOverview = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 px-6 py-10 bg-black">
      <div className="md:w-1/2 flex flex-col justify-center gap-10">
        <h1 className="text-2xl font-medium">Company Overview</h1>
        <div className="md:hidden">
          {/* Image for small screens */}
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/634516bde48db10ce13c8279/7e9a9800-087d-4f30-8fde-e7775c87ef5e/IMG_7825.jpg"
            }
            width={1000}
            height={1000}
            alt="Photo"
            quality={35}
          />
        </div>
        <div className="flex flex-col gap-6">
          <p>
            Established in 2020, GovTech Edu is an organization dedicated to
            bringing irreversible impact to Indonesia by building user-centered,
            high-quality products. As of 2022, we house 400+ professionals
            joining us from diverse backgrounds such as Decacorns, Unicorns,
            Management Consulting Firms and education experts.
          </p>
          <p>
            We have collaborated in the building, development and expansion of
            six platforms tackling a variety of issues in the education
            ecosystem.
          </p>
          <p className="font-semibold underline">
            Find out more about our work and impact.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 hidden md:block">
        {/* Image for medium and larger screens */}
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/634516bde48db10ce13c8279/7e9a9800-087d-4f30-8fde-e7775c87ef5e/IMG_7825.jpg"
          }
          width={1000}
          height={1000}
          alt="Photo"
          quality={35}
        />
      </div>
    </section>
  );
};

export default CompanyOverview;
