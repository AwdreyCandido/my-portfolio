import React from "react";
import cats from "./../../images/cats.jpeg"

const MainAbout = () => {

  const age = new Date().getFullYear() - 2001

  return (
    <section
      id="about"
      className="flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed px-12 md:px-[10rem] dark:border-b-gray-border dark:bg-darkgray dark:text-white "
    >
      <h1 className="text-header  mb-4">Who am I?</h1>

      <section className="flex flex-col xl:flex-row  w-full items-center xl:justify-between">
        <div className="flex flex-col gap-8 mt-[5rem] text-base w-full lg:w-[80%] xl:w-[65%]">
          <p>
            My name is Awdrey Candido 😎. I am {age} years old, I live In
            Pernambuco, Brazil and I'm a self-taught Front-End developer. At the
            moment I'm a college student of Information Systems at Universidade
            Federal Rural de Pernambuco.
          </p>
          <p>
            I've started to learn about this incredible world of technology with
            the C programming language, but after some more research, I found
            myself in love with the Front-End way to live 😁. But recently I was
            flirting with native mobile development with Kotlin, You can see it
            in my Github, so let's see where it goes.
          </p>

          <p>
            More about me? As any developer I don't live without coffee, I have
            a strange addiction with cats and Elvis songs... Uhhh, you only
            wanna know about software? It is secret 🤫, but I can tell more if
            you're really interested. Just contact me!
          </p>
        </div>
        <div className="relative self-center mt-[8rem] xl:mt-0">
          <div className="w-[35rem] sm:scale-[1.2] bg-[#e2e2e2] overflow-hidden dark:bg-white rounded-3xl">
            <img
              src={cats}
              alt="me and some cats"
              className="object-cover w-[35rem] grayscale dark:grayscale-0"
            />
          </div>
          <div className="absolute w-[40rem] left-[5%] top-[25%] -z-10 h-[20rem] border-2 border-dashed border-slate-200 dark:border-gray-border rounded-3xl"></div>
        </div>
      </section>
    </section>
  );
};

export default MainAbout;
