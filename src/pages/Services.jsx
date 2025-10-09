import React from "react";
import ServiceCards from "../components/ServiceCards";

export default function Services() {
  return (
    <>
      <div className="w-full lg:h-210 xl:h-250 py-4 gap-4 lg:gap-12 bg-gradient-to-br from-fuchsia-300/10 to-blue-500/10 flex flex-col items-center justify-center">
        <img
          className="hidden sm:flex absolute size-50 bottom-[65%] lg:bottom-[55%] left-0 lg:left-[0%] xl:left-[10%] 2xl:left-[20%]"
          src="./images/2.services/illustration1.png"
          alt=""
        />
        <section className="w-80 sm:w-110 md:w-135 gap-2 px-4 flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-slate-700">
            Service
          </h2>
          <p className="text-center text-sm text-slate-500">
            We offer youth with chances for career development in their
            practice. We also support a wide range of services to ensure client
            satisfaction
          </p>
        </section>
        <ServiceCards />
      </div>
    </>
  );
}
