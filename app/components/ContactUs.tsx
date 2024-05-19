import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="bg-background-primary text-white flex flex-col py-8 px-8 items-center text-center gap-20">
      <h1 className="text-3xl font-semibold">
        What challenge can we solve together next?
      </h1>
      <Link href={"/contact-us"}>
        <Button className="bg-white text-black py-8 px-16 rounded-full font-extralight">
          Contact Us
        </Button>
      </Link>
    </section>
  );
};

export default ContactUs;
