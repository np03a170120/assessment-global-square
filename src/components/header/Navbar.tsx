"use client";
import Link from "next/link";
import React from "react";
import navlinks from "../../data/Navigation.json";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className=" bg-white shadow-sm">
      <nav className="  container  mx-auto overflow-x-scroll p-4 py-3  h-full w-full bg-secondary  ">
        <ul className="flex gap-4">
          {navlinks.map((item, index) => (
            <li key={index}>
              <Link
                className={`text-semibold text-[0.875rem] ${
                  currentPath === item.link ? "font-semibold text-primary" : ""
                } `}
                href={!item.isDisabled ? item.link : "/"}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
