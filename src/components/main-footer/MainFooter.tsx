import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";

const MainFooter = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const currYear = new Date().getFullYear();

  return (
    <section className="flex flex-col w-full font-sora pb-[3rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed dark:border-b-gray-border dark:bg-darkgray dark:text-white ">
      <div className="flex flex-col-reverse sm:flex-row gap-12 sm:gap-0 items-center w-full justify-between mt-[8rem] sm:px-16 pt-12 font-sora border-dashed border-t-2 border-t-slate-200 dark:border-t-[#363636] ">
        <h4
          onClick={scrollToTop}
          className="flex items-center gap-4 cursor-pointer"
        >
          <HiOutlineCode className="text-[2rem]" />
          Awdrey
        </h4>
        <p>© {currYear}. Awdrey Candido</p>
        <div className="flex gap-6 text-base">
          <a target="_blank" href="https://github.com/AwdreyCandido">
            <div className="text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white">
              <AiOutlineGithub />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/awdrey-candido-67b381221/"
          >
            <div className="text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white">
              <AiOutlineLinkedin />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/awdrey.candido/?next=%2F"
          >
            <div className="text-[2.5rem] cursor-pointer flex items-center justify-center dark:text-white">
              <AiOutlineInstagram />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
