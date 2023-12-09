import Link from "next/link";
import React from "react";

const ClientNormalMenu = () => {
  return (
    <div className="flex gap-7 relative  items-center">
      <Link className="afterLinks relative" href="/">
        Home
      </Link>
      <Link className="afterLinks relative" href="/Projects">
        Projects
      </Link>
      <Link className="afterLinks relative" href="/About">
        My Skills
      </Link>
      <Link className="afterLinks relative" href="/Contact">
        Contact
      </Link>
    </div>
  );
};

export default ClientNormalMenu;
