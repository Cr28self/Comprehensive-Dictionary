import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="top-0 left-0 flex z-10 justify-between py-4 px-2 w-full items-center text-xl outline sticky mx-auto">
      <Link href="/">Logo</Link>
      <nav>
        <ul className="flex list-none">
          <li>
            <Link href="/about" className="px-2 py-4">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="px-2 py-4">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
