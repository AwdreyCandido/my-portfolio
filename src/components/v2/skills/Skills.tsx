const frontEnd = [
  "js",
  "html",
  "css",
  "bootstrap",
  "sass",
  "styledcomponents",
  "tailwind",
  "react",
  "redux",
  "nextjs",
  "angular",
  "gatsbyjs",
  "ts",
  "figma",
];
const backEnd = [
  "js",
  "nodejs",
  "express",
  "nestjs",
  "cs",
  "dotnet",
  "php",
  "laravel",
];
const mobile = ["react", "flutter", "kotlin", "androidstudio"];
const tools = [
  "git",
  "docker",
  "npm",
  "mysql",
  "mongodb",
  "aws",
  "postman",
  "supabase",
];

const Skills = () => {
  const skillGroups = [
    { name: "Front-End", icons: frontEnd },
    { name: "Back-End", icons: backEnd },
    { name: "Mobile", icons: mobile },
    { name: "Tools", icons: tools },
  ];

  return (
    <div className="flex flex-col gap-14">
      {skillGroups.map((group) => (
        <div key={group.name} className="group relative">
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-[#3f4048] bg-[#2a2c30] p-4 shadow-lg hover:bg-[#202224] hover:shadow-lg transition-all h-[8rem]">
            <div className="flex flex-wrap items-center justify-center gap-3 h-full w-full">
              {group.icons.map((icon) => (
                <img
                  key={icon}
                  src={`https://skillicons.dev/icons?i=${icon}`}
                  alt={icon}
                  className="h-full max-h-[4rem] object-contain"
                />
              ))}
            </div>
          </div>
          <span className="absolute -top-[20%] left-[50%] -translate-x-[50%] rounded-full text-gray-700 bg-neutral-200 px-4 py-2 text-[1.2rem] font-medium leading-none scale-0 group-hover:scale-100 group-hover:-top-[35%] transition-all z-10">
            {group.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
