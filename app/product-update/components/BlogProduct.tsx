import { productBlogList } from "@/lib/productBlogList";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const BlogProduct = () => {
  return (
    <section className="px-6 py-16 bg-white text-black flex flex-col md:flex-row gap-10">
      {productBlogList.map(({ img, title, desc }, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <div className="flex h-auto">
            <Image src={img} width={1000} height={150} alt="Photo Blog" />
          </div>
          <h2 className="text-xl pt-2">{title}</h2>
          <p className="text-sm font-light">{desc}</p>
          <div className="flex gap-2">
            <p>Read More</p>
            <ArrowRight />
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogProduct;
