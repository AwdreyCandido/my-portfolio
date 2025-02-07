import { HiOutlineMail } from "react-icons/hi";
import MainContact from "../components/main-contact/MainContact";
import MainFooter from "../components/main-footer/MainFooter";
import NavBar from "../components/nav-bar/NavBar";

const PageLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <main className="overflow-hidden bg-[#121212] h-[100vh] w-[100vw] flex justify-center pt-[6rem] font-sora">
      {/* <NavBar /> */}
      {/* {children} */}s
      {/* <MainContact />
      <MainFooter /> */}
      <div className="w-full b max-w-[120rem] flex justify-between gap-[2.5rem] text-[#fafafa]">
        <div className="w-[360px] flex flex-col items-center sticky p-[3rem] pt-[6rem] h-full rounded-[2rem] border border-[#383838] bg-[#1e1e1e]">
          <div className="flex flex-col gap-[2.5rem] items-center">
            <figure className="h-[14rem] w-[14rem] rounded-[2.5rem] bg-[#3e3e3e] "></figure>
            <h2 className="text-[2.5rem] font-sora font-medium mb-[1.5rem]">
              Awdrey Candido
            </h2>
          </div>
          <div className="text-[1.2rem] py-2 px-6 bg-[#2b2b2b] rounded-[.7rem]">
            Front-End Developer
          </div>
          <div className="w-full h-[1px] bg-[#383838] my-[3.2rem]"></div>
          <ul className="contacts-list">
            <li className="flex items-center gap-[1.6rem]">
              <div className="relative">
                <div className="absolute bg-gradient-to-br from-[#383838] to-[#1e1e1e] to-55% h-[4.8rem] w-[4.8rem] rounded-[1.2rem] -z-10 -top-[0.1rem] -left-[0.1rem]"></div>
                <div className="bg-[#1e1e1e] flex text-[#ffdb70] items-center justify-center text-[1.8rem] h-[4.8rem] w-[4.8rem] rounded-[1.2rem] z-50 shadow-shadow-2">
                  <HiOutlineMail />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-[1.2rem] text-[#D6D6D6] uppercase">Email</p>
                <a href="mailto:awdrey.dev@gmail.com" className="contact-link">
                  awdrey.dev@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full full rounded-[2rem] border border-[#383838] bg-[#1e1e1e]"></div>
      </div>
    </main>
  );
};

export default PageLayout;
