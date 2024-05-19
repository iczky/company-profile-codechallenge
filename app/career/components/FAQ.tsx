import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = () => {
  return (
    <section className="flex flex-col gap-8 px-7 pt-5 pb-16">
      <h1 className="text-2xl font-semibold">FAQs</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item 1">
          <AccordionTrigger>Who are we?</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-5 text-sm font-light">
              <p>
                Established in 2020, GovTech Edu is an organization dedicated to
                bringing irreversible impact to Indonesia by building
                user-centered, high-quality technology. As of 2022, we house
                400+ professionals joining us from diverse backgrounds such as
                Decacorns, Unicorns, Management Consulting Firms and education
                experts.
              </p>
              <p>
                To learn more about GovTech Edu, visit our
                <Link href={"/about-us"}>
                  <strong>About Us</strong>
                </Link>
                page.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item 2">
          <AccordionTrigger className="text-left">
            How do we work together with mninistries in Indonesia?
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-5 text-sm font-light">
              <p>
                We work very closely with ministries in Indonesia as a thought
                and development partner in driving national-scale transformation
                through technology. Our involvement does not stop after the
                completion of the product building process, but extends to the
                end-to-end development process. In this way, we are able to
                ensure that our products will have high usability and
                scalability.
              </p>
              <p>
                Currently, together with the Ministry of Education, Culture,
                Research and Technology, we are utilizing our expertise and
                experience in the technology industry in advancing quality
                education in Indonesia for all.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item 3">
          <AccordionTrigger className="text-left">
            What is the working arrangement in GovTech Edu?
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-5 text-sm font-light">
              <p>
                Here at GovTech Edu, we are committed to our Work From Anywhere
                (WFA) arrangement. This means that teams can independently
                choose the arrangement that is most effective when delivering
                our shared mission and vision. We also provide support for any
                offline meetings in the form of working spaces.
              </p>
              <p>
                This arrangement will continue to be implemented even after the
                end of the COVID-19 pandemic.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item 4">
          <AccordionTrigger className="text-left">
            What can i expect when applying to GovTech Edu?
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-5 text-sm font-light">
              <p>The following is our recruitment process:</p>
              <div className="flex flex-col gap-3 pl-5">
                <p>
                  1. Introduction. Our Talent & Acquisition team will reach out
                  to you to explain your chosen role and an overview of GovTech
                  Edu.
                </p>
                <p>
                  2. Technical Test. Take the technical test administered by our
                  Talent & Acquisition team.
                </p>
                <p>
                  3. Interview. Conducted with stakeholders based on your chosen
                  role.
                </p>
                <p>
                  4. Case Study. You may not need to take this step based on
                  your chosen role {`(optional)`}.
                </p>
                <p>
                  5. Offering process. Conducted together with our
                  administrative partner, Metra-Net.
                </p>
                <p>6. Onboarding.</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
