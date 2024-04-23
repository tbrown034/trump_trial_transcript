import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link className="text-2xl " href="/">
        Trump Trial Transcript
      </Link>
      <div className="justify-between hidden gap-8 md:flex">
        <Link href="/">Search</Link>
        <Link href="/">Download</Link>
        <Link href="/">About</Link>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
