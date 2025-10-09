import React from "react";
import FooterComps from "./FooterComps";

export default function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-center bg-[length:1380px] xl:bg-[length:1880px] bg-bottom bg-[url(/images/footer/image1.png)] bg-no-repeat">
        <section className="w-80 sm:w-150 h-65 px-4 gap-2 sm:m-4 flex flex-col items-center justify-center leading-9">
          <div className="text-3xl sm:text-[38px] xl:text-[40px] font-bold bg-gradient-to-br from-fuchsia-300 to-blue-500 bg-clip-text text-transparent">
            <h2 className="text-center">Exclusively by ThemeWagon</h2>
          </div>
          <p className="w-80 sm:w-140 px-8 text-center text-sm text-slate-500">
            Klean is an elegant HTML5 template and a perfect starting point for
            your next SaaS oriented site, carefully curated by ThemeWagon
          </p>
          <div className="relative top-4 h-15 flex items-center justify-center">
            <div className="relative inline-block">
              <button className="relative text-white font-semibold bg-gradient-to-br from-fuchsia-300 to-blue-500 py-1 px-3.5 rounded-full z-10 bottom-4">
                Download Free
              </button>
              <span className="absolute inset-0 rounded-md bg-gradient-to-br from-fuchsia-300 to-blue-500 blur-md opacity-70"></span>
            </div>
          </div>
        </section>
        <div className="w-full flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm">
          <FooterComps />
          <section className="w-full sm:mt-4">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
            <p className="text-slate-500 text-xs text-center p-4 flex items-center justify-center">
              © Os Godoy, 2025
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}
