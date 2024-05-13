"use client";

import { Field, Form, Formik } from "formik";
import FormTitle from "./FormTitle";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import { Button } from "@/components/ui/button";

const FormInquiry = () => {
  interface formProps {
    fullName: string;
    organization: string;
    email: string;
    subject: string;
    message: string;
  }

  const initialValues = {
    fullName: "",
    organization: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    organization: Yup.string()
      .min(1, "Must more than 1 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email addresss`").required("Required"),
    subject: Yup.string()
      .min(1, "Must explain the subject")
      .required("Required"),
    message: Yup.string()
      .min(1, "Must put the message needed")
      .required("Required"),
  });

  const handleSubmit = (values: formProps) => {
    console.log(values, null, 2);
  };

  return (
    <section className="px-6 py-20">
      <FormTitle />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form className="pt-10">
          <MyTextInput
            id="fullName"
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Full Name"
          />
          <MyTextInput
            id="organization"
            label="Organization"
            name="organization"
            type="text"
            placeholder="Organization Name"
          />
          <MyTextInput
            id="email"
            label="Email"
            name="email"
            type="text"
            placeholder="Email"
          />
          <MyTextInput
            id="subject"
            label="Subject"
            name="subject"
            type="text"
            placeholder="Subject"
          />
          <div className="flex flex-col gap-3 pt-5">
            <label htmlFor="message" className="text-sm font-light">
              Message
            </label>
            <Field name="message" id="message" type="textarea">
              {/* <textarea cols={30} rows={5} className="text-black px-5 py-3" /> */}
            </Field>
          </div>
          <div className="pt-5">
            <button
              type="submit"
              className="bg-white text-black font-extralight text-lg py-8 px-7 rounded-full">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default FormInquiry;
