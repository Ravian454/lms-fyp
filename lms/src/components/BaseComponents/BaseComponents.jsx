import Navbar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
function BaseComponents() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex  flex-1">
       <div className="z-50"><Sidebar /></div> 
        <div className="flex-1 w-[98.6vw] pl-52 mt-[60pt] bg-[#FBFDFF]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default BaseComponents;
