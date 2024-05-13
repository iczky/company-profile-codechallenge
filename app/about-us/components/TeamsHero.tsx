import Image from "next/image";

const TeamsHero = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/rapat.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="bg-background-primary bg-opacity-70 w-full h-full flex flex-col py-20 px-10 items-center">
        <div className="md:w-[60%] text-center text-3xl font-medium gap-10 flex flex-col">
          <p>
            We are a diverse group of 400+ professionals - from researchers,
            designers, and data analysts, to marketing strategists and
            policymakers.
          </p>
          <p>
            Our team comes from various backgrounds and organizations; from
            unicorns, decacorns, management consulting firms, public sector
            organizations, international NGOs, and many more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamsHero;
