import features from "../data/features.json";

export default function IconsFeatures() {
  return (
    <>
      <section className="w-80 sm:w-130 md:w-190 lg:w-220 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="w-60 lg:w-70 p-6 gap-4 flex flex-col items-center justify-center"
          >
            <img className="h-20 m-2" src={feature.img} alt="" />
            <div className="text-center flex flex-col items-center justify-center">
              <h3 className="font-bold text-sm lg:text-base text-slate-700">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 my-2">{feature.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
