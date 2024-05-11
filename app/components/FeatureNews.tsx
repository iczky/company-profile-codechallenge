import { Button } from "@/components/ui/button";
import { newsList } from "@/lib/newsList";
import Image from "next/image";

const FeatureNews = () => {
  return (
    <section className="py-28 px-10 bg-background-news flex flex-col gap-16 items-center">
      <h1 className="text-4xl font-semibold">Featured News</h1>
      <div className="flex gap-10">
        {newsList.map(({ img, title, desc }, index) => (
          <div
            className="flex flex-col bg-white px-16 pb-5 basis-3/12 text-black items-center justify-between"
            key={index}>
            <div className="flex flex-col gap-5">
              <Image src={img} width={261} height={110} alt="news photo" />

              <h1 className="font-medium text-3xl">{title}</h1>
              <p className="font-extralight pt-7">{desc}</p>
            </div>
            <div className="w-full flex justify-start mt-4">
              <Button className="bg-black text-white rounded-full font-extralight py-8 px-8">
                Read Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureNews;
