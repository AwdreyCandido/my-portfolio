import { FiHome, FiUser, FiCode, FiLayers, FiMail } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";

const Navigation = () => {
  const navItems = [
    { icon: <LuLayoutDashboard size={22} />, label: "Home", href: "#home" },
    { icon: <FiUser size={22} />, label: "About", href: "#about" },
    { icon: <HiOutlineCode size={22} />, label: "Projects", href: "#projects" },
    { icon: <FiLayers size={22} />, label: "Skills", href: "#skills" },
    { icon: <FiMail size={22} />, label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="absolute -translate-y-[50%] p-2 rounded-full bg-[#34363a] left-10 top-[50%] flex flex-col justify-between items-center text-neutral-200 border-2 border-[#3f4048] shadow-lg">
      <div className="flex flex-col gap-4">
        {navItems.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="group relative flex items-center justify-center h-[5rem] w-[5rem] hover:bg-[#202224] rounded-full transition-all duration-300"
          >
            {icon}
            <span className="absolute left-[7rem] scale-0 rounded-full text-gray-700 bg-neutral-200 px-6 py-3 text-[1.4rem] font-medium leading-none group-hover:scale-100 transition-transform">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
