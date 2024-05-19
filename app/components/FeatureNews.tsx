import { Button } from "@/components/ui/button";
import { newsList } from "@/lib/newsList";
import Image from "next/image";
import Link from "next/link";

const FeatureNews = () => {
  return (
    <section className="py-28 px-5 bg-background-news flex flex-col gap-16 items-center">
      <h1 className="text-4xl font-semibold">Featured News</h1>
      <div className="flex flex-col md:flex-row gap-5">
        {newsList.map(({ img, title, desc, link }, index) => (
          <div
            className="flex flex-col bg-white px-11 pb-5 text-black items-center justify-between md:basis-1/4"
            key={index}>
            <div className="flex flex-col gap-10">
              <Image
                src={img}
                width={261}
                height={110}
                alt="news photo"
                className="self-center"
              />

              <h1 className="font-medium text-xl">{title}</h1>
              <p className="font-extralight pt-7">{desc}</p>
            </div>
            <div className="w-full flex justify-start mt-7">
              <Link href={link} target="_blank">
                <Button className="bg-black text-white rounded-full font-extralight py-8 px-8">
                  Read Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureNews;
