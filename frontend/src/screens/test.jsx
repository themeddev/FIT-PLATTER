import { useState } from 'react';

const Test = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a href="/" className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
            Notus Angular
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={`lg:flex flex-grow items-center ${navbarOpen ? 'block' : 'hidden'}`} id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-navbar"
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              >
                <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
                Docs
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
          <app-index-dropdown class="block"></app-index-dropdown>
        </li>
        <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F"
            target="_blank"
          >
            <i class="text-blueGray-400 fab fa-facebook text-lg leading-lg"></i>
            <span class="lg:hidden inline-block ml-2">Share</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
            target="_blank"
          >
            <i class="text-blueGray-400 fab fa-twitter text-lg leading-lg"></i>
            <span class="lg:hidden inline-block ml-2">Tweet</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
            href="https://github.com/creativetimofficial/notus-angular?ref=na-index-navbar"
            target="_blank"
          >
            <i class="text-blueGray-400 fab fa-github text-lg leading-lg"></i>
            <span class="lg:hidden inline-block ml-2">Star</span>
          </a>
        </li>

        <li class="flex items-center">
          <button
            class="bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fas fa-arrow-alt-circle-down"></i> Download
          </button>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Test;
