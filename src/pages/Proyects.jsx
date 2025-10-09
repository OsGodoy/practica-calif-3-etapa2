import React from "react";

export default function Proyects() {
  return (
    <div className="w-full md:h-205 xl:h-230 py-4 lg:gap-12 bg-gradient-to-br from-fuchsia-300/10 to-blue-500/10 flex flex-col items-center justify-center">
      <section className="w-80 sm:w-110 md:w-135 gap-2 px-4 flex flex-col items-center justify-center">
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-slate-700">
          Our Projects
        </h2>
        <p className="text-center text-sm text-slate-500">
          A project is a single or team activity, combining research and design
          with best effort. Here are some of our team's projects
        </p>
      </section>
      <section className="flex justify-center">
        <div className="w-80 sm:w-150 p-4 gap-4 columns-1 sm:columns-3">
          <img
            src="/images/5.projects/image1.png"
            alt=""
            className="mb-4 w-full rounded-lg break-inside-avoid"
          />
            <img
              src="/images/5.projects/image2.png"
              alt=""
              className="mb-4 w-full rounded-lg break-inside-avoid"
            />
          <img
            src="/images/5.projects/image3.png"
            alt=""
            className="mb-4 w-full rounded-lg break-inside-avoid"
          />
            <img
              src="/images/5.projects/image4.png"
              alt=""
              className="mb-4 w-full rounded-lg break-inside-avoid"
            />
          <img
            src="/images/5.projects/image5.png"
            alt=""
            className="mb-4 w-full rounded-lg break-inside-avoid"
          />
          <img
            src="/images/5.projects/image6.png"
            alt=""
            className="mb-4 w-full rounded-lg break-inside-avoid"
          />
        </div>
      </section>
    </div>
  );
}
