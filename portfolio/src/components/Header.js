import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import mk from "../assets/mk-logo.gif";

const Mani = () => {
  const [togglemenu, setstate] = useState(false);
  return (
    <div>
      <header className="flex justify-between px-5 backgrd font-hero">
        <a className="font-bold text-black" href="https://www.bitsathy.ac.in/">
          <img className="h-[90px] w-[90px] logo" src={mk} />
        </a>
        <nav className="hidden md:block ">
          <ul className="flex text-white text-2xl py-8">
            <li>
              <a href="/" className=" hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className=" hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#project" className=" hover:text-black">
                Projects
              </a>
            </li>
            <li>
              <a href="#constact" className=" hover:text-black">
                Contact
              </a>
            </li>
            <li>
              <a href="#resume" className=" hover:text-black">
                resume{" "}
              </a>
            </li>
          </ul>
        </nav>
        {togglemenu && (
          <nav className="block md:hidden mbbar">
            <ul
              onClick={() => setstate(!togglemenu)}
              className="flex flex-col text-white"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#constact">Contact</a>
              </li>
              <li>
                <a href="#resume">resume </a>
              </li>
            </ul>
          </nav>
        )}
        <button onClick={() => setstate(!false)} className="block md:hidden">
          <Bars3Icon className="text-whilte h-5" />
        </button>
      </header>
    </div>
  );
};
export default Mani;
