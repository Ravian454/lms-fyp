import {
  faBell,
  faQuestionCircle,
  faBars,
  faGlobe,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };


  return (
      <div>
        <div className="flex justify-between items-center fixed top-0 w-full bg-white border-b py-3 px-6 z-20">
          <div className="flex">
            <h2>DashBoard</h2>
          </div>

          <div className="relative">
            <div
                className="lg:hidden cursor-pointer p-2 ml-[400px]"
                onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-gray-400" />
            </div>

            <div className="flex items-center relative">
              <FontAwesomeIcon
                  icon={faBell}
                  className="text-gray-400 w-[25px] h-[25px] p-2"
              />
              <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="text-gray-400 w-[25px] h-[25px] p-2"
              />
              <img
                  src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png"
                  alt="avatar.png"
                  className="p-2 w-[44px] h-[44px]"
              />
              <div className="relative">
                <h5 className="mt-2 cursor-pointer" onClick={toggleMenu}>
                  Username
                </h5>

                {/* Dropdown Content */}
                {showMenu && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-md text-left w-[200px]">
                      <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700"
                          onClick={toggleMenu}
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Signout
                      </Link>
                      <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700"
                          onClick={toggleMenu}
                      >
                        <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
                      </Link>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
