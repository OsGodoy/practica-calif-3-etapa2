import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:h-75 items-center md:items-start justify-end md:justify-start h-140 w-screen bg-no-repeat bg-[url(/images/1.home/illustration1.png)] bg-[position:30%_0px] sm:bg-right-top md:bg-[length:450px]">
        <div className="md:w-100 md:h-65 flex flex-col items-center justify-center">
          <div className="p-4 gap-1 flex flex-col items-center md:items-start justify-center">
            <h2 className="h-10 text-[32px] font-bold bg-gradient-to-br from-fuchsia-300 to-blue-500 bg-clip-text text-transparent">
              Bootstrap 5 theme
            </h2>
            <p className="text-center text-2xl text-slate-500">
              crafted by <strong>ThemeWagon</strong>
            </p>
            <p className="px-8 sm:px-35 md:p-0 text-center md:text-start text-sm text-slate-500 leading-4">
              ThemeWagon offers an wide array of category-oriented Free and
              Premium Bootstrap HTML Templates and Themes
            </p>
          </div>
          <div className="relative top-4 md:top-1 h-15 flex items-center justify-center md:self-start md:pl-4">
            <div className="relative inline-block">
              <button className="relative text-white font-semibold bg-gradient-to-br from-fuchsia-300 to-blue-500 py-1 px-3.5 rounded-md z-10 bottom-4">
                Check Demo
              </button>
              <span className="absolute inset-0 rounded-md bg-gradient-to-br from-fuchsia-300 to-blue-500 blur-md opacity-70"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="h-60 w-80 p-4 px-4 gap-4 flex flex-col items-center justify-center place-self-center">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
        <div className="w-80 sm:w-100 grid grid-cols-6 px-1 py-8 gap-2 sm:gap-6 place-items-center">
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
