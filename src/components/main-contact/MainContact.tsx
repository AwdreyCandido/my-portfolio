import React from "react";
import ContactForm from "../contact-form/ContactForm";

const MainContact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col font-sora xl:items-start gap-[5rem] justify-between py-8 px-12 md:px-[10rem] dark:border-b-gray-border dark:bg-darkgray dark:text-white "
    >
      <h1 className="text-header  my-8 text-center sm:text-start">
        Let's work together?
      </h1>

      <div className=" flex flex-col xl:flex-row items-center xl:items-start gap-[5rem] justify-between w-full">
        <h3 className="text-tertiary-h">
          Ask me anything or just say hi 👋...
        </h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default MainContact;
