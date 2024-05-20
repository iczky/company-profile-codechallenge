"use client";

import { useUserContext } from "@/hooks/RandomUserProvide";
import { Linkedin, Twitter } from "lucide-react";
import React from "react";
import TeamCard from "./TeamCard";

const teamListRole = [
  "Founder/CEO",
  "CFO",
  "CTO",
  "Creative Director",
  "Investor Relations",
  "Senior Education Director",
  "Senior Data Analyst",
  "Senior Software Enginner",
];

const TeamSection = () => {
  const { getRandomUser } = useUserContext();

  return (
    <section className="py-6 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Meet our Team
          </h2>

          <p className="mx-auto max-w-screen-md text-center md:text-lg">
            Our team is composed of professionals who are dedicated to
            delivering exceptional results. Each member brings a unique set of
            skills and expertise to the table, ensuring that we meet and exceed
            our clients&apos; expectations. Get to know the people behind our
            success.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {teamListRole.map((item) => {
            const randomUser = getRandomUser();
            if (randomUser) {
              const { firstName, lastName, pict } = randomUser;
              return (
                <TeamCard
                  key={firstName}
                  img={pict}
                  firstName={firstName}
                  lastName={lastName}
                  role={item}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
