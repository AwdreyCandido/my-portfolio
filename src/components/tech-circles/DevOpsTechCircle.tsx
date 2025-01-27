import React from "react";

import mysqlLogo from "./../../images/mysql.png";
import gitLogo from "./../../images/git.png";
import dockerLogo from "./../../images/docker.png";

const DevOpsTechCircle = () => {
  return (
    <section className="relative w-min">
      <div className="animate-rotate relative items-center justify-center h-[15rem] w-[15rem] border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
        {/* <div className="absolute animate-rotate-back -top-[10%] left-[10%] h-[8rem] w-[8rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <img
            src={reactLogo}
            alt="tailwind logo"
            className=" drop-shadow-2xl"
          />
        </div> */}
        <div className="absolute  top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] h-[6rem] w-[6rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <img
            src={mysqlLogo}
            alt="git logo"
            className=" drop-shadow-2xl animate-rotate-back"
          />
        </div>
        <div className="absolute  top-[50%] left-0  -translate-x-[50%]  h-[8rem] w-[8rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full ">
          <img
            src={gitLogo}
            alt="mysql logo"
            className=" drop-shadow-2xl animate-rotate-back"
          />
        </div>
        <div className="absolute  top-[50%] left-[100%] -translate-x-[50%] h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <img
            src={dockerLogo}
            alt="docker logo"
            className=" drop-shadow-2xl animate-rotate-back"
          />
        </div>
      </div>
      {/* <div className="absolute h-[8rem] w-[8rem] bg-darkwhite dark:bg-white shadow-input rounded-full p-4 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <img src={cssLogo} alt="tailwind logo" />
      </div> */}
    </section>
  );
};

export default DevOpsTechCircle;
