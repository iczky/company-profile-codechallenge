import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeadPartner = () => {
  return (
    <section className="flex flex-col py-20 px-5 items-center text-center gap-10">
      <Image
        src={
          "https://images.squarespace-cdn.com/content/v1/634516bde48db10ce13c8279/144b9ba8-f402-4cfb-a661-79335929c398/Logo-metranet-+reverse-02.png"
        }
        width={250}
        height={150}
        alt="Head Partner"
      />
      <div className="flex flex-col gap-10 items-center">
        <p>
          GovTech Edus team operates under Metra-net, a subsidiary of Indonesias
          biggest state-owned technology and telecommunications company, Telkom
          Indonesia.
        </p>
        <Link href={"/contact-us"}>
          <Button className="bg-white text-black font-light px-16 py-6 w-fit rounded-full">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeadPartner;
