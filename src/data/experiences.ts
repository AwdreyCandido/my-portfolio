import eap from "./../images/logos/logo-eap.webp";
import ght from "./../images/logos/logo-ght.webp";
import mec from "./../images/logos/logo-mc.png";
import mgr from "./../images/logos/logo-mgr.png";

export const experiences = [
  {
    id: 1,
    company: "Mangrover LTDA",
    title: "Frontend Developer",
    description: `
      At Mangrover, I was responsible for: 

      • Designing and building the interface of the GPM (Gestor Político Mangrover) system
      • Utilizing web development technologies
      • Ensuring seamless integration of the information flow with the Back-end
      • Leading the successful deployment of the system on a Virtual Private Server (VPS)
      • Leveraging Docker technology for efficient application distribution
    `,
    startedAt: "2022-03-01",
    endedAt: "2024-04-01",
    stack: [
      "React.js",
      "Next.js",
      "Javascript",
      "Typescript",
      "Node.js",
      "Docker",
      "PHP",
      "Laravel",
    ],
    logo: mgr,
  },
  {
    id: 2,
    company: "Meu Cuidador",
    title: "Frontend Developer & Web Designer",
    description: `
      As a Front-End Developer at Meu Cuidador, I led the planning, prototyping and reconstruction of the 
      institutional website and web platform, using advanced web development technologies.
    `,
    startedAt: "2023-08-01",
    endedAt: "2024-09-01",
    stack: ["React.js", "Javascript", "Typescript", "Node.js"],
    logo: mec,
  },
  {
    id: 3,
    company: "Engenharia de Alta Performance",
    title: "Full-stack Developer",
    description: `
      While working in EAP I:

      • Implemented UIs with React and Typescript, adhering to desing specifications and functional requirements.
      • Contributed to the development and maintenance of RESTful APIs using NestJS and Typescript, including integration of new features to enhance the web app capabilities.
      • Refactored the old application UI into a new modern and responsive UI.
    `,
    startedAt: "2024-08-01",
    endedAt: "2024-12-01",
    stack: ["React.js", "NestJs", "Javascript", "Typescript", "Node.js"],
    logo: eap,
  },
  {
    id: 4,
    company: "Tiger Tech & Golden Hippo",
    title: "Frontend Developer III",
    description: `
      I was responsible for implementing new features according to the clients specifications and \n
      maintaining the existing codebase throughout various repositories in collaboration with the \n
      international team in Malaysia and India.\n
    `,
    startedAt: "2024-09-01",
    endedAt: null,
    stack: [
      "React.js",
      "Javascript",
      "Typescript",
      "Node.js",
      "PHP",
      "Laravel",
    ],
    logo: ght,
  },
];
