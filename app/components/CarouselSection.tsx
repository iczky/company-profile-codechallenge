import { Card, CardContent } from "@/components/ui/card";
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
    <div className="w-screen h-screen">
      <Carousel
        className="w-full h-full bg-background-primary"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
        <CarouselContent className="-ml-[0px]">
          {carouselImgList.map((item, index) => (
            <CarouselItem key={index} className="pl-[0px]">
              <div className="pt-10">
                <Image src={item} alt="item" width={1920} height={1080} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
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
