import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const ContactLinks = () => {
  const socials = [
    {
      icon: <AiOutlineGithub size={28} />,
      label: "GitHub",
      href: "https://github.com/AwdreyCandido",
    },
    {
      icon: <AiOutlineLinkedin size={28} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/awdrey-candido/",
    },
    {
      icon: <AiOutlineInstagram size={28} />,
      label: "Instagram",
      href: "https://www.instagram.com/awdrey.candido/?next=%2F",
    },
  ];

  return (
    <div className="flex justify-between sm:justify-normal gap-6 text-base">
      <a href="/#contact" className="w-full sm:w-fit">
        <button className="px-8 sm:px-12 w-full sm:w-fit py-4 text-[1.4rem] sm:text-base bg-[#34363a] border-2 border-[#3f4048] text-neutral-200 rounded-full hover:bg-[#202224] transition-all duration-300 shadow-lg">
          Contact Me!
        </button>
      </a>

      {socials.map(({ icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center h-[4.5rem] w-[4.5rem] text-[2rem] cursor-pointer rounded-full border-2 border-[#3f4048] text-neutral-200 hover:bg-[#202224] transition-all duration-300 shadow-md"
        >
          {icon}

          <span className="absolute -bottom-12 scale-0 rounded-full text-gray-700 bg-neutral-200 px-4 py-2 text-[1.2rem] font-medium leading-none group-hover:scale-100 transition-transform">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
