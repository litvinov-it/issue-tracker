"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  href: string;
  children: React.ReactNode;
  activeClassName: string;
  className: string;
}

const LinkClient = ({ href, children, activeClassName, className }: IProps) => {
  const pathname = usePathname();

  return (
    <Link
      key={href + children}
      href={href}
      className={`${pathname === href ? activeClassName : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkClient;
