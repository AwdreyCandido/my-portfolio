import { FiUser, FiMail } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { HiOutlineCommandLine } from "react-icons/hi2";

const Navigation = () => {
  const navItems = [
    { icon: <FiUser size={22} />, label: "About", href: "about" },
    {
      icon: <HiOutlineCommandLine size={24} />,
      label: "Experiences",
      href: "experiences",
    },
    { icon: <HiOutlineCode size={24} />, label: "Skills", href: "skills" },
    { icon: <FiMail size={22} />, label: "Contact", href: "contact" },
  ];
  return (
    <nav className="absolute h-min p-2 rounded-full bg-[#34363a] -translate-x-[50%] md:-translate-x-0 left-[50%] md:left-10 bottom-0 -translate-y-[50%] md:top-[50%] flex flex-col justify-between items-center text-neutral-200 border-2 border-[#3f4048] shadow-lg z-50">
      <div className="flex md:flex-col gap-4">
        {navItems.map(({ icon, label, href }) => (
          <a
            key={label}
            href={`#${href}`}
            className="group relative flex items-center justify-center h-[5rem] w-[5rem] hover:bg-[#202224] rounded-full transition-all duration-300"
          >
            {icon}
            <span className="hidden md:flex absolute left-[7rem] scale-0 rounded-full text-gray-700 bg-neutral-200 px-6 py-3 text-[1.4rem] font-medium leading-none group-hover:scale-100 transition-transform">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
