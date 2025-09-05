import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterColumn from "./Footer.column";
import { footerLinks, footerInfo } from "@/app/components/data";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center md:flex-row md:gap-0 md:justify-between md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src={footerInfo.logo}
            alt="logo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            {footerInfo.name}
          </p>
        </Link>
        <p className="text-sm text-gray-400">{footerInfo.copyright}</p>
        <p className="text-sm text-gray-400">{footerInfo.rights}</p>
      </div>

      {footerLinks.map((column, index) => (
        <FooterColumn
          key={index}
          title={column.title}
          links={column.links}
        />
      ))}
    </div>
  );
};

export default Footer;
