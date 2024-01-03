import {
  faBell,
  faQuestionCircle,
  faBars,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  

  return (
    <div>
      <div className="flex justify-between items-center fixed top-0 w-full bg-white border-b py-3 px-6 z-20">
        <div className="flex ">
         <h2>DashBoard</h2>
        </div>

        <div className="relative">
          <div className="lg:hidden cursor-pointer p-2 ml-[400px]" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-gray-400" />
          </div>
          {/* Dropdown Content */}
          {showMenu && (
            <div className="lg:hidden absolute right-0 mt-2 bg-white rounded-md shadow-md text-left">
              <Link to="/" className="block px-4 py-2 text-sm text-gray-700">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Dashboard
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                <FontAwesomeIcon icon={faGlobe} className="mr-2" /> profile
              </Link>
              <Link
                to="/users"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Users
              </Link>
              <Link to="/" className="block px-4 py-2 text-sm text-gray-700">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Files
              </Link>
              {/* Add other links here */}
            </div>
          )}
        </div>
        <div className="flex items-center">
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
            className="p-2  w-[44px] h-[44px]"
          />
          <h5 className="mt-2">Username</h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
