import details from "../data/details.json";

export default function Details() {
  return (
    <>
      <div className="w-full sm:h-140 lg:h-210 xl:h-230 py-4 gap-4 lg:gap-12 bg-gradient-to-br from-fuchsia-300/10 to-blue-500/10 flex flex-col items-center justify-center">
        <section className="w-80 sm:w-150 md:w-190 lg:w-220 lg:mb-25 gap-4 sm:gap-0 grid grid-cols-1 sm:grid-rows-2 place-items-center">
          {details.map((detail) => (
            <div
              key={detail.id}
              className={`p-4 lg:p-8 gap-4 sm:gap-15 flex flex-col items-center justify-center
                ${detail.id % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"} `}
            >
              <img className="size-40 sm:size-60 lg:size-70 xl:size-80" src={detail.img} alt="" />
              <div className="gap-4 lg:w-65 xl:w-75 flex flex-col items-start justify-center">
                <h3 className="font-bold text-lg md:text-2xl text-slate-700">
                  {detail.title}
                </h3>
                <p className="text-xs sm:text-[10px] sm:w-60  text-slate-500">
                  {detail.desc1}
                </p>
                <p className="text-xs sm:text-[10px] sm:w-60  text-slate-500">
                  {detail.desc2}
                </p>
                <button className="font-semibold py-1 px-2 rounded-lg border-1 border-blue-400">
                  <p className="text-xs bg-gradient-to-br from-fuchsia-300 to-blue-500 bg-clip-text text-transparent">
                    Read More
                  </p>
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
