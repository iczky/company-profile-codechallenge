import CardContainer from "@/components/CardContainer";
import { scaleImgList } from "@/lib/scaleImgList";
import Image from "next/image";

const ScaleOfProduct = () => {
  return (
    <section className="bg-white text-black p-10 flex flex-col gap-10 items-center">
      <h1>The scale of our product</h1>
      <div className="flex gap-10">
        {scaleImgList.map((item, index) => (
          <CardContainer key={index}>
            <Image src={item} height={150} width={150} alt="Photo" />
            <h1>350K+</h1>
            <strong>School</strong>
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
