import { useEffect, useRef, useState } from "react";
import ContactLinks from "../../components/v2/contact-links/ContactLinks";
import ServiceCards from "../../components/v2/service-cards/ServiceCards";
import WorkExperiences from "../../components/v2/work-experiences/WorkExperiences";
import Layout from "../../layout/Layout";
import Skills from "../../components/v2/skills/Skills";
import ContactForm from "../../components/v2/contact-form/ContactForm";

const MainPage = () => {
  const roleRef = useRef<HTMLParagraphElement | null>(null);
  const [displayText, setDisplayText] = useState("");

  let count = 0;
  let i = 0;
  let speed = 110;

  const roles = ["Full-Stack", "Front-End"]; //"Front-End", "Web", "Software"
  let letters = roles[count].split("");

  let word = "";
  useEffect(() => {
    const type = () => {
      if (i < letters.length) {
        setDisplayText((word += letters[i]));
        setTimeout(type, speed);
      }
      i++;
    };
    type();

    setInterval(() => {
      if (count < roles.length) {
        setTimeout(roles[count++], speed);
      }
    }, 2000);
  }, [count, word, speed]);

  return (
    <Layout>
      <main className="flex flex-col items-center max-w-[75rem] p-[3rem] mx-auto mb-[10rem] md:mt-[10rem] ">
        <section id="about" className="flex flex-col gap-6">
          <div className=" font-figtree font-semibold text-neutral-200">
            <h1 className=" text-[3.3rem] sm:text-[5rem] ">Hey, I'm Awdrey</h1>
            <h1 className="flex text-[3.3rem] sm:text-[5rem] ">
              a
              <p className="text-nowrap px-4" id="roleRef" ref={roleRef}>
                {displayText}
              </p>
              Developer
            </h1>
          </div>
          <div>
            <p className="text-base text-justify text-[#66686a] my-4">
              My name is Awdrey Candido, and I am a Full-Stack Developer with a
              strong focus on Front-End. I have solid experience in building
              responsive, interactive, and user-friendly interfaces.
            </p>
          </div>
          <ContactLinks />
        </section>
        <div className=" bg-[#34363a] w-full h-[1px] rounded-full my-20 mb-32"></div>
        <section className="flex flex-col gap-6">
          <h2 className="text-tertiary-h font-semibold text-neutral-200 mb-10">
            My Services
          </h2>
          <ServiceCards />
        </section>
        <div className=" bg-[#34363a] w-full h-[1px] rounded-full my-20 mb-32"></div>
        <section id="experiences" className="flex flex-col gap-6">
          <h2 className="text-tertiary-h font-semibold text-neutral-200 mb-10">
            Work Experience
          </h2>
          <WorkExperiences />
        </section>
        <div className=" bg-[#34363a] w-full h-[1px] rounded-full my-20 mb-32"></div>
        <section id="skills" className="flex flex-col gap-6">
          <h2 className="text-tertiary-h font-semibold text-neutral-200 mb-10">
            Skills & Technologies
          </h2>
          <Skills />
        </section>
        <div className=" bg-[#34363a] w-full h-[1px] rounded-full my-20 mb-32"></div>
        <section id="contact" className="flex w-full flex-col gap-6">
          <h2 className="text-tertiary-h font-semibold text-neutral-200 mb-10">
            Contact
          </h2>
          <ContactForm />
        </section>
      </main>
    </Layout>
  );
};

export default MainPage;
