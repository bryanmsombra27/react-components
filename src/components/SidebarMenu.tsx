"use client";

import { useState } from "react";
import {
  FaHouse,
  FaUser,
  FaMessage,
  FaCircleQuestion,
  FaGears,
  FaHouseLock,
  FaDoorClosed,
} from "react-icons/fa6";
// import "./dashboard.css";
interface MenuRoute {
  title: string;
  icon: React.ReactNode;
}

const routes: MenuRoute[] = [
  { title: "Home", icon: <FaHouse size={30} /> },
  {
    title: "Profile",
    icon: <FaUser size={30} />,
  },
  {
    title: "Messages",
    icon: <FaMessage size={30} />,
  },
  {
    title: "Help",
    icon: <FaCircleQuestion size={30} />,
  },
  {
    title: "Settings",
    icon: <FaGears size={30} />,
  },
  {
    title: "Password",
    icon: <FaHouseLock size={30} />,
  },
  {
    title: "Sign Out",
    icon: <FaDoorClosed size={30} />,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <section>
      {/* <nav className={`navigation ${isActive && "active"}`}> */}
      <nav
        className={`fixed p-5 w-10 h-full bg-blue-500 transition-all duration-500 overflow-hidden hover:w-75 ${isActive && "w-75"}`}
      >
        <ul className="absolute top-0 left-0  w-full flex flex-col justify-center items-center space-y-3">
          {routes.map((route) => (
            <li className="relative w-full list-none hover:bg-blue-700 py-2 px-1">
              <a
                href=""
                className="relative w-full flex none no-underline items-center text-white"
              >
                <span className="relative block min-w-10    text-center">
                  {route.icon}
                </span>
                <span className="relative block px-2 py-0  h-8  text-start whitespace-nowrap">
                  {route.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={` absolute top-0 right-0 w-16 h-16 bg-blue-500 cursor-pointer ${isActive && "bg-blue-700"}`}
        onClick={handleClick}
      ></div>

      {children}
    </section>
  );
}
