import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-auto bg-bottom bg-[url(/images/footer/image1.png)] bg-no-repeat">
        <div className="bg-white/50 backdrop-blur-sm">
          <p className="text-slate-500 text-xs text-center p-4 flex items-center justify-center">
            © Os Godoy, 2025
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
          <div className="text-sm text-slate-500 p-4 w-full flex items-center justify-center">
            <table className="text-left">
              <thead className="">
                <tr>
                  <th className="px-2 py-1">About</th>
                  <th className="px-2 py-1">Resources</th>
                  <th className="px-2 py-1">Team</th>
                  <th className="px-2 py-1">Blog</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1">Prices</td>
                  <td className="px-2 py-1">Terms</td>
                  <td className="px-2 py-1">Developer</td>
                  <td className="px-2 py-1">CEO</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">About</td>
                  <td className="px-2 py-1">Help</td>
                  <td className="px-2 py-1">Designer</td>
                  <td className="px-2 py-1">Lifestyle</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Services</td>
                  <td className="px-2 py-1">Privacy</td>
                  <td className="px-2 py-1"></td>
                  <td className="px-2 py-1">Article</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Career</td>
                  <td className="px-2 py-1"></td>
                  <td className="px-2 py-1"></td>
                  <td className="px-2 py-1">Tech</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </>
  );
}
