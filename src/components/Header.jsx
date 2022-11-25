import React from "react";
import avatar from "/src/assets/img/avatar-2-1.png";

function Header() {
  return (
    <header className="p-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto my-4 md:justify-center md:space-x-8">
        {/* <ul className="items-stretch hidden space-x-3 md:flex">
                <li className="flex">
                    <a rel="noopener noreferrer" href="#"
                        className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#"
                        className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#"
                        className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Link</a>
                </li>
            </ul>  */}
        <a
          href="/"
          rel="noopener"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src={avatar}
            className="p-2 border-teal-400 border-2 animate-[pulse_8s_ease-in-out_infinite] rounded-full max-w-sm shadow-2x w-20 h-20 text-violet-400"
          />
        </a>
        {/* <ul className="items-stretch hidden space-x-3 md:flex">
                <li className="flex">
                    <a rel="noopener noreferrer" href="#"
                        className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#"
                        className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#"
                        className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                </li>
            </ul> */}
        <button title="Button" type="button" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
