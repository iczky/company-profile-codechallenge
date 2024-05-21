/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselImgList } from "@/lib/carouselImgList";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSection() {
  return (
    <Carousel
      className=" bg-background-primary"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2500,
          stopOnInteraction: false,
        }),
      ]}>
      <CarouselContent className="-ml-[0px]">
        {carouselImgList.map((item, index) => (
          <CarouselItem key={index} className="pl-[0px]">
            <div className="flex h-auto w-full py-10">
              <Image
                src={item}
                width={1920}
                height={1000}
                alt="carousel image"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

{
  /* <CarouselPrevious className="h-12 w-12 left-28" />
<CarouselNext className="h-12 w-12 right-28" /> */
}

// {Array.from({ length: 5 }).map((_, index) => (
//   <CarouselItem key={index}>
//     <div className="p-1">
//       <Card>
//         <CardContent className="flex aspect-square items-center justify-center p-6">
//           <span className="text-4xl font-semibold text-background-primary">
//             {index + 1}
//           </span>
//         </CardContent>
//       </Card>
//     </div>
//   </CarouselItem>
// ))}
