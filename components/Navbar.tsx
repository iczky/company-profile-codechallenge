import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full items-center font-extralight px-12 py-12">
      <Image src={"/Logo.png"} width={100} height={50} alt="Logo Company" />
      <div className="flex gap-8">
        <p>Home</p>
        <p>About Us</p>
        <p>Our Work & Impact</p>
        <p>Contact Us</p>
        <p>Career</p>
      </div>
    </nav>
  );
};

export default Navbar;
