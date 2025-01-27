import { experiences } from "../../data/experiences";

const MainSection = () => {
  function calculateWorktime(start: string, end: string | null): string {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date(); // Use current date if `end` is null

    const diffInMs = endDate.getTime() - startDate.getTime();

    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
    const diffInMonths = Math.floor(
      (diffInMs % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44)
    );

    if (diffInYears) {
      return `${diffInYears} years, ${diffInMonths} months`;
    } else {
      return `${diffInMonths} months`;
    }
  }

  return (
    <section
      id="projects"
      className=" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed px-[3rem] sm:px-[10rem]  md:px-[15rem] lg:px-[20rem] xl:px-[30rem] dark:border-b-gray-border dark:bg-darkgray dark:text-white "
    >
      <h1 className="text-header text-center sm:text-start">
        Professional experiences
      </h1>

      <section className="mt-16 flex flex-col gap-10 ">
        {experiences
          .sort((a, b) => b.id - a.id)
          .map((experience) => {
            return (
              <figure className="flex items-center flex-col sm:flex-row min-h-[10rem] w-full rounded-2xl bg-slate-50 overflow-hidden border-2 border-slate-200 dark:border-[#363636] border-dashed dark:bg-darkgray dark:text-white hover:shadow-lg duration-300 cursor-pointer">
                <div className="flex flex-col items-center flex-1 h-full py-6 px-3">
                  <div className={`flex items-center justify-center overflow-hidden h-[7rem] w-[7rem] bg-white rounded-2xl mb-3 ${experience.logo ? '' : 'border-2 border-slate-200 border-dashed' }`}>
                    <img
                      className="h-[7rem] w-[7rem] object-contain"
                      src={experience.logo ?? ''}
                      alt={`${experience.company} logo`}
                    />
                  </div>
                  <p className="text-center text-[1.6rem] my-2 font-bold">
                    {experience.company}
                  </p>
                  <div className="text-center text-[1rem]">
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
                <div className="flex flex-col justify-between flex-[3] h-full p-6 border-l-2 border-slate-200 dark:border-[#363636] border-dashed">
                  <h3 className="text-2xl font-bold mb-4">
                    {experience.title}
                  </h3>
                  <p>
                    {experience.description.split("\n").map((line, index) =>
                      line.trim() ? (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ) : null
                    )}
                  </p>
                  <ul className="flex flex-wrap items-center gap-3 mt-8">
                    Main Stack:
                    {experience.stack.map((item) => (
                      <li className="p-1 px-2 rounded-md dark:bg-white dark:text-darkgray text-white bg-darkgray">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </figure>
            );
          })}
      </section>
    </section>
  );
};

export default MainSection;
