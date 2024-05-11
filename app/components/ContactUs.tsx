import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section className="bg-background-primary text-white flex flex-col pt-12 pb-28 items-center justify-center gap-20">
      <h1 className="text-5xl font-semibold">
        What challenge can we solve together next?
      </h1>
      <Button className="bg-white text-black py-8 px-16 rounded-full font-extralight">
        Contact Us
      </Button>
    </section>
  );
};

export default ContactUs;
