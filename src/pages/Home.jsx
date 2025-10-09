import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="flex flex-col h-140 md:h-75 lg:h-100 xl:h-128 items-center md:items-center justify-end md:justify-start w-screen bg-no-repeat bg-[url(/images/1.home/illustration1.png)] bg-[position:18px_0px] bg-[length:620px] sm:bg-right-top md:bg-[length:450px] lg:bg-[length:720px] xl:bg-[length:950px]">
        <div className="md:w-182 lg:w-250 xl:w-310 md:h-65 lg:h-100 xl:h-130 flex flex-col items-center md:items-start justify-center">
          <div className="py-4 lg:p-4 gap-1 flex flex-col items-center md:items-start justify-center">
            <h2 className="text-3xl sm:text-[38px] xl:text-[40px] font-bold bg-gradient-to-br from-fuchsia-300 to-blue-500 bg-clip-text text-transparent">
              Bootstrap 5 theme
            </h2>
            <p className="text-center text-2xl sm:text-3xl xl:text-[32px] text-slate-500">
              crafted by <strong>ThemeWagon</strong>
            </p>
            <p className="w-80 sm:w-100 md:w-95 px-8 md:p-0 text-center md:text-start text-sm md:text-[14px] text-slate-500 leading-4">
              ThemeWagon offers an wide array of category-oriented Free and
              Premium Bootstrap HTML Templates and Themes
            </p>
          </div>
          <div className="relative top-4 md:top-1 lg:top-4 h-15 lg:pl-4 flex items-center justify-center md:self-start">
            <div className="relative inline-block">
              <button className="relative text-white font-semibold bg-gradient-to-br from-fuchsia-300 to-blue-500 py-1 px-3.5 rounded-md z-10 bottom-4">
                Check Demo
              </button>
              <span className="absolute inset-0 rounded-md bg-gradient-to-br from-fuchsia-300 to-blue-500 blur-md opacity-70"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="h-60 lg:h-104 xl:h-75 w-80 sm:w-160 md:w-190 lg:w-250 xl:w-310 p-4 gap-4 md:gap-10 lg:gap-20 xl:gap-12 flex flex-col items-center justify-center place-self-center">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
        <div className="w-80 sm:w-full grid grid-cols-6 md:flex items-center justify-between px-1 py-8 gap-2 place-items-center">
          <img
            className="col-span-2 w-20 md:w-30"
            src="./images/1.home/google.png"
            alt=""
          />
          <img
            className="col-span-2 w-20 md:w-25"
            src="./images/1.home/netflix.png"
            alt=""
          />
          <img
            className="col-span-2 w-20 md:w-25"
            src="./images/1.home/microsoft.png"
            alt=""
          />
          <img
            className="col-span-3 w-28 md:w-33"
            src="./images/1.home/mailbuster.png"
            alt=""
          />
          <img
            className="col-span-3 w-20 md:w-25"
            src="./images/1.home/themewagon.png"
            alt=""
          />
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
      </section>
    </>
  );
}
