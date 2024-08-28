import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaTimes, FaDonate } from "react-icons/fa";
import { HiMail, HiMenuAlt1 } from "react-icons/hi";

import LogoImg from "../../assets/logo1.png";

const Header = ({ setShowSidebar }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <>
      <header className="fixed top-0 right-0 bg-white w-screen text-black shadow-xl z-[9999] justify-between items-center px-6 flex h-[80px] text-center">
        <div className="container py-3 sm:py-0 relative">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center justify-center ">
              <Link to="/" onClick={window.scrollTo(0, 0)}>
                <div className="flex h-full gap-2 items-center font-semibold justify-center lg:ml-16">
                  <img
                    src={LogoImg}
                    alt=""
                    className="lg:h-28 object-contain lg:w-28 w-24 h-24"
                  />
                </div>
              </Link>
            </div>
            {/*desktop navlinks */}
            <div className="hidden   ml-20 lg:block">
              <ul className="flex items-center gap-8">
                <li className="relative py-4 group cursor-pointer">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li className="relative py-4 group cursor-pointer">
                  <NavLink to={"/programs"}>Programs</NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/projects"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/membership"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Membership
                  </NavLink>
                </li>

                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/communityandevents"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Community & Events
                  </NavLink>
                </li>
                <li className="py-4">
                  <HashLink smooth to="/#footer">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-row-reverse gap-2 justify-center items-center ">
              {/* mobile menubar */}
              <div className="flex items-center gap-4">
                <div className="lg:hidden block">
                  {!showMenu ? (
                    <HiMenuAlt1
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                    />
                  ) : (
                    <FaTimes
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                    />
                  )}
                </div>
              </div>

              <Link
                to={"/donate"}
                className="bg-secondary px-4 h-[30px]  rounded-[60px] text-white font-[500] hover:opacity-75 shadow-xl flex items-center gap-2 lg:px-6"
              >
                <FaDonate />
                <span>Donate</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
