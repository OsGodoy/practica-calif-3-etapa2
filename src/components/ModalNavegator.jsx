import { useContext } from "react";
import ToggleNavetagorContext from "../contexts/ToggleNavetagorContext";
import { Link } from "react-router-dom";

export default function ModalNavegator({ setIsToggleNavegator }) {
  const isToggleNavegator = useContext(ToggleNavetagorContext);

  return (
    <>
      <div
        className={`flex flex-col items-end justify-start duration-300 w-screen fixed min-h-screen bg-blue-900/50 z-[150]
        ${
          isToggleNavegator
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsToggleNavegator(false)}
      >
        <section
          className={`w-50 flex items-center duration-300
            ${isToggleNavegator ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-120 w-full rounded-bl-lg bg-white/70 outline-2 outline-white/80 backdrop-blur-md flex items-center justify-center">
            <ul
              className="text-blue-600 font-medium gap-6 flex flex-col items-center justify-center"
              onClick={() => setIsToggleNavegator(false)}
            >
              <Link to="/">Home</Link>
              <div className="h-[2px] w-30 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <Link to="/services">Service</Link>
              <div className="h-[2px] w-30 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <Link to="/details">Details</Link>
              <div className="h-[2px] w-30 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <Link to="/team">Team</Link>
              <div className="h-[2px] w-30 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
