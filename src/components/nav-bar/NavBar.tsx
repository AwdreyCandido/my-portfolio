import React, { useEffect, useState } from "react";

import PrimaryButton from "../buttons/primary-button/PrimaryButton";
import Switch from "../switch/Switch";
import { HiOutlineCode } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const NavBar = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleToggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  function goToForm() {
    setTimeout(() => {
      const form = document.getElementById("contact");
      form?.scrollIntoView();
    }, 300);
  }
  function goToProjects() {
    setTimeout(() => {
      const form = document.getElementById("projects");
      form?.scrollIntoView();
    }, 300);
  }
  function goToAbout() {
    setTimeout(() => {
      const form = document.getElementById("about");
      form?.scrollIntoView();
    }, 300);
  }

  return (
    <>
      <nav className="flex items-center justify-between md:text-base px-16 py-6 font-sora border-b border-b-slate-200 dark:border-b-gray-border dark:bg-darkgray dark:text-white ">
        <a href="/">
          <h4 className="flex items-center gap-8">
            <HiOutlineCode className="text-[2.5rem]" />
            Awdrey
          </h4>
        </a>
        <button
          onClick={handleToggleNavBar}
          className="inline sm:hidden text-[3rem] focus:ring-gray-border focus:ring-2 ring-inset-4 rounded-lg"
        >
          <CgMenuRight />
        </button>
        <ul className="hidden sm:flex gap-6 md:gap-12">
          <li
            onClick={goToProjects}
            className="relative hover:font-semibold duration-100"
          >
            <a href="/#projects" className="peer bg-white dark:bg-darkgray">
              Projects
            </a>
            <div className="bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 " />
          </li>
          <li
            onClick={goToAbout}
            className="relative hover:font-semibold duration-100"
          >
            <a href="/#about" className="peer bg-white dark:bg-darkgray">
              About
            </a>
            <div className="bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 " />
          </li>
          <li className="relative hover:font-semibold duration-100">
            <a href="#contact" className="peer bg-white dark:bg-darkgray">
              Contact
            </a>
            <div className="bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 " />
          </li>
        </ul>
        <div className="hidden sm:flex gap-8">
          <Switch onChange={handleThemeSwitch} />
          <a href="/#contact">
            <PrimaryButton onClick={goToForm} title="Contact Me!" />
          </a>
        </div>
      </nav>
      <>
        {showNavBar && (
          <div
            onClick={handleToggleNavBar}
            className="fixed top-0 z-10 h-screen w-full bg-transparent"
          ></div>
        )}
        <nav
          className={`sm:hidden fixed top-0 font-sora z-[1000] p-8 text-quaternary-h duration-300 h-screen w-[50%] bg-darkwhite dark:bg-darkgray shadow-input ${
            showNavBar ? " translate-x-0" : " -translate-x-full"
          }`}
        >
          {" "}
          <div className="flex items-center justify-between mb-8">
            {" "}
            <h4 className="flex items-center gap-4">
              <HiOutlineCode className="text-[2.5rem]" />
              Awdrey
            </h4>
            <Switch onChange={handleThemeSwitch} />
          </div>
          <hr className="mb-8" />
          <ul className="flex flex-col gap-6">
            <li
              onClick={() => {
                handleToggleNavBar(), goToProjects();
              }}
              className="relative hover:font-semibold duration-100"
            >
              <a href="/#projects">Projects</a>
            </li>
            <li
              onClick={() => {
                handleToggleNavBar(), goToAbout();
              }}
              className="relative hover:font-semibold duration-100"
            >
              <a href="/#about">About</a>
            </li>
            <li
              onClick={() => {
                handleToggleNavBar();
              }}
              className="relative hover:font-semibold duration-100"
            >
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          {/* <div className="flex gap-6 text-base">
            <a href="https://github.com/AwdreyCandido">
              <div className="text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white">
                <AiOutlineGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/awdrey-candido-67b381221/">
              <div className="text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white">
                <AiOutlineLinkedin />
              </div>
            </a>
            <a href="https://www.instagram.com/awdrey.candido/?next=%2F">
              <div className="text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white">
                <AiOutlineInstagram />
              </div>
            </a>
          </div> */}
        </nav>
      </>
    </>
  );
};

export default NavBar;
