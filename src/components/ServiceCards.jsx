import React from "react";

export default function ServiceCards() {
  return (
    <>
      <section className="w-80 sm:w-130 md:w-190 lg:w-220 lg:mb-25 gap-4 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 place-items-center">
        <div className="sm:col-span-2 md:col-span-1 w-60 lg:w-70 p-6 lg:p-8 gap-4 border-3 rounded-2xl lg:rounded-4xl border-white bg-white/50 backdrop-blur-md flex flex-col items-center justify-center">
          <img
            className="size-25 m-4 lg:m-8"
            src="./images/2.services/icon1.png"
            alt=""
          />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-bold text-sm lg:text-base text-slate-700">
              Send Texts Instantly
            </h3>
            <p className="text-sm text-slate-500 my-4 lg:my-8">
              Financial planning, forecasting and adjusting rapidly with
              customer demands and budgets.
            </p>
            <p className="text-sm text-blue-500">Learn More →</p>
          </div>
        </div>
        <div className="sm:col-span-2 md:col-span-1 w-60 lg:w-70 p-6 lg:p-8 gap-4 border-3 rounded-2xl lg:rounded-4xl border-white bg-white/50 backdrop-blur-md flex flex-col items-center justify-center">
          <img
            className="size-25 m-4 lg:m-8"
            src="./images/2.services/icon2.png"
            alt=""
          />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-bold text-sm lg:text-base text-slate-700">
              Better Organized
            </h3>
            <p className="text-sm text-slate-500 my-4 lg:my-8">
              Latest technology and experienced guidance, trained HR specialists
              to keep updated.
            </p>
            <p className="text-sm text-blue-500">Learn More →</p>
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-2 md:col-span-1 w-60 lg:w-70 p-6 lg:p-8 gap-4 border-3 rounded-2xl lg:rounded-4xl border-white bg-white/50 backdrop-blur-md flex flex-col items-center justify-center">
          <img
            className="size-25 m-4 lg:m-8"
            src="./images/2.services/icon3.png"
            alt=""
          />
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-bold text-sm lg:text-base text-slate-700">
              Analytical Statistics
            </h3>
            <p className="text-sm text-slate-500 my-4 lg:my-8">
              Messages, real-time reminders, memos, and many more will keep your
              team in sync.
            </p>
            <p className="text-sm text-blue-500">Learn More →</p>
          </div>
        </div>
      </section>
    </>
  );
}
