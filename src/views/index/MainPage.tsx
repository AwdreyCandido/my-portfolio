import { useEffect, useRef, useState } from "react";
import ContactLinks from "../../components/v2/contact-links/ContactLinks";
import ServiceCards from "../../components/v2/service-cards/ServiceCards";
import WorkExperiences from "../../components/v2/work-experiences/WorkExperiences";
import Layout from "../../layout/Layout";

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
      <main className="flex flex-col items-center my-[10rem] ">
        <section className="flex flex-col min-w-[70rem] max-w-[70rem] gap-6">
          <div className=" font-figtree font-semibold text-neutral-200">
            <h1 className="text-[5rem] ">Hey, I'm Awdrey</h1>
            <h1 className="flex text-[5rem] ">
              a{" "}
              <p className="flex px-4" id="roleRef" ref={roleRef}>
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
        <div className="min-w-[70rem] max-w-[70rem] bg-[#34363a] h-[1px] rounded-full my-20 mb-32"></div>
        <section className="flex flex-col min-w-[70rem] max-w-[70rem] gap-6">
          <h2 className="text-tertiary-h font-semibold text-neutral-200 mb-10">
            My Services
          </h2>
          <ServiceCards />
        </section>
        <div className="min-w-[70rem] max-w-[70rem] bg-[#34363a] h-[1px] rounded-full my-20 mb-32"></div>
        <section className="flex flex-col min-w-[70rem] max-w-[70rem] gap-6">
          <h2 className="text-tertiary-h font-semibold text-neutral-200 mb-10">
            Work Experience
          </h2>
          <WorkExperiences />
        </section>
      </main>
    </Layout>
  );
};

export default MainPage;
