import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-between py-20 px-20">
      <Image src={"/logoFooter.png"} width={280} height={1} alt="Logo Footer" />
      <div className="flex flex-col gap-2 underline font-light text-right">
        <p>Home</p>
        <p>Our Work & Impact</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;
