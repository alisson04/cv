import React from "react";
import { List, ListItem } from "@material-tailwind/react";
import { Link } from "react-scroll";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        {name: 'WHO AM I', path: 'home'},
        {name: 'PROJECTS', path: 'projects'},
    ];
  return (
    <header className="text-white">
      <nav className="p-3">
          {menuItems.map((item, index) => (
            <Link
              id={index}
              key={index}
              activeClass="text-cv-borders-color pl-6 bg-transparent border-t border-b"
              className="rounded-none border-gray-700 block cursor-pointer"
              smooth spy to={item.path}
            >
              {item.name}
            </Link>
          ))}
      </nav>
    </header>
  )
}

export default Navbar;