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

const Reviews = () => {
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
          delay: 2500,
          stopOnInteraction: false,
        }),
      ]}
      className="p-10 pb-16 border-none bg-background-review flex text-black text-center">
      <CarouselContent>
        {reviewList.map(({ school, description }, key) => {
          const randomUser = getRandomUser();
          if (!randomUser) {
            return <div key={key}>ERROR</div>;
          }

          const { firstName, lastName, pict } = randomUser;
          return (
            <CarouselItem
              className="flex flex-col gap-5 items-center"
              key={key}>
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                <Image
                  src={pict}
                  width={200}
                  height={200}
                  alt="Photo review"
                  className="w-full h-full object-cover"
                />
              </div>
              <strong className="text-2xl font-medium w-[85%]">
                {description}
              </strong>
              <strong className="text-lg font-semibold pt-5">{`${firstName} ${lastName}`}</strong>
              <p>{school}</p>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Reviews;
