import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface TeamCardType {
  img: string;
  firstName: string;
  lastName: string;
  role: string;
}

const TeamCard: React.FC<TeamCardType> = ({
  img,
  firstName,
  lastName,
  role,
}) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-background-review text-black p-4 md:p-8 gap-5">
      <div className="flex mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg">
        <Image
          src={img}
          alt="Photo"
          width={125}
          height={125}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-lg font-semibold">{`${firstName} ${lastName}`}</p>
        <p>{role}</p>
      </div>
      <div className="flex gap-5 hover:scale-50">
        <Linkedin />
        <Twitter />
      </div>
    </div>
  );
};

export default TeamCard;
