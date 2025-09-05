import Link from "next/link";
import React from "react";
import { FooterColumnProps } from "./types";

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
      <p className="text-sm text-amber-50">{title}</p>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="capitalize hover:text-white transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default FooterColumn;
