import React from 'react'

const WorksCards = ({ data, idx }) => {
  return (
    <div className="bg-[#080807] flex flex-col gap-8 px-5 md:px-10 w-screen font-ppwatch text-[#D1D1C7] pb-50">
      <hr className="border-0 border-t border-[#D1D1C7] h-px opacity-30" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-80">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {data.num}
          </h1>
        </div>

        <div className="flex flex-col gap-14">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            {data.title}
          </h1>

          <div className="flex flex-col gap-8 mt-3 text-md font-light">
            <p className="text-md font-light tracking-tight md:w-[60%]">
              {data.desc}
            </p>

            <div className="flex flex-col gap-3">
              {data.skills.map((skill, skillIdx) => (
                <React.Fragment key={skillIdx}>
                  <div className="flex items-center gap-8">
                    <span className="text-md font-light tracking-tight">
                      {String(skillIdx + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-lg md:text-xl font-medium tracking-wide">
                      {skill}
                    </h2>
                  </div>

                  {skillIdx !== data.skills.length - 1 && (
                    <hr className="border-0 border-t border-[#D1D1C7] h-px opacity-40" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksCards;