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
          <section className="text-sm text-slate-600 pt-4 gap-1 flex flex-col items-center justify-center">
            <h6>Follow Us</h6>
            <span className="gap-2 flex items-center justify-center text-blue-400">
              <div className="border rounded-full p-0.5 flex items-center justify-center">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="border rounded-full p-0.5 flex items-center justify-center">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="border rounded-full p-0.5 flex items-center justify-center">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </div>
              <div className="border rounded-full p-0.5 flex items-center justify-center">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </section>

          <section className="pt-4 text-sm gap-2 text-slate-600 flex flex-col items-center justify-center">
            <p>Subscribe to our newsletter</p>
            <div className="relative flex items-center justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="border-1 right-2 border-blue-400 text-blue-400 size-5 p-1 rounded-full absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <input
                className="w-60 border-3 text-xs border-white bg-gradient-to-r from-slate-50 to-white p-1 px-3 rounded-full"
                type="text"
                placeholder="✉ Email"
              />
            </div>
          </section>

          <section className="text-xs text-slate-500 p-4 w-full flex items-center justify-center">
            <table className="text-left">
              <thead className="">
                <tr className="text-slate-600">
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
          </section>
        </div>
      </footer>
    </>
  );
}
