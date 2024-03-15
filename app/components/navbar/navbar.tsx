import Link from "next/link";
import React from "react";
import { SiBugatti } from "react-icons/si";
import LinkClient from "./link";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex gap-10 border-b mb-6 px-10 py-4 items-center">
      <Link href="/">
        <SiBugatti size={40} color="#34c7a5" />
      </Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li>
            <LinkClient
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              activeClassName="text-zinc-800"
            >
              {link.label}
            </LinkClient>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
