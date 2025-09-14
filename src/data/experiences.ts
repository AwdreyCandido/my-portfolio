import eap from "./../images/logos/logo-eap.webp";
import ght from "./../images/logos/logo-ght.webp";
import mec from "./../images/logos/logo-mc.png";
import mgr from "./../images/logos/logo-mgr.png";

export const experiences = [
  {
    id: 1,
    company: "Mangrover LTDA",
    title: "Front-End Developer",
    background: "#ffffff",
    description: `
      • Designed and developed the user interface for the GPM (Gestor Político Mangrover) system
      • Ensured seamless integration with Back-End services
      • Deployed the system on a VPS server, leveraging Docker for scalable distribution
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
    title: "Front-End Developer & Web Designer",
    background: "#ffffff",
    description: `
      • Planned, prototyped, and redesigned the institutional website and platform
      • Built responsive and user-friendly interfaces
      • Implemented accessibility and cross-browser compatibility best practices
    `,
    startedAt: "2023-09-01",
    endedAt: "2024-09-01",
    stack: ["React.js", "Javascript", "Typescript", "Node.js"],
    logo: mec,
  },
  {
    id: 3,
    company: "Engenharia de Alta Performance",
    title: "Full-Stack Developer",
    background: "#ffffff",
    description: `
      • Implemented modern UIs with React and TypeScript
      • Contributed to RESTful APIs with NestJS, adding new features and improvements
      • Refactored a legacy application into a modern and responsive interface
    `,
    startedAt: "2024-08-01",
    endedAt: "2024-12-01",
    stack: ["React.js", "NestJS", "Javascript", "Typescript", "Node.js"],
    logo: eap,
  },
  {
    id: 4,
    company: "Tiger Tech & Golden Hippo",
    title: "Front-End Developer IV",
    background: null,
    description: `
      • Developed new features and fixed critical issues across multiple projects
      • Maintained and optimized multi-repository codebases
      • Collaborated with international teams from Malaysia and India
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
