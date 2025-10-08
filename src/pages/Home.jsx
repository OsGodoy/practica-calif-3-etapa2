import React from "react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-end h-140 w-full bg-auto bg-no-repeat bg-[url(/images/1.home/illustration1.png)] sm:bg-right-top">
        <div className="p-4 gap-1 flex flex-col items-start justify-center">
          <h2 className="h-10 text-[32px] font-bold bg-gradient-to-br from-fuchsia-300 to-blue-500 bg-clip-text text-transparent">
            Bootstrap 5 theme
          </h2>
          <p className="text-start text-2xl text-slate-600">
            crafted by <strong>ThemeWagon</strong>
          </p>
          <p className="text-start text-slate-600 leading-4">
            ThemeWagon offers an wide array of category-oriented Free and
            Premium Bootstrap HTML Templates and Themes
          </p>
        </div>
        <div className="relative top-4 h-15 flex items-center justify-center">
          <div className="relative inline-block">
            <button className="relative text-white font-semibold bg-gradient-to-br from-fuchsia-300 to-blue-500 py-2 px-4 rounded-md z-10 bottom-4">
              Check Demo
            </button>
            <span className="absolute inset-0 rounded-md bg-gradient-to-br from-fuchsia-300 to-blue-500 blur-md opacity-70"></span>
          </div>
        </div>
      </section>
      <section className="h-48 w-80 p-4 gap-4 flex flex-col justify-center">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
        <div className="grid grid-cols-6 px-1 py-4 gap-2 place-items-center">
          <img
            className="col-span-2 w-20"
            src="./images/1.home/google.png"
            alt=""
          />
          <img
            className="col-span-2 w-20"
            src="./images/1.home/netflix.png"
            alt=""
          />
          <img
            className="col-span-2 w-20"
            src="./images/1.home/microsoft.png"
            alt=""
          />
          <img
            className="col-span-3 w-28"
            src="./images/1.home/mailbuster.png"
            alt=""
          />
          <img
            className="col-span-3 w-20"
            src="./images/1.home/themewagon.png"
            alt=""
          />
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
      </section>
    </>
  );
}
