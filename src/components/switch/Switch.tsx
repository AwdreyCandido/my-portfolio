import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

type SwitchProps = {
  onChange: () => void;
};

const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        onChange={props.onChange}
        type="checkbox"
        value=""
        className="sr-only peer"
      ></input>
      <div
        className={`w-[4.5rem] h-[2.5rem] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 peer-checked:bg-gray-border peer-checked:border`}
      ></div>
      <HiOutlineSun className="absolute peer-checked:invisible peer-checked:translate-x-full top-[50%] -translate-y-[50%] left-[3px] bg-darkwhite border-gray-300 border rounded-full h-[1.8rem] w-[1.9rem] transition-all text-yellow-400 " />
      <HiOutlineMoon className="absolute invisible peer-checked:visible rounded-full h-[1.8rem] w-[1.9rem] top-[50%] -translate-y-[50%] translate-x-full left-[3px] bg-darkwhite text-darkgray" />
    </label>
  );
};

export default Switch;
