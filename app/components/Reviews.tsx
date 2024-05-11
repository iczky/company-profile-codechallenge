"use client";

import ReviewContainer from "@/components/ReviewContainer";
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

const Reviews = () => {
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
      className="p-20 bg-background-review flex text-black text-center">
      <CarouselContent className="overflow-visible flex gap-10">
        {reviewList.map(({ img, name, school, description }, key) => (
          <CarouselItem
            className="flex flex-col gap-5 basis-1/3 items-center"
            key={key}>
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <Image
                src={img}
                width={200}
                height={200}
                alt="Photo review"
                className="w-full h-full object-cover"
              />
            </div>
            <strong className="text-2xl font-medium w-[85%]">
              {description}
            </strong>
            <strong className="text-lg font-semibold pt-5">{name}</strong>
            <p>{school}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Reviews;

//   <ReviewContainer>
//     <Image
//       src={"/ReviewImg/pict1.jpg"}
//       width={100}
//       height={100}
//       alt="Photo review"
//     />
//     <p>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
//       consequatur, culpa velit non id explicabo nemo officia porro a
//       saepe doloribus sequi animi quae aliquam temporibus, cum expedita!
//       Hic, sapiente!
//     </p>
//     <p>Vivi Wahyuni</p>
//     <p>SDN Jarit 1, Kab. Lumajang, Jawa Timur</p>
//   </ReviewContainer>
