import { FiCode, FiSmartphone, FiMonitor, FiFilm } from "react-icons/fi";

const ServiceCards = () => {
  const services = [
    {
      icon: <FiCode size={40} />,
      title: "Web Development",
      description:
        "I build robust and scalable web applications with modern frameworks, ensuring performance, accessibility, and maintainability.",
    },
    {
      icon: <FiMonitor size={40} />,
      title: "Web Design",
      description:
        "I craft clean, intuitive, and visually appealing designs that focus on user experience and responsive layouts.",
    },
    {
      icon: <FiSmartphone size={40} />,
      title: "Mobile Development",
      description:
        "I develop cross-platform mobile applications that deliver seamless experiences on both iOS and Android devices.",
    },
    {
      icon: <FiFilm size={40} />,
      title: "Video Editing",
      description:
        "I create engaging video content by editing, enhancing, and refining footage to deliver professional-quality results.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 select-none">
      {services.map(({ icon, title, description }) => (
        <div
          key={title}
          className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-[#34363a] border-2 border-[#3f4048] hover:bg-[#202224] transition-all duration-300 shadow-lg"
        >
          <div className="text-neutral-200">{icon}</div>
          <h3 className="text-md font-semibold text-neutral-100">{title}</h3>
          <p className="text-md text-[#999b9d] leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
