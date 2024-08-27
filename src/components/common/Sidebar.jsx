import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Sidebar({ showSideBar }) {
  return (
    <>
      <nav
        className={`fixed h-screen w-[250px] bg-secondary/95 z-[999] pt-24 md:hidden text-black transition-all duration-[5000] ease-in-out ${
          showSideBar ? "left-0" : "left-[-100%]"
        } `}
      >
        <div className=" flex flex-col mt-6 ml-8 ">
          <ul className="flex flex-col ml-4 gap-2 ">
            <li className="relative py-2 group cursor-pointer ">
              <NavLink
                className={
                  "hover:border-white hover:text-white transition-all duration-100 ease-in-out"
                }
                to={"/about"}
                activeclassname="active"
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </NavLink>
            </li>
            <li className="relative py-2 group cursor-pointer">
              <NavLink
                className={
                  "hover:border-white hover:text-white transition-all duration-100 ease-in-out"
                }
                to={"/programs"}
                activeclassname="active"
                onClick={() => window.scrollTo(0, 0)}
              >
                Programs
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                className={
                  "hover:border-white hover:text-white transition-all duration-100 ease-in-out"
                }
                activeclassname="active"
                to="/projects"
                onClick={() => window.scrollTo(0, 0)}
              >
                Projects
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                className={
                  "hover:border-white hover:text-white transition-all duration-100 ease-in-out"
                }
                activeclassname="active"
                to="/membership"
                onClick={() => window.scrollTo(0, 0)}
              >
                Membership
              </NavLink>
            </li>

            <li className="py-4">
              <NavLink
                className={
                  "hover:border-white hover:text-white transition-all duration-100 ease-in-out"
                }
                activeclassname="active"
                to="/communityandevents"
                onClick={() => window.scrollTo(0, 0)}
              >
                Community & Events
              </NavLink>
            </li>
            <li className="py-4">
              <HashLink
                smooth
                to="/#footer"
                className={
                  "hover:border-white hover:text-white transition-all duration-100 ease-in-out"
                }
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
