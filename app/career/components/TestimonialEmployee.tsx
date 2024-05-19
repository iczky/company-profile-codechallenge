"use client";

import Image from "next/image";
import { testiEmployee } from "@/lib/testiEmployee";
import { useUserContext } from "@/hooks/RandomUserProvide";

const TestimonialEmployee = () => {
  const { getRandomUser } = useUserContext();

  return (
    <section className="px-5 py-10 flex flex-col gap-16 bg-white text-black items-center text-center">
      <h1 className="font-medium text-2xl">What They Say</h1>
      <div className="flex flex-col md:flex-row gap-5">
        {testiEmployee.map(({ role, desc }, key) => {
          const randomUser = getRandomUser();

          if (!randomUser)
            return (
              <div className="" key={key}>
                Error
              </div>
            );

          const { pict, firstName, lastName } = randomUser;
          return (
            <div
              className="flex flex-col justify-between gap-14 items-center md:basis-1/3"
              key={key}>
              <div className="flex w-auto h-auto">
                <Image
                  src={pict}
                  width={250}
                  height={250}
                  alt="Photo profile"
                  className="rounded-full"
                />
              </div>
              <p className="w-[90%] font-light text-sm">{desc}</p>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-lg">{`${firstName} ${lastName}`}</p>
                <p className="pt-5">{role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialEmployee;
