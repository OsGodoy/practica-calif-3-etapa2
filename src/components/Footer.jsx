import React from "react";
import FooterComps from "./FooterComps";
import Download from "./Download";

export default function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-center bg-[length:1380px] xl:bg-cover bg-bottom bg-[url(/images/footer/image1.png)] bg-no-repeat">
        <Download />
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
