import Link from "next/link";
import React from "react";

const NavItem = ({ title, link }) => {
  return (
    <Link href={link}>
      <span className="text-white  font-semibold" aria-label={title}>
        {title}
      </span>
    </Link>
  );
};
export default NavItem;
