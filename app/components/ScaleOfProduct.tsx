import CardContainer from "@/components/CardContainer";
import { scaleImgList } from "@/lib/scaleImgList";
import Image from "next/image";

const ScaleOfProduct = () => {
  return (
    <section className="bg-white text-black py-16 px-10 flex flex-col gap-10 items-center">
      <h1 className="font-bold text-3xl">The scale of our product</h1>
      <div className="flex gap-20 flex-col md:flex-row">
        {scaleImgList.map((item, index) => (
          <CardContainer key={index}>
            <Image src={item.imagePath} height={150} width={150} alt="Photo" />
            <h1 className="font-bold text-4xl mt-5">{item.achievement}</h1>
            <strong>{item.detail}</strong>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default ScaleOfProduct;

{
  /* <CardContainer>
        {scaleImgList.map((item, index) => (
          <>
            <Image
              src={item}
              width={150}
              height={150}
              alt="Photo"
              key={index}
            />
            <h1>350K+</h1>
            <strong>Schools</strong>
          </>
        ))}
      </CardContainer> */
}
