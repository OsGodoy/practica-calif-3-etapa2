import React from "react";
import IconsFeatures from "../components/IconsFeatures";

export default function Features() {
  return (
    <>
      <div className="w-screen md:h-200 py-4 gap-4 lg:gap-12 bg-gradient-to-br from-fuchsia-300/10 to-blue-500/10 flex flex-col items-center justify-center">
        <section className="w-80 sm:w-110 md:w-135 gap-2 px-4 flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-slate-700">
            Features
          </h2>
          <p className="text-center text-sm text-slate-500">
            We provide a number of excellent features that will undoubtedly
            improve the user experience. We also provide a better support system
          </p>
        </section>
        <IconsFeatures />
      </div>
    </>
  );
}
