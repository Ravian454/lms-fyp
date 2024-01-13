import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPersonArrowUpFromLine,
  faPerson,
  faFile,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div>
      <div className="flex flex-col w-52 border-r h-screen items-start pl-10 fixed top-20  p-4 bg-white-200">
        <Link to="/" className="p-2">
          <FontAwesomeIcon icon={faGlobe} className="text-gray-400 w-8" /> Dashboard
        </Link>
        <Link className="p-2">
          <FontAwesomeIcon
            icon={faPersonArrowUpFromLine}
            className="text-gray-400 w-8"
          />
          Admin
        </Link>
        <Link to="/profile" className="p-2">
          <FontAwesomeIcon icon={faPerson} className="text-gray-400 w-8" /> Profile
        </Link>
        <Link to="/students" className="p-2">
          <FontAwesomeIcon icon={faPerson} className="text-gray-400 w-8" /> Students
        </Link>
        <Link to="/courses" className="p-2">
          <FontAwesomeIcon icon={faFile} className="text-gray-400 w-8" /> Add Course
        </Link>
        <Link className="p-2">
          <FontAwesomeIcon icon={faGear} className="text-gray-400 w-8" /> Settings
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
