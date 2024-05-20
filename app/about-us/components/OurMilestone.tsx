"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviewList } from "@/lib/reviewList";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useUserContext } from "@/hooks/RandomUserProvide";
import { milestoneList } from "@/lib/milestoneList";

const OurMilestone = () => {
  const { getRandomUser } = useUserContext();

  // const {firstName, lastName, pict} = getRandomUser()

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
      className="p-10 pt-16 border-none bg-background-review flex flex-col text-black text-center">
      <h1 className="text-3xl font-semibold mb-8">MILESTONE COMPANY</h1>
      <CarouselContent className="md:flex">
        {milestoneList.map(({ img, title, desc, year }, key) => {
          return (
            <CarouselItem
              className="flex flex-col gap-5 text-left items-center bg-white rounded-lg p-5 md:basis-1/3"
              key={key}>
              <div className="flex w-auto h-auto">
                <Image src={img} width={400} height={400} alt="Photo review" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-2xl font-medium">{title}</p>
                <p>{`Established: ${year}`}</p>
                <p>{desc}</p>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default OurMilestone;
