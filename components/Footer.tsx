import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center gap-10 py-5 px-5 md:flex-row md:justify-between">
      <Image
        src={"/logoFooter.webp"}
        width={280}
        height={1}
        alt="Logo Footer"
      />
      <div className="flex flex-col gap-1 underline font-light text-right">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/our-work">
          <p>Our Work & Impact</p>
        </Link>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;
