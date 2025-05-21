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
      At Meu Cuidador, I was responsible for:

      • Planning, prototyping, and rebuilding the institutional website and web platform
      • Developing responsive and user-friendly interfaces using advanced web technologies
      • Implementing cross-browser compatibility and accessibility best practices
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

      • Implemented UIs with React and Typescript, adhering to desing specifications and functional requirements. \n
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
    title: "Frontend Developer IV",
    description: `
      At Tiger Tech & GHT, I was responsible for:

      • Implementing new features and solving issues according to client specifications across multiple projects
      • Maintaining and optimizing the existing codebase throughout various repositories
      • Collaborating with an international team based in Malaysia and India to ensure efficient development workflows
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
