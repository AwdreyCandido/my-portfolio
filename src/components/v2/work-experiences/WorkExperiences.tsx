import { experiences } from "../../../data/experiences";
import calculateWorktime from "../../../data/utils";

const WorkExperiences = () => {
  return (
    <section className="flex flex-col gap-10">
      {experiences
        .sort((a, b) => b.id - a.id)
        .map((experience) => {
          return (
            <figure
              key={experience.id}
              className="flex flex-col sm:flex-row w-full rounded-2xl bg-[#34363a] border-2 border-[#3f4048] hover:bg-[#202224] hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer text-neutral-200"
            >
              <div className="flex flex-col items-center flex-1 h-full py-6 px-3">
                <div
                  className={`flex items-center justify-center overflow-hidden h-[7rem] w-[7rem] rounded-2xl mb-3 ${
                    experience.background ? "bg-neutral-200" : "bg-[#202224]"
                  }  ${
                    experience.logo
                      ? ""
                      : "border-2 border-[#3f4048] border-dashed"
                  }`}
                >
                  {experience.logo && (
                    <img
                      className="h-[7rem] w-[7rem] object-contain"
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                    />
                  )}
                </div>
                <p className="text-center text-xl font-bold">
                  {experience.company}
                </p>
                <div className="text-center text-sm text-[#999b9d] mt-2">
                  <p>
                    {experience.startedAt} | {experience.endedAt ?? "Today"}
                  </p>
                  <p>
                    {calculateWorktime(
                      experience.startedAt,
                      experience.endedAt
                    )}
                  </p>
                </div>
              </div>
              <div className="w-[1.5px] bg-[#3f4048]"></div>
              <div className="flex flex-col flex-[3] h-full p-6">
                <h3 className="text-2xl font-bold mb-4">{experience.title}</h3>
                <p className="text-[#c4c4c4] leading-relaxed">
                  {experience.description.split("\n").map((line, index) =>
                    line.trim() ? (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ) : null
                  )}
                </p>

                {/* <ul className="flex flex-wrap items-center gap-3 mt-6 text-sm">
                  <span className="font-semibold text-neutral-100">
                    Main Stack:
                  </span>
                  {experience.stack.map((item, index) => (
                    <li
                      key={index}
                      className="px-3 py-1 rounded-md bg-[#202224] text-neutral-200 border border-[#3f4048]"
                    >
                      {item}
                    </li>
                  ))}
                </ul> */}
              </div>
            </figure>
          );
        })}
    </section>
  );
};

export default WorkExperiences;
