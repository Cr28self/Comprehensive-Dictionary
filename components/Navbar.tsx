import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="top-0 left-0 z-10 py-4 px-2 w-full border-b sticky mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center h-14 container">
        <Link href="/">Logo</Link>
        <nav>
          <ul className="flex list-none">
            <li>
              <Link href="/dictionary" className="px-2 py-4">
                Dictionary
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-2 py-4">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
