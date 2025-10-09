import { Link } from "react-router-dom";

export default function Header({ setIsToggleNavegator }) {
  return (
    <nav className="p-4 bg-gradient-to-r from-fuchsia-100 via-white to-blue-100 w-full sticky top-0 flex items-center justify-center z-[100]">
      <div className="w-full md:w-182 lg:w-250 xl:w-310 flex items-center justify-between">
        <div className="gap-12 flex items-center justify-center">
          <Link to="/">
            <img
              className="relative md:bottom-0.5 w-30 md:w-25"
              src="/images/klean-logo.png"
              alt="logo"
            />
          </Link>
          <nav className="text-sm hidden md:flex items-center justify-between">
            <ul className="text-neutral-500 font-medium gap-6 flex items-center justify-center">
              <Link to="/">Home</Link>
              <Link to="/services">Service</Link>
              <Link to="/features">Features</Link>
              <Link to="/details">Details</Link>
              <Link to="/team">Team</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-2">
          <section className="gap-2 flex items-center justify-center">
            <button className="lg:hidden md:p-1 md:bg-gradient-to-br from-fuchsia-300 to-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7 md:size-5 text-blue-400 md:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="p-1 px-2 rounded-md mr-1 hidden lg:flex items-center justify-center">
              <p className="text-sm font-bold text-blue-500">Log In</p>
            </button>
            <button className="bg-white p-1 px-2 rounded-md ml-1 hidden md:flex items-center justify-center drop-shadow-lg drop-shadow-blue-200">
              <p className="text-sm font-bold bg-gradient-to-br from-fuchsia-300 to-blue-500 bg-clip-text text-transparent">
                Sing Up
              </p>
            </button>
            <button onClick={() => setIsToggleNavegator(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 text-blue-400 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </section>
        </div>
      </div>
    </nav>
  );
}
