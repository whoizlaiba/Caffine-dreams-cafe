
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky top-0 z-20 bg-black"> 
      <div className="h-14 grid grid-cols-2 sm:grid-cols-4 items-center w-[95%] m-auto">
        <h1 className="bad-script-regular text-white text-2xl font-extrabold text-center sm:text-left hover:text-yellow-800">Caffeine Dreams</h1>

        <div className="sm:hidden flex justify-end">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>

        <ul className="hidden sm:flex gap-10 text-white font-bold items-center justify-center sm:col-span-2 m-auto">
          <li className="bad-script-regular">
            <Link href="/" className="hover:text-yellow-800">
              Home
            </Link>
          </li>
          <li className="bad-script-regular">
            <Link href="#about" className="hover:text-yellow-800">
              About
            </Link>
          </li>
          <li className="bad-script-regular">
            <Link href="#menu" className="hover:text-yellow-800">
              Menu
            </Link>
          </li>
          <li className="bad-script-regular">
            <Link href="#reviews" className="hover:text-yellow-800">
              Reviews
            </Link>
          </li>
          <li className="bad-script-regular">
            <Link href="#contact" className="hover:text-yellow-800">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden text-white font-bold py-4 bg-black">
          <ul className="flex flex-col items-center gap-4">
            <li className="bad-script-regular">
              <Link href="#home" className="hover:text-yellow-800">
                Home
              </Link>
            </li>
            <li className="bad-script-regular">
              <Link href="#about" className="hover:text-yellow-800">
                About
              </Link>
            </li>
            <li className="bad-script-regular">
              <Link href="#menu" className="hover:text-yellow-800">
               Menu
              </Link>
            </li>
            <li className="bad-script-regular">
            <Link href="#reviews" className="hover:text-yellow-800">
              Reviews
            </Link>
          </li>
            <li className="bad-script-regular">
              <Link href="#contact" className="hover:text-yellow-800">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
